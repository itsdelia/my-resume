import { Locales, type LocalesValues } from "intlayer";
import { useLocale } from "react-intlayer";
import { Fragment } from "react/jsx-runtime";

const Languages: Partial<Record<LocalesValues, string>> = {
  [Locales.ENGLISH]: "En",
  [Locales.CHINESE_SIMPLIFIED]: "Zh",
  [Locales.KOREAN_KOREA]: "Kr",
};

export const LanguageToggle = () => {
  const { setLocale, locale } = useLocale();
  return (
    <div className="flex-1 flex justify-end items-center gap-0.5 text-xs uppercase">
      {Object.entries(Languages).map(([lang, name], index) => {
        const language: LocalesValues = lang as LocalesValues;
        return (
          <Fragment key={lang}>
            <button
              key={lang}
              className={`py-1 ${locale === language ? "font-bold" : ""}`}
              onClick={() => setLocale(language)}
            >
              {name as string}
            </button>
            {index < Object.keys(Languages).length - 1 && (
              <span className="text-gray-500 dark:text-gray-400">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
