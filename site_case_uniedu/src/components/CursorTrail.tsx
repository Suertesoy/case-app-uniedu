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

    // Track active particle elements and their timeouts for complete cleanup
    const activeParticles: { element: HTMLDivElement; timeoutId: number }[] = [];
    const maxParticles = 45;

    // Track previous mouse position to calculate angle/direction
    let prevX: number | null = null;
    let prevY: number | null = null;

    // Limit particles density by throttling (e.g. 24ms)
    let lastTime = 0;
    const throttleMs = 24;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const x = e.clientX;
      const y = e.clientY;

      if (prevX !== null && prevY !== null) {
        const dx = x - prevX;
        const dy = y - prevY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only draw if mouse has moved a threshold distance
        if (distance > 3) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          createParticle(x, y, angle);
        }
      } else {
        createParticle(x, y, 0);
      }

      prevX = x;
      prevY = y;
    };

    const createParticle = (x: number, y: number, angle: number) => {
      // Enforce maximum particle cap to avoid performance degradation
      if (activeParticles.length >= maxParticles) {
        const oldest = activeParticles.shift();
        if (oldest) {
          window.clearTimeout(oldest.timeoutId);
          if (container.contains(oldest.element)) {
            container.removeChild(oldest.element);
          }
        }
      }

      const particle = document.createElement("div");
      
      // Capsule shape: width larger than height
      const width = Math.floor(Math.random() * 9) + 16; // 16px to 24px
      const height = Math.floor(Math.random() * 4) + 6; // 6px to 9px
      
      particle.style.position = "fixed";
      particle.style.left = `${x - width / 2}px`;
      particle.style.top = `${y - height / 2}px`;
      particle.style.width = `${width}px`;
      particle.style.height = `${height}px`;
      particle.style.borderRadius = "9999px"; // capsule/feixe shape
      particle.style.pointerEvents = "none";
      particle.style.userSelect = "none";
      particle.style.zIndex = "9999";
      
      // Use radial gradient for soft fade at the edges and intense center
      particle.style.background = "radial-gradient(ellipse, var(--cursor-trail-color) 0%, transparent 85%)";
      
      // High presence double glow box shadow (wider spread)
      particle.style.boxShadow = "0 0 12px var(--cursor-trail-glow), 0 0 28px var(--cursor-trail-glow)";
      
      // Set initial transform with rotation and scale(1)
      particle.style.transform = `rotate(${angle}deg) scale(1)`;
      particle.style.opacity = "1";
      particle.style.transition = "transform 1.25s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.25s cubic-bezier(0.1, 0.8, 0.3, 1)";

      container.appendChild(particle);

      // Start fade/scale transition in next frame
      requestAnimationFrame(() => {
        particle.style.transform = `rotate(${angle}deg) scale(0.15)`;
        particle.style.opacity = "0";
      });

      // Track particle and its timeout for removal
      const timeoutId = window.setTimeout(() => {
        removeParticle(particle, timeoutId);
      }, 1250);

      activeParticles.push({ element: particle, timeoutId });
    };

    const removeParticle = (particle: HTMLDivElement, timeoutId: number) => {
      if (container.contains(particle)) {
        container.removeChild(particle);
      }
      const index = activeParticles.findIndex((p) => p.timeoutId === timeoutId);
      if (index > -1) {
        activeParticles.splice(index, 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      
      // Clear all pending timeouts and remove DOM nodes
      activeParticles.forEach((p) => {
        window.clearTimeout(p.timeoutId);
        if (container.contains(p.element)) {
          container.removeChild(p.element);
        }
      });
      activeParticles.length = 0;
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
