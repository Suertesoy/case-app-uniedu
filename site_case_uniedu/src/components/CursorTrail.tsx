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

    // Limit particles density by throttling (e.g. 30ms)
    let lastTime = 0;
    const throttleMs = 30;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      createParticle(e.clientX, e.clientY);
    };

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      
      // Size between 6px and 12px
      const size = Math.floor(Math.random() * 7) + 6;
      
      particle.style.position = "fixed";
      particle.style.left = `${x - size / 2}px`;
      particle.style.top = `${y - size / 2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.userSelect = "none";
      particle.style.zIndex = "9999";
      
      // Use variables defined in index.css
      particle.style.backgroundColor = "var(--cursor-trail)";
      particle.style.boxShadow = "0 0 8px var(--cursor-trail-glow)";
      
      // Scale and opacity transitions
      particle.style.transform = "scale(1)";
      particle.style.opacity = "1";
      particle.style.transition = "transform 0.6s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.6s cubic-bezier(0.1, 0.8, 0.3, 1)";

      container.appendChild(particle);

      // Start fade/scale transition in next frame
      requestAnimationFrame(() => {
        particle.style.transform = "scale(0.2)";
        particle.style.opacity = "0";
      });

      // Track particle and its timeout for removal
      const timeoutId = window.setTimeout(() => {
        removeParticle(particle, timeoutId);
      }, 600);

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
