import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageCard({ src, alt, title, subtitle, className = "", aspectRatio = "aspect-[4/3]" }: ImageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 via-[#1C3A2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
          {title && <p className="text-white font-serif font-semibold text-lg leading-tight">{title}</p>}
          {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
        </div>
      )}
    </motion.div>
  );
}
