import {
  useScroll,
  motion,
  type MotionValue,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useAppStore } from "../store/app";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export type ImageProps = {
  id: string;
  children: ReactNode;
};

export const ParallaxSection = ({ id, children }: ImageProps) => {
  const ref = useRef(null);
  const setActiveView = useAppStore((state) => state.setActiveView);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <motion.section
      className="h-screen w-full snap-start flex justify-center items-center relative"
      onViewportEnter={() => setActiveView(id)}
      viewport={{
        margin: "0px 0px 0px 0px",
        amount: "all",
      }}
      id={id}
    >
      <div ref={ref}>{children}</div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#${id}`}</motion.h2>
    </motion.section>
  );
};
