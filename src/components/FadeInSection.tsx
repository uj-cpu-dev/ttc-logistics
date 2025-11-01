// components/FadeInSection.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const getOffset = () => {
    switch (direction) {
      case "left": return { x: -60, y: 0 };
      case "right": return { x: 60, y: 0 };
      case "down": return { x: 0, y: 60 };
      default: return { x: 0, y: 60 }; // up
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getOffset() }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}