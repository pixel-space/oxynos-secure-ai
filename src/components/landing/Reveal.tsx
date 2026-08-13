import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0) {
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
      { threshold, rootMargin: "0px 0px -10% 0px" },
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

  // The observed wrapper is never clipped — clipping the observed element
  // itself shrinks its intersection rect and the observer never fires.
  return (
    <Tag ref={ref as never} className={className}>
      <div
        className={`${variant} ${open ? "is-open" : ""} h-full`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </Tag>
  );
}