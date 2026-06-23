import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    // 2. Check if mobile/touch device
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      );
    };
    if (isTouchDevice()) return;

    const container = containerRef.current;
    if (!container) return;

    // Track active steps and their timeouts for complete cleanup
    const activeSteps: { element: HTMLDivElement; timeoutIds: number[] }[] = [];
    const maxSteps = 24;

    // Distance-based emission — a new step only appears after the cursor
    // has actually traveled, so the trail reads as a path, not a smear.
    const minDistance = 10; // px between steps
    let lastX: number | null = null;
    let lastY: number | null = null;
    let stepIndex = 0;

    // Light throttle on the raw mousemove handler to stay smooth on fast swipes
    let lastTime = 0;
    const throttleMs = 16;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const x = e.clientX;
      const y = e.clientY;

      if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minDistance) return;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      createStep(x, y, angle);

      lastX = x;
      lastY = y;
    };

    const createStep = (x: number, y: number, angle: number) => {
      // Enforce maximum active steps to avoid performance degradation
      if (activeSteps.length >= maxSteps) {
        const oldest = activeSteps.shift();
        if (oldest) {
          oldest.timeoutIds.forEach((id) => window.clearTimeout(id));
          if (container.contains(oldest.element)) {
            container.removeChild(oldest.element);
          }
        }
      }

      // Alternate a small perpendicular offset so consecutive steps zig-zag
      // along the path, like the rungs of a tiny staircase following the cursor.
      stepIndex += 1;
      const perpRad = ((angle + 90) * Math.PI) / 180;
      const perpOffset = (stepIndex % 2 === 0 ? 1 : -1) * 4;
      const offsetX = Math.cos(perpRad) * perpOffset;
      const offsetY = Math.sin(perpRad) * perpOffset;

      const width = 10 + Math.random() * 6; // 10–16px, same family as the Hero's .stair
      const height = 2 + Math.random() * 2; // 2–4px

      const step = document.createElement("div");
      step.style.position = "fixed";
      step.style.left = `${x + offsetX - width / 2}px`;
      step.style.top = `${y + offsetY - height / 2}px`;
      step.style.width = `${width}px`;
      step.style.height = `${height}px`;
      step.style.borderRadius = "2px";
      step.style.pointerEvents = "none";
      step.style.userSelect = "none";
      step.style.zIndex = "9999";
      step.style.transformOrigin = "left center";

      // Same gradient + glow language as the Hero staircase (.stair)
      step.style.background = "linear-gradient(to right, var(--brand), var(--brand-soft))";
      step.style.boxShadow = "0 0 4px var(--brand-strong), 0 0 10px var(--cursor-trail-glow)";

      step.style.opacity = "0";
      step.style.transform = `rotate(${angle}deg) scaleX(0.3)`;
      step.style.transition = "opacity 140ms ease-out, transform 140ms ease-out";

      container.appendChild(step);

      // Pop in — mirrors the Hero's stairLight keyframe (opacity 0→1, scaleX 0→1)
      requestAnimationFrame(() => {
        step.style.opacity = "1";
        step.style.transform = `rotate(${angle}deg) scaleX(1)`;
      });

      // Brief hold, then a soft fade-out — oldest steps always fade first
      // simply because they were created (and scheduled) earlier.
      const fadeDelay = 110;
      const fadeDuration = 380 + Math.random() * 120; // ~380–500ms
      const fadeTimeoutId = window.setTimeout(() => {
        step.style.transition = `opacity ${fadeDuration}ms ease-in, transform ${fadeDuration}ms ease-in`;
        step.style.opacity = "0";
        step.style.transform = `rotate(${angle}deg) scaleX(0.5) translateY(-2px)`;
      }, fadeDelay);

      const totalLifespan = fadeDelay + fadeDuration + 40;
      const removeTimeoutId = window.setTimeout(() => {
        removeStep(step, removeTimeoutId);
      }, totalLifespan);

      activeSteps.push({ element: step, timeoutIds: [fadeTimeoutId, removeTimeoutId] });
    };

    const removeStep = (step: HTMLDivElement, removeTimeoutId: number) => {
      if (container.contains(step)) {
        container.removeChild(step);
      }
      const index = activeSteps.findIndex((s) => s.timeoutIds.includes(removeTimeoutId));
      if (index > -1) {
        activeSteps.splice(index, 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // Clear all pending timeouts and remove DOM nodes
      activeSteps.forEach((s) => {
        s.timeoutIds.forEach((id) => window.clearTimeout(id));
        if (container.contains(s.element)) {
          container.removeChild(s.element);
        }
      });
      activeSteps.length = 0;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
}
