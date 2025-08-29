import { md, t, type Dictionary } from 'intlayer'
import type { ReactNode } from 'react'

const appContent = {
  key: 'app',
  content: {
    viteLogo: t({
      'en-GB': 'Vite logo',
      en: 'Vite logo',
      fr: 'Logo Vite',
      es: 'Logo Vite',
    }),
    reactLogo: t({
      'en-GB': 'React logo',
      en: 'React logo',
      fr: 'Logo React',
      es: 'Logo React',
    }),

    title: 'Vite + React',

    count: t({
      'en-GB': 'count is ',
      en: 'count is ',
      fr: 'le compte est ',
      es: 'el recuento es ',
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
      en: 'Click on the Vite and React logos to learn more',
      zh: '点击 Vite 和 React 徽标以了解更多信息',
      kr: 'Vite 및 React 로고를 클릭하여 자세히 알아보세요',
    }),

    home: t({
      en: 'Home',
      'zh-Hans': '首页',
      'ko-KR': '홈',
    }),
    about: t({
      en: 'About',
      'zh-Hans': '关于',
      'ko-KR': '정보',
    }),
    contact: t({
      en: 'Contact',
      'zh-Hans': '联系',
      'ko-KR': '연락처',
    }),
    projects: t({
      en: 'Projects',
      'zh-Hans': '项目',
      'ko-KR': '프로젝트',
    }),
    slogan: t({
      en: 'Trading in business, thriving in art',
      'zh-Hans': '钱赚起来，艺飞起来',
      'ko-KR': '돈은 올리고, 예술은 날리기!',
    }),
    introduction: t({
      en: md('Hi, I\'m Delia. I graduated as a film director, trained to capture stories that touch hearts. <br /><br />Today, I\'m in the business of containers and trading—a universe that demands order, precision, and world vision. <br /><br />The two fields may seem like worlds apart on the surface, but to me they are as close as two linked fingers. <br /><br />Directing has been my education in how to weave perspectives, dance through intricacy, and infuse concepts with life. <br /><br />Trading honed my skill in adapting quickly, handling multiple collaborations, and performing under pressure. Together, they mold me into an individual who not only produces, but also implements with precision and intention.'),
      'zh-Hans': md('嗨，我是Delia。我毕业于电影导演专业，接受过捕捉感人故事的训练。今天，我在集装箱和贸易行业工作——这是一个需要结构、精确和全球视野的环境。乍一看，这两个世界似乎相距甚远，但我认为它们是紧密相连的。\n\n导演的经历教会了我如何构建视角、协调复杂性并将创意付诸实践。交易则磨练了我快速适应、管理多元合作和在压力下交付的能力。它们共同塑造了我，让我不仅能创造，还能以清晰和目标感执行。'),
      'ko-KR': md('안녕하세요, 저는 델리아입니다. 저는 영화 감독으로 졸업하여 사람의 마음을 움직이는 이야기를 포착하는 훈련을 받았습니다. 오늘날 저는 구조, 정밀성 및 글로벌 비전을 요구하는 환경인 컨테이너 및 무역 산업에서 일하고 있습니다. 언뜻 보기에는 이 두 세계가 멀리 떨어져 있는 것처럼 보일 수 있지만, 저는 그것들이 깊이 연결되어 있다고 생각합니다.\n\n연출은 저에게 관점을 구성하고, 복잡성을 조정하며, 아이디어를 실현하는 방법을 가르쳐주었습니다. 거래는 저의 빠른 적응력, 다양한 협업 관리 및 압박 속에서의 성과 전달 능력을 날카롭게 했습니다. 이 두 가지가 결합되어 저를 단순히 창조하는 사람에서 명확성과 목적의식을 가지고 실행하는 사람으로 만들어주었습니다.'),
    }),
  },
} satisfies Dictionary

export default appContent
