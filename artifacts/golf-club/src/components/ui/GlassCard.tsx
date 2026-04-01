import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", dark = false, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl p-6 transition-all duration-300 ${
        dark
          ? "bg-white/8 backdrop-blur-xl border border-white/12 hover:border-white/25"
          : "bg-white/75 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-xl"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
