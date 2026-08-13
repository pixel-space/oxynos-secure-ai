import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOpen(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, open };
}

type RevealProps = {
  children: ReactNode;
  variant?: "tear" | "unfold";
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "tr";
};

export function Reveal({
  children,
  variant = "tear",
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const { ref, open } = useReveal<HTMLElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref as never}
      className={`${variant} ${open ? "is-open" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}