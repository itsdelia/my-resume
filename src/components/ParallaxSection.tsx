import {
  motion,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { useAppStore } from '../store/app'

export type ImageProps = {
  id: string;
  children: ReactNode;
};

export const ParallaxSection = ({ id, children }: ImageProps) => {
  const ref = useRef(null)
  const setActiveView = useAppStore((state) => state.setActiveView)

  return (
    <motion.section
      className="h-screen w-full overflow-x-hidden snap-start flex justify-center items-center relative"
      onViewportEnter={() => setActiveView(id)}
      viewport={{
        margin: '0px 0px 0px 0px',
        amount: 'all',
      }}
      id={id}
    >
      <div ref={ref}>{children}</div>
    </motion.section>
  )
}
