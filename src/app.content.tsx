import { menu } from "framer-motion/client";
import { t, type Dictionary } from "intlayer";
import type { ReactNode } from "react";

const appContent = {
  key: "app",
  content: {
    viteLogo: t({
      "en-GB": "Vite logo",
      en: "Vite logo",
      fr: "Logo Vite",
      es: "Logo Vite",
    }),
    reactLogo: t({
      "en-GB": "React logo",
      en: "React logo",
      fr: "Logo React",
      es: "Logo React",
    }),

    title: "Vite + React",

    count: t({
      "en-GB": "count is ",
      en: "count is ",
      fr: "le compte est ",
      es: "el recuento es ",
    }),

    edit: t<ReactNode>({
      en: (
        <>
          Edit <code>src/App.tsx</code> and save to test HMR
        </>
      ),
      zh: (
        <>
          Éditez <code>src/App.tsx</code> et enregistrez pour tester HMR
        </>
      ),
      kr: (
        <>
          Edita <code>src/App.tsx</code> y guarda para probar HMR
        </>
      ),
    }),

    readTheDocs: t({
      en: "Click on the Vite and React logos to learn more",
      zh: "点击 Vite 和 React 徽标以了解更多信息",
      kr: "Vite 및 React 로고를 클릭하여 자세히 알아보세요",
    }),

    home: t({
      en: "Home",
      'zh-Hans': "首页",
      'ko-KR': "홈",
    }),
    about: t({
      en: "About",
      'zh-Hans': "关于",
      'ko-KR': "정보",
    }),
    contact: t({
      en: "Contact",
      'zh-Hans': "联系",
      'ko-KR': "연락처",
    }),
    projects: t({
      en: "Projects",
      'zh-Hans': "项目",
      'ko-KR': "프로젝트",
    }),
  },
} satisfies Dictionary;

export default appContent;