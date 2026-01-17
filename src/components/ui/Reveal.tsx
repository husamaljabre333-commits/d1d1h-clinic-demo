"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  durationMs?: number;
  delayMs?: number;
  threshold?: number;
  repeat?: boolean;
};

function getTransform(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return `translateY(${distance}px)`;
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(${distance}px)`;
    case "right":
      return `translateX(-${distance}px)`;
    default:
      return "none";
  }
}

export default function Reveal({
  children,
  className,
  direction = "up",
  distance = 18,
  durationMs = 650,
  delayMs = 0,
  threshold = 0.15,
  repeat = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const hiddenTransform = useMemo(
    () => getTransform(direction, distance),
    [direction, distance]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setVisible(true);
          else if (repeat) setVisible(false);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, repeat]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform,
        transitionProperty: "opacity, transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
