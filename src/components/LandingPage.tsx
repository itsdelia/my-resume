import Orb from "./Orb";
import TextPressure from "./TextPressure";
import { useTheme } from "../context/theme";
import { useIntlayer, useLocale } from "react-intlayer";
import { Locales } from "intlayer";
import SplitText from "./SplitText";
import clsx from "clsx";

/**
 * ScatterHoverText
 * Splits text into individual characters and scatters them upon hover with random offsets.
 */
export const LandingPage = () => {
  const { theme } = useTheme();
  const { locale } = useLocale();
  const content = useIntlayer("app");

  return (
    <div className="min-h-screen w-full relative p-8 gap-3 flex items-center justify-center">
      <div className="size-[320px] md:size-[600px] w-full relative overflow-hidden">
        <Orb
          hoverIntensity={0.3}
          rotateOnHover={true}
          hue={0.6}
          forceHoverState={false}
          mode={theme === "dark" ? "dark" : "bright"}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {locale === Locales.ENGLISH ? (
          <TextPressure
            text={content.slogan.value}
            textColor={theme === "dark" ? "#ffffff" : "#000000"}
          />
        ) : (
          <SplitText
            text={content.slogan.value}
            className={clsx(
              "text-2xl md:text-4xl tracking-tight text-black dark:text-white",
              locale === Locales.CHINESE_SIMPLIFIED ? "font-guofeng md:text-6xl" : 'font-andong md:text-6xl'
            )}
          />
        )}
      </div>
    </div>
  );
};
