import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  dark?: boolean;
}

export default function CounterStat({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  dark = false,
}: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = Math.ceil(duration / value);
    let current = 0;
    const timer = setInterval(() => {
      current += Math.max(1, Math.floor(value / 50));
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-serif font-bold leading-none mb-2 ${
        dark ? "text-white" : "text-[#1C3A2B]"
      }`} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
        {prefix}{count.toLocaleString("ru")}{suffix}
      </div>
      <div className={`font-medium text-sm tracking-[0.15em] uppercase mb-1 ${
        dark ? "text-[#C9A96E]" : "text-[#4A8862]"
      }`}>
        {label}
      </div>
      {description && (
        <div className={`text-xs leading-relaxed max-w-[160px] md:max-w-none md:whitespace-nowrap mx-auto ${
          dark ? "text-white/50" : "text-[#1C3A2B]/50"
        }`}>
          {description}
        </div>
      )}
    </div>
  );
}
