'use client'

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'
import { useAppStore } from '../store/app'
import { LandingPage } from './LandingPage'
import { ParallaxSection } from './ParallaxSection'

const MENU = [
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'projects', label: 'Projects' },
]

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }: { id: string }) {
  const ref = useRef(null)
  const setActiveView = useAppStore((state) => state.setActiveView)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <motion.section
      className="img-container"
      onViewportEnter={() => setActiveView(id)}
      viewport={{
        margin: '0px 0px 0px 0px',
        amount: 'all',
      }}
      id={id}
    >
      <div ref={ref}>
        <img
          src={
            'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?_gl=1*h1dqxo*_ga*MTU2MDA4Mzc3LjE3NTQ3MTY0NTc.*_ga_8JE65Q40S6*czE3NTQ3MTY0NTYkbzEkZzEkdDE3NTQ3MTY0NjUkajUxJGwwJGgw'
          }
          alt="A London skyscraper"
        />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
      >{`#${id}`}</motion.h2>
    </motion.section>
  )
}

export default function Parallax() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  // const setProgress = useAppStore((state) => state.setProgress)

  // useEffect(() => {
  //   setProgress(scrollYProgress.get)
  // }, [scrollYProgress, setProgress])

  return (
    <div>
      <ParallaxSection id="home">
        <LandingPage />
      </ParallaxSection>
      {MENU.map((image) => (
        <Image key={image.id} id={image.id} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  )
}
function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            width: 100%;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8dbbf0ff;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8dbbf0ff;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  )
}
