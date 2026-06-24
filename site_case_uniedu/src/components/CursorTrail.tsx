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

    type Unit = { elements: HTMLDivElement[]; timeoutIds: number[] };
    const activeUnits: Unit[] = [];
    const maxUnits = 32; // max active "stair" units (1 unit = 1 horizontal + 1 vertical segment, or 1 vertical-only segment for scroll)

    // Spacing between stair units along a path — also used as the
    // interpolation step so fast moves/scrolls don't leave gaps.
    const spacing = 11;
    const maxStepsPerCall = 14; // hard cap on units drawn from a single jump, so extreme moves can't flood the DOM
    const teleportThreshold = 500; // jumps bigger than this resync silently instead of drawing one giant trail
    const maxScrollDeltaPerFrame = 150; // caps how much a single fast-scroll frame can visually "puff" the trail

    // Anchor for the mousemove staircase trail — walks forward as units are
    // created so consecutive stair units connect to each other.
    let anchorX: number | null = null;
    let anchorY: number | null = null;
    let lastSignX = 1;
    let lastSignY = 1;

    // Anchor for the scroll-only zigzag trail. Always re-pinned to the
    // cursor's real position when the mouse moves, so a scroll session can
    // never inherit a stale/drifted origin from the stair trail above.
    // scrollAnchorX is the fixed origin x — the zigzag jogs out from it and
    // back, but never drifts past it, so the trail stays anchored near the
    // cursor instead of "walking" sideways.
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

      const unit: Unit = { elements: [hDiv, vDiv], timeoutIds: [] };
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

    const scrollStepX = 8 + Math.random() * 4; // 8–12px lateral jog per zigzag step

    // Pure-scroll counterpart to createUnit: a small "L" — a short
    // horizontal jog then a vertical riser — but unlike the mousemove
    // staircase, the horizontal jog always oscillates between `baseX` and
    // `baseX + scrollStepX` instead of accumulating, so the zigzag reads as
    // a staircase without ever drifting away from the cursor.
    const createScrollStepUnit = (baseX: number, fromY: number, toY: number) => {
      if (activeUnits.length >= maxUnits) {
        const oldest = activeUnits[0];
        if (oldest) removeUnit(oldest);
      }

      const prevX = baseX + (scrollZigToggle ? scrollStepX : 0);
      scrollZigToggle = !scrollZigToggle;
      const currX = baseX + (scrollZigToggle ? scrollStepX : 0);

      const thickness = 2 + Math.random(); // 2–3px, matches the stair trail's thickness
      const vLen = Math.abs(toY - fromY);
      const hLen = Math.abs(currX - prevX);

      const elements: HTMLDivElement[] = [];

      if (hLen > 0.5) {
        const hDiv = document.createElement("div");
        baseSegmentStyle(hDiv);
        hDiv.style.left = `${Math.min(prevX, currX)}px`;
        hDiv.style.top = `${fromY - thickness / 2}px`;
        hDiv.style.width = `${hLen}px`;
        hDiv.style.height = `${thickness}px`;
        hDiv.style.background = "linear-gradient(to right, var(--brand), var(--brand-soft))";
        elements.push(hDiv);
      }

      const vDiv = document.createElement("div");
      baseSegmentStyle(vDiv);
      vDiv.style.left = `${currX - thickness / 2}px`;
      vDiv.style.top = `${Math.min(fromY, toY)}px`;
      vDiv.style.width = `${thickness}px`;
      vDiv.style.height = `${vLen}px`;
      vDiv.style.background = "linear-gradient(to bottom, var(--brand), var(--brand-soft))";
      elements.push(vDiv);

      elements.forEach((el) => container.appendChild(el));

      requestAnimationFrame(() => {
        elements.forEach((el) => {
          el.style.opacity = "1";
        });
      });

      const unit: Unit = { elements, timeoutIds: [] };
      activeUnits.push(unit);

      const fadeDelay = 150;
      const fadeDuration = 700 + Math.random() * 300; // ~700–1000ms
      const fadeTimeoutId = window.setTimeout(() => {
        elements.forEach((el) => {
          el.style.transition = `opacity ${fadeDuration}ms ease-in`;
          el.style.opacity = "0";
        });
      }, fadeDelay);

      const removeTimeoutId = window.setTimeout(() => {
        removeUnit(unit);
      }, fadeDelay + fadeDuration + 50);

      unit.timeoutIds.push(fadeTimeoutId, removeTimeoutId);
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

    const maxScrollStepsPerCall = 6; // keeps a single fast-scroll frame from drawing a long zigzag

    // Scroll counterpart of addTrailBetween: walks the vertical span at a
    // fixed origin x (the cursor's real x), dropping a zigzag step every
    // `spacing` px. The steps oscillate left/right around that origin
    // instead of drifting, so a scroll with a stationary mouse reads as a
    // short staircase rooted at the cursor, not a line walking off on its own.
    const addScrollZigzagBetween = (baseX: number, fromY: number, toY: number) => {
      const dy = toY - fromY;
      const distance = Math.abs(dy);

      if (distance < spacing) return;
      if (distance > teleportThreshold) return;

      const steps = Math.min(maxScrollStepsPerCall, Math.max(1, Math.round(distance / spacing)));

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

          if (mouseMoved) {
            addTrailBetween(anchorX, anchorY, rawX, rawY);
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
          if (scrollDelta !== 0 && !mouseMoved) {
            if (scrollAnchorX === null || scrollAnchorY === null) {
              scrollAnchorX = rawX;
              scrollAnchorY = rawY;
              scrollZigToggle = false;
            }

            const clampedDelta = Math.max(
              -maxScrollDeltaPerFrame,
              Math.min(maxScrollDeltaPerFrame, scrollDelta)
            );
            const nextScrollAnchorY = scrollAnchorY + clampedDelta;
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
