import { motion } from "framer-motion";

export function ScatterHoverText({
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
