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

    // Configurable constants for the trail effect
    const MAX_POINTS = 16;
    const MIN_DISTANCE = 16;
    const MAX_DELTA = 5;
    const SPACING = 24;
    const POINT_OPACITY = 0.35;
    const POINT_SIZE = 1.5;
    const FADE_DURATION = 400;
    const BLUR_AMOUNT = "1px";

    const teleportThreshold = 500; // jumps bigger than this resync silently instead of drawing one giant trail
    const maxScrollDeltaPerFrame = 150; // caps how much a single fast-scroll frame can visually "puff" the trail

    type Unit = { elements: HTMLDivElement[]; timeoutIds: number[] };
    const activeUnits: Unit[] = [];

    // Anchor for the mousemove staircase trail
    let anchorX: number | null = null;
    let anchorY: number | null = null;

    // Anchor for the scroll-only zigzag trail.
    let scrollAnchorX: number | null = null;
    let scrollAnchorY: number | null = null;
    let scrollZigToggle = false;

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
      unit.elements.forEach((el) => {
        if (container.contains(el)) container.removeChild(el);
      });
      const index = activeUnits.indexOf(unit);
      if (index > -1) activeUnits.splice(index, 1);
    };

    const baseSegmentStyle = (segment: HTMLDivElement) => {
      segment.style.position = "fixed";
      segment.style.pointerEvents = "none";
      segment.style.userSelect = "none";
      segment.style.zIndex = "9999";
      segment.style.borderRadius = "1px";
      segment.style.boxShadow = "0 0 2px var(--brand-strong), 0 0 4px var(--cursor-trail-glow)";
      segment.style.filter = `blur(${BLUR_AMOUNT})`;
      segment.style.opacity = "0";
      segment.style.transition = "opacity 100ms ease-out";
    };

    const createUnit = (startX: number, startY: number, endX: number, endY: number) => {
      if (activeUnits.length >= MAX_POINTS) {
        const oldest = activeUnits[0];
        if (oldest) removeUnit(oldest);
      }

      const dx = endX - startX;
      const dy = endY - startY;
      const hLen = Math.abs(dx);
      const vLen = Math.abs(dy);

      const elements: HTMLDivElement[] = [];

      // Create horizontal segment if it has significant width
      if (hLen > 0.5) {
        const hDiv = document.createElement("div");
        baseSegmentStyle(hDiv);
        hDiv.style.left = `${Math.min(startX, endX)}px`;
        hDiv.style.top = `${startY - POINT_SIZE / 2}px`;
        hDiv.style.width = `${hLen}px`;
        hDiv.style.height = `${POINT_SIZE}px`;
        hDiv.style.background = "linear-gradient(to right, var(--brand), var(--brand-soft))";
        elements.push(hDiv);
      }

      // Create vertical segment if it has significant height
      if (vLen > 0.5) {
        const vDiv = document.createElement("div");
        baseSegmentStyle(vDiv);
        vDiv.style.left = `${endX - POINT_SIZE / 2}px`;
        vDiv.style.top = `${Math.min(startY, endY)}px`;
        vDiv.style.width = `${POINT_SIZE}px`;
        vDiv.style.height = `${vLen}px`;
        vDiv.style.background = "linear-gradient(to bottom, var(--brand), var(--brand-soft))";
        elements.push(vDiv);
      }

      if (elements.length === 0) return;

      elements.forEach((el) => container.appendChild(el));

      requestAnimationFrame(() => {
        elements.forEach((el) => {
          el.style.opacity = String(POINT_OPACITY);
        });
      });

      const unit: Unit = { elements, timeoutIds: [] };
      activeUnits.push(unit);

      const fadeDelay = 100;
      const fadeTimeoutId = window.setTimeout(() => {
        elements.forEach((el) => {
          el.style.transition = `opacity ${FADE_DURATION}ms ease-in`;
          el.style.opacity = "0";
        });
      }, fadeDelay);

      const removeTimeoutId = window.setTimeout(() => {
        removeUnit(unit);
      }, fadeDelay + FADE_DURATION + 50);

      unit.timeoutIds.push(fadeTimeoutId, removeTimeoutId);
    };

    // Pure-scroll counterpart to createUnit: a small "L" — a short
    // horizontal jog then a vertical riser — but unlike the mousemove
    // staircase, the horizontal jog always oscillates between `baseX` and
    // `baseX + scrollStepX` instead of accumulating, so the zigzag reads as
    // a staircase without ever drifting away from the cursor.
    const createScrollStepUnit = (baseX: number, fromY: number, toY: number) => {
      if (activeUnits.length >= MAX_POINTS) {
        const oldest = activeUnits[0];
        if (oldest) removeUnit(oldest);
      }

      const scrollStepX = 8; // lateral jog per zigzag step
      const prevX = baseX + (scrollZigToggle ? scrollStepX : 0);
      scrollZigToggle = !scrollZigToggle;
      const currX = baseX + (scrollZigToggle ? scrollStepX : 0);

      const vLen = Math.abs(toY - fromY);
      const hLen = Math.abs(currX - prevX);

      const elements: HTMLDivElement[] = [];

      if (hLen > 0.5) {
        const hDiv = document.createElement("div");
        baseSegmentStyle(hDiv);
        hDiv.style.left = `${Math.min(prevX, currX)}px`;
        hDiv.style.top = `${fromY - POINT_SIZE / 2}px`;
        hDiv.style.width = `${hLen}px`;
        hDiv.style.height = `${POINT_SIZE}px`;
        hDiv.style.background = "linear-gradient(to right, var(--brand), var(--brand-soft))";
        elements.push(hDiv);
      }

      const vDiv = document.createElement("div");
      baseSegmentStyle(vDiv);
      vDiv.style.left = `${currX - POINT_SIZE / 2}px`;
      vDiv.style.top = `${Math.min(fromY, toY)}px`;
      vDiv.style.width = `${POINT_SIZE}px`;
      vDiv.style.height = `${vLen}px`;
      vDiv.style.background = "linear-gradient(to bottom, var(--brand), var(--brand-soft))";
      elements.push(vDiv);

      elements.forEach((el) => container.appendChild(el));

      requestAnimationFrame(() => {
        elements.forEach((el) => {
          el.style.opacity = String(POINT_OPACITY);
        });
      });

      const unit: Unit = { elements, timeoutIds: [] };
      activeUnits.push(unit);

      const fadeDelay = 100;
      const fadeTimeoutId = window.setTimeout(() => {
        elements.forEach((el) => {
          el.style.transition = `opacity ${FADE_DURATION}ms ease-in`;
          el.style.opacity = "0";
        });
      }, fadeDelay);

      const removeTimeoutId = window.setTimeout(() => {
        removeUnit(unit);
      }, fadeDelay + FADE_DURATION + 50);

      unit.timeoutIds.push(fadeTimeoutId, removeTimeoutId);
    };

    // Walks the straight line from (fromX, fromY) to (toX, toY) and drops a
    // stair unit every `SPACING` px, so fast swipes and big scroll jumps fill
    // in with degraus instead of leaving gaps.
    const addTrailBetween = (fromX: number, fromY: number, toX: number, toY: number) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const distance = Math.hypot(dx, dy);

      if (distance < MIN_DISTANCE) return;

      if (distance > teleportThreshold) {
        anchorX = toX;
        anchorY = toY;
        return;
      }

      const steps = Math.min(MAX_DELTA, Math.max(1, Math.round(distance / SPACING)));

      let prevX = fromX;
      let prevY = fromY;

      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const currX = fromX + dx * t;
        const currY = fromY + dy * t;
        createUnit(prevX, prevY, currX, currY);
        prevX = currX;
        prevY = currY;
      }

      anchorX = toX;
      anchorY = toY;
    };

    const maxScrollStepsPerCall = 6; // keeps a single fast-scroll frame from drawing a long zigzag

    // Scroll counterpart of addTrailBetween: walks the vertical span at a
    // fixed origin x (the cursor's real x), dropping a zigzag step every
    // `SPACING` px.
    const addScrollZigzagBetween = (baseX: number, fromY: number, toY: number) => {
      const dy = toY - fromY;
      const distance = Math.abs(dy);

      if (distance < SPACING) return;
      if (distance > teleportThreshold) return;

      const steps = Math.min(maxScrollStepsPerCall, Math.max(1, Math.round(distance / SPACING)));

      for (let i = 1; i <= steps; i++) {
        const segmentFromY = fromY + dy * ((i - 1) / steps);
        const segmentToY = fromY + dy * (i / steps);
        createScrollStepUnit(baseX, segmentFromY, segmentToY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      rawX = e.clientX;
      rawY = e.clientY;
      cursorKnown = true;
    };

    // Sections marked with data-cursor-trail-ignore (e.g. the Interface
    // Components board) draw their own real UI crops — the trail visually
    // competes with them, so we silently skip drawing while the pointer is
    // over one, without removing the effect from the rest of the site.
    const isPointExcluded = (x: number, y: number) => {
      const zones = document.querySelectorAll("[data-cursor-trail-ignore]");
      for (const zone of zones) {
        const r = zone.getBoundingClientRect();
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
      }
      return false;
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
          const mouseMoved = rawX !== lastProcessedX || rawY !== lastProcessedY;
          const excluded = isPointExcluded(rawX, rawY);

          if (mouseMoved) {
            if (excluded) {
              // Re-anchor silently so re-entering the normal area never
              // draws one giant catch-up trail across the excluded zone.
              anchorX = rawX;
              anchorY = rawY;
            } else {
              addTrailBetween(anchorX, anchorY, rawX, rawY);
            }
            lastProcessedX = rawX;
            lastProcessedY = rawY;

            // The mouse actually moved — any in-progress scroll trail must
            // re-anchor to this fresh position next time, never continue
            // from where it last left off.
            scrollAnchorX = null;
            scrollAnchorY = null;
          }

          // Scroll with a stationary cursor: the content moves underneath a
          // fixed pointer, so the trail must be a zigzag staircase rooted
          // at the cursor's real position — never at the stair trail's
          // (possibly drifted) anchor, and never accumulating sideways.
          // If the mouse moved in this same frame, the stair trail above
          // already accounts for the frame, so skip this.
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastProcessedScrollY;
          if (scrollDelta !== 0 && !mouseMoved && !excluded) {
            if (scrollAnchorX === null || scrollAnchorY === null) {
              scrollAnchorX = rawX;
              scrollAnchorY = rawY;
              scrollZigToggle = false;
            }

            const clampedDelta = Math.max(
              -maxScrollDeltaPerFrame,
              Math.min(maxScrollDeltaPerFrame, scrollDelta)
            );
            // Inverted on purpose: scrolling down (positive delta) moves the
            // page content up past a stationary cursor, so the trail must
            // project upward (negative Y) to read as the cursor's relative
            // previous position — not chase the scroll direction itself.
            const nextScrollAnchorY = scrollAnchorY - clampedDelta;
            addScrollZigzagBetween(scrollAnchorX, scrollAnchorY, nextScrollAnchorY);
            scrollAnchorY = nextScrollAnchorY;
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
        unit.elements.forEach((el) => {
          if (container.contains(el)) container.removeChild(el);
        });
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
