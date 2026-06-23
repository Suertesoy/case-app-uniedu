import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    if (isTouchDevice) return;

    const container = containerRef.current;
    if (!container) return;

    type Unit = { h: HTMLDivElement; v: HTMLDivElement; timeoutIds: number[] };
    const activeUnits: Unit[] = [];
    const maxUnits = 32; // max active "stair" units (1 unit = 1 horizontal + 1 vertical segment)

    // Spacing between stair units along a path — also used as the
    // interpolation step so fast moves/scrolls don't leave gaps.
    const spacing = 11;
    const maxStepsPerCall = 14; // hard cap on units drawn from a single jump, so extreme moves can't flood the DOM
    const teleportThreshold = 500; // jumps bigger than this resync silently instead of drawing one giant trail
    const maxScrollDeltaPerFrame = 150; // caps how much a single fast-scroll frame can visually "puff" the trail

    let anchorX: number | null = null;
    let anchorY: number | null = null;
    let lastSignX = 1;
    let lastSignY = 1;

    // Raw, unthrottled input captured by the listeners; the rAF loop below
    // batches it into trail generation at most once per frame.
    let rawX = 0;
    let rawY = 0;
    let cursorKnown = false;
    let lastProcessedX: number | null = null;
    let lastProcessedY: number | null = null;
    let lastProcessedScrollY = window.scrollY;

    const removeUnit = (unit: Unit) => {
      unit.timeoutIds.forEach((id) => window.clearTimeout(id));
      if (container.contains(unit.h)) container.removeChild(unit.h);
      if (container.contains(unit.v)) container.removeChild(unit.v);
      const index = activeUnits.indexOf(unit);
      if (index > -1) activeUnits.splice(index, 1);
    };

    const baseSegmentStyle = (segment: HTMLDivElement) => {
      segment.style.position = "fixed";
      segment.style.pointerEvents = "none";
      segment.style.userSelect = "none";
      segment.style.zIndex = "9999";
      segment.style.borderRadius = "2px";
      segment.style.boxShadow = "0 0 4px var(--brand-strong), 0 0 8px var(--cursor-trail-glow)";
      segment.style.opacity = "0";
      segment.style.transition = "opacity 150ms ease-out";
    };

    const createUnit = (x: number, y: number) => {
      if (anchorX === null || anchorY === null) return;

      if (activeUnits.length >= maxUnits) {
        const oldest = activeUnits[0];
        if (oldest) removeUnit(oldest);
      }

      const dx = x - anchorX;
      const dy = y - anchorY;

      const signX = dx !== 0 ? Math.sign(dx) : lastSignX;
      const signY = dy !== 0 ? Math.sign(dy) : lastSignY;
      lastSignX = signX;
      lastSignY = signY;

      // Decompose the cursor's travel into a real staircase: a horizontal
      // tread (matching the Hero's stair direction) then a vertical riser
      // connecting it to the next tread — so up, down and diagonal moves
      // all read as connected steps instead of loose marks.
      const hLen = 12 + Math.random() * 4; // 12–16px
      const vLen = 8 + Math.random() * 4; // 8–12px
      const thickness = 2 + Math.random(); // 2–3px

      const startX = anchorX;
      const startY = anchorY;
      const cornerX = startX + hLen * signX;
      const cornerY = startY;
      const endX = cornerX;
      const endY = cornerY + vLen * signY;

      const hDiv = document.createElement("div");
      baseSegmentStyle(hDiv);
      hDiv.style.left = `${Math.min(startX, cornerX)}px`;
      hDiv.style.top = `${startY - thickness / 2}px`;
      hDiv.style.width = `${hLen}px`;
      hDiv.style.height = `${thickness}px`;
      hDiv.style.background = "linear-gradient(to right, var(--brand), var(--brand-soft))";

      const vDiv = document.createElement("div");
      baseSegmentStyle(vDiv);
      vDiv.style.left = `${cornerX - thickness / 2}px`;
      vDiv.style.top = `${Math.min(cornerY, endY)}px`;
      vDiv.style.width = `${thickness}px`;
      vDiv.style.height = `${vLen}px`;
      vDiv.style.background = "linear-gradient(to bottom, var(--brand), var(--brand-soft))";

      container.appendChild(hDiv);
      container.appendChild(vDiv);

      requestAnimationFrame(() => {
        hDiv.style.opacity = "1";
        vDiv.style.opacity = "1";
      });

      const unit: Unit = { h: hDiv, v: vDiv, timeoutIds: [] };
      activeUnits.push(unit);

      // Brief hold (lets the fade-in finish), then a soft fade-out — oldest
      // units always fade first simply because they were created earlier.
      const fadeDelay = 150;
      const fadeDuration = 550 + Math.random() * 250; // ~550–800ms
      const fadeTimeoutId = window.setTimeout(() => {
        hDiv.style.transition = `opacity ${fadeDuration}ms ease-in`;
        vDiv.style.transition = `opacity ${fadeDuration}ms ease-in`;
        hDiv.style.opacity = "0";
        vDiv.style.opacity = "0";
      }, fadeDelay);

      const removeTimeoutId = window.setTimeout(() => {
        removeUnit(unit);
      }, fadeDelay + fadeDuration + 50);

      unit.timeoutIds.push(fadeTimeoutId, removeTimeoutId);

      anchorX = endX;
      anchorY = endY;
    };

    // Walks the straight line from (fromX, fromY) to (toX, toY) and drops a
    // stair unit every `spacing` px, so fast swipes and big scroll jumps fill
    // in with degraus instead of leaving gaps. Each unit still snaps to its
    // own hLen/vLen size — only the waypoint (and therefore direction) comes
    // from the interpolation.
    const addTrailBetween = (fromX: number, fromY: number, toX: number, toY: number) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const distance = Math.hypot(dx, dy);

      if (distance < spacing) return;

      if (distance > teleportThreshold) {
        anchorX = toX;
        anchorY = toY;
        return;
      }

      const steps = Math.min(maxStepsPerCall, Math.max(1, Math.round(distance / spacing)));

      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        createUnit(fromX + dx * t, fromY + dy * t);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      rawX = e.clientX;
      rawY = e.clientY;
      cursorKnown = true;
    };

    let rafId: number;

    const tick = () => {
      if (cursorKnown) {
        if (anchorX === null || anchorY === null) {
          // First sighting of the cursor — anchor here without drawing,
          // and treat the page's current scroll position as the baseline
          // so mounting mid-scroll doesn't fake a giant scroll jump.
          anchorX = rawX;
          anchorY = rawY;
          lastProcessedX = rawX;
          lastProcessedY = rawY;
          lastProcessedScrollY = window.scrollY;
        } else {
          if (rawX !== lastProcessedX || rawY !== lastProcessedY) {
            addTrailBetween(anchorX, anchorY, rawX, rawY);
            lastProcessedX = rawX;
            lastProcessedY = rawY;
          }

          // Scroll as relative cursor movement: the cursor's viewport
          // position doesn't change while scrolling, but the content
          // beneath it does — so a scroll delta gets the same stair
          // treatment as a vertical mouse move, clamped so a fast fling
          // can't dump dozens of units in a single frame.
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastProcessedScrollY;
          if (scrollDelta !== 0 && anchorX !== null && anchorY !== null) {
            const clampedDelta = Math.max(
              -maxScrollDeltaPerFrame,
              Math.min(maxScrollDeltaPerFrame, scrollDelta)
            );
            addTrailBetween(anchorX, anchorY, anchorX, anchorY + clampedDelta);
          }
          lastProcessedScrollY = currentScrollY;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      activeUnits.forEach((unit) => {
        unit.timeoutIds.forEach((id) => window.clearTimeout(id));
        if (container.contains(unit.h)) container.removeChild(unit.h);
        if (container.contains(unit.v)) container.removeChild(unit.v);
      });
      activeUnits.length = 0;
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
