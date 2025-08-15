import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.CHINESE_SIMPLIFIED,
      Locales.KOREAN_KOREA,
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;