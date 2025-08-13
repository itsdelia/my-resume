import { motion, MotionValue, useScroll, useSpring } from "motion/react";
import { useState } from "react";

const MENU = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-5 right-5 p-6 text-sm">
      <div className="h-24 w-0.5 bg-slate-800 absolute left-1 top-8 animated-line" />
      <ul className="text-left text-xs uppercase">
        {MENU.map((item) => (
          <Item label={item.label} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};

const TEXT_CLASSNAME =
  "text-slate-800 text-sm font-bold uppercase flex items-center gap-2.5 leading-7";

function Item({ label }: { label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="relative cursor-pointer overflow-hidden flex flex-col items-start gap-2 h-7"
      style={{
        justifyContent: isHovered ? "flex-end" : "flex-start",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a href={'#' + label}>
        <motion.span layout className={TEXT_CLASSNAME}>
          {label}
        </motion.span>
        <motion.span layout className={TEXT_CLASSNAME} aria-hidden>
          {label}
        </motion.span>
      </a>
    </motion.li>
  );
}
