import { useEffect, useRef } from "react";

const GRADIENT_ID = "cursor-stair-trail-gradient";
const SVG_NS = "http://www.w3.org/2000/svg";

export default function CursorTrail() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    if (isTouchDevice) return;

    const svg = svgRef.current;
    if (!svg) return;

    type Unit = { h: SVGLineElement; v: SVGLineElement; timeoutIds: number[] };
    const activeUnits: Unit[] = [];
    const maxUnits = 12; // ~24 line segments (2 per unit) active at once

    // A new stair unit is only drawn once the cursor has actually traveled —
    // this keeps the trail reading as a path, not a smear.
    const minDistance = 12;
    const maxAnchorDrift = 80; // resync without drawing if the anchor falls too far behind a fast flick

    let anchorX: number | null = null;
    let anchorY: number | null = null;
    let lastSignX = 1;
    let lastSignY = 1;

    let lastTime = 0;
    const throttleMs = 16;

    const removeUnit = (unit: Unit) => {
      unit.timeoutIds.forEach((id) => window.clearTimeout(id));
      if (svg.contains(unit.h)) svg.removeChild(unit.h);
      if (svg.contains(unit.v)) svg.removeChild(unit.v);
      const index = activeUnits.indexOf(unit);
      if (index > -1) activeUnits.splice(index, 1);
    };

    const styleSegment = (line: SVGLineElement, strokeWidth: number) => {
      line.setAttribute("stroke", `url(#${GRADIENT_ID})`);
      line.setAttribute("stroke-width", String(strokeWidth));
      line.setAttribute("stroke-linecap", "round");
      line.style.opacity = "0";
      line.style.transition = "opacity 120ms ease-out";
      line.style.filter = "drop-shadow(0 0 3px var(--brand-strong)) drop-shadow(0 0 6px var(--cursor-trail-glow))";
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
      const hLen = 10 + Math.random() * 6; // 10–16px
      const vLen = 6 + Math.random() * 6; // 6–12px

      const cornerX = anchorX + hLen * signX;
      const cornerY = anchorY;
      const endX = cornerX;
      const endY = cornerY + vLen * signY;

      const strokeWidth = 2 + Math.random();

      const hLine = document.createElementNS(SVG_NS, "line");
      hLine.setAttribute("x1", String(anchorX));
      hLine.setAttribute("y1", String(anchorY));
      hLine.setAttribute("x2", String(cornerX));
      hLine.setAttribute("y2", String(cornerY));
      styleSegment(hLine, strokeWidth);

      const vLine = document.createElementNS(SVG_NS, "line");
      vLine.setAttribute("x1", String(cornerX));
      vLine.setAttribute("y1", String(cornerY));
      vLine.setAttribute("x2", String(endX));
      vLine.setAttribute("y2", String(endY));
      styleSegment(vLine, strokeWidth);

      svg.appendChild(hLine);
      svg.appendChild(vLine);

      requestAnimationFrame(() => {
        hLine.style.opacity = "1";
        vLine.style.opacity = "1";
      });

      const unit: Unit = { h: hLine, v: vLine, timeoutIds: [] };
      activeUnits.push(unit);

      // Brief hold, then a soft fade-out — oldest units always fade first
      // simply because they were created (and scheduled) earlier.
      const fadeDelay = 120;
      const fadeDuration = 400 + Math.random() * 200; // total lifespan ≈ 560–760ms
      const fadeTimeoutId = window.setTimeout(() => {
        hLine.style.transition = `opacity ${fadeDuration}ms ease-in`;
        vLine.style.transition = `opacity ${fadeDuration}ms ease-in`;
        hLine.style.opacity = "0";
        vLine.style.opacity = "0";
      }, fadeDelay);

      const removeTimeoutId = window.setTimeout(() => {
        removeUnit(unit);
      }, fadeDelay + fadeDuration + 40);

      unit.timeoutIds.push(fadeTimeoutId, removeTimeoutId);

      anchorX = endX;
      anchorY = endY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const x = e.clientX;
      const y = e.clientY;

      if (anchorX === null || anchorY === null) {
        anchorX = x;
        anchorY = y;
        return;
      }

      const distanceFromAnchor = Math.hypot(x - anchorX, y - anchorY);

      // Fast flicks can outrun the staircase — resync silently instead of
      // drawing one giant connecting step across the gap.
      if (distanceFromAnchor > maxAnchorDrift) {
        anchorX = x;
        anchorY = y;
        return;
      }

      if (distanceFromAnchor < minDistance) return;

      createUnit(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      activeUnits.forEach((unit) => {
        unit.timeoutIds.forEach((id) => window.clearTimeout(id));
        if (svg.contains(unit.h)) svg.removeChild(unit.h);
        if (svg.contains(unit.v)) svg.removeChild(unit.v);
      });
      activeUnits.length = 0;
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full overflow-hidden select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-soft)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
