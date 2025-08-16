import React from "react";
import { motion } from "framer-motion";
import Orb from "./Orb";
import TextPressure from "./TextPressure";
import { useTheme } from "../context/theme";

/**
 * ScatterHoverText
 * Splits text into individual characters and scatters them upon hover with random offsets.
 */
export const LandingPage = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen w-full relative p-8 gap-3 flex items-center justify-center">
      <div className="size-[400px] md:size-[600px] w-full relative overflow-hidden">
        <Orb
          hoverIntensity={0.3}
          rotateOnHover={true}
          hue={0.6}
          forceHoverState={false}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {/* <ScatterHoverText
          text="Trading in business"
          className="-ml-48 text-2xl md:text-5xl font-extrabold tracking-tight text-black mt-10 dark:text-white"
        /> */}
        <TextPressure
          text="Trading in business"
          textColor={theme === "dark" ? "#ffffff" : "#000000"}
        />
        <span></span>
        <TextPressure
          text="Thriving in art"
          textColor={theme === "dark" ? "#ffffff" : "#000000"}
          minFontSize={30}
        />
      </div>
    </div>
  );
};

function ScatterHoverText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  // Split the text into individual characters
  const letters = text.split("");

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((char, i) => {
        // Generate random scatter values
        const randX = (Math.random() - 0.5) * 40; // between -20 and 20px
        const randY = (Math.random() - 0.5) * 40; // between -20 and 20px
        const randRot = (Math.random() - 0.5) * 60; // between -30° and 30°

        return (
          <motion.span
            key={i}
            variants={{
              rest: { x: 0, y: 0, rotate: 0, opacity: 1 },
              hover: {
                x: randX,
                y: randY,
                rotate: randRot,
                opacity: 0.8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              },
            }}
            style={{ display: "inline-block" }} // essential for transform to work
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
