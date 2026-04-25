"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
      if (!visible) setVisible(true);
    };

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setHovering(true);
    };

    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setHovering(false);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  if (!visible) return null;

return (
  <>
    <div
      ref={dotRef}
      className={`fixed z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 transition-[width,height,opacity] duration-300 ${
        hovering ? "w-0 h-0 opacity-0" : "w-2 h-2 opacity-100"
      }`}
    />
    <div
      ref={ringRef}
      style={{
        transition: "width 300ms, height 300ms, border-color 300ms",
        border: "1.5px solid",
      }}
      className={`fixed z-[998] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full ${
        hovering
          ? "w-14 h-14 border-blue-500"
          : "w-9 h-9 border-blue-500/50"
      }`}
    />
  </>
);





}