import { useScroll, motion } from "framer-motion";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #4F46E5 0%, #F59E0B 100%)",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left pointer-events-none"
    />
  );
};
