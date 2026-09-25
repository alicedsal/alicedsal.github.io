"use client";

import { useEffect, useRef } from "react";

// colorful cursor trail in the empty space around the content,
// inspired by githubuniverse.com: grid-snapped squares with a code glyph that fade out.
const CELL = 18;
const LIFE = 900; // ms until a square fully fades
const JUMP = 240; // px; longer gaps between events are not filled in
const COLORS = ["#8b5cf6", "#ec4899", "#22c55e", "#eab308", "#06b6d4", "#f97316"];
const GLYPHS = "{}[]<>()/*&#;=+$_~!?:";
// elements the trail should never draw over
const TEXT = "h1, h2, h3, p, li, dt, dd, a, .card, .links";

type Cell = { x: number; y: number; color: string; glyph: string; born: number };

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (reduceMotion || !hasMouse || !canvas || !ctx) return;

    const cells = new Map<string, Cell>();
    let last: { x: number; y: number } | null = null;
    let frame = 0;

    const overText = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y);
      return !!el?.closest(TEXT);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const add = (px: number, py: number) => {
      const x = Math.floor(px / CELL) * CELL;
      const y = Math.floor(py / CELL) * CELL;
      // the whole square has to be clear of text, not just the cursor point
      if (
        overText(x + 1, y + 1) ||
        overText(x + CELL - 1, y + 1) ||
        overText(x + 1, y + CELL - 1) ||
        overText(x + CELL - 1, y + CELL - 1)
      ) {
        return;
      }
      const key = `${x},${y}`;
      const existing = cells.get(key);
      if (existing) {
        existing.born = performance.now();
        return;
      }
      cells.set(key, {
        x,
        y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        born: performance.now(),
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = "600 11px ui-monospace, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const [key, c] of cells) {
        const age = (now - c.born) / LIFE;
        if (age >= 1) {
          cells.delete(key);
          continue;
        }
        ctx.globalAlpha = 1 - age;
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x + 1, c.y + 1, CELL - 2, CELL - 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
        ctx.fillText(c.glyph, c.x + CELL / 2, c.y + CELL / 2 + 1);
      }
      ctx.globalAlpha = 1;
      frame = cells.size ? requestAnimationFrame(draw) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (overText(e.clientX, e.clientY)) {
        last = null;
        return;
      }
      // fill the gap between events so fast movements still leave a continuous path
      if (last) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        const dist = Math.hypot(dx, dy);
        if (dist < JUMP) {
          const steps = Math.ceil(dist / CELL);
          for (let i = 1; i < steps; i++) add(last.x + (dx * i) / steps, last.y + (dy * i) / steps);
        }
      }
      add(e.clientX, e.clientY);
      last = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const reset = () => {
      last = null;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", reset, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", reset);
      document.documentElement.removeEventListener("pointerleave", reset);
    };
  }, []);

  return <canvas ref={canvasRef} className="trail" aria-hidden="true" />;
}
