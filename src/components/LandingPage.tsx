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


