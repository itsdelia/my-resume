import { motion } from 'motion/react'
import { useState } from 'react'
import { useAppStore } from '../store/app'
import clsx from 'clsx'
import { useIntlayer } from 'react-intlayer'

const MENU = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' },
  { id: 'projects', label: 'projects' },
]

export const Navigation = () => {
  const activeView = useAppStore((state) => state.activeView)
  const activeIndex = MENU.findIndex((item) => item.id === activeView)
  const content = useIntlayer('app')

  return (
    <nav className="fixed bottom-5 right-5 p-6 text-sm">
      <div className="h-24 w-0.5 bg-gray-800 absolute left-1 top-8 animated-line">
        <motion.div
          className="size-3 border border-gray-800 rounded-full origin-left absolute -left-[5px] dark:border-white"
          animate={{ top: activeIndex * 28 }}
        >
          <div className="absolute size-2 rounded-full bg-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-white" />
        </motion.div>
      </div>
      <ul className="text-left text-xs uppercase">
        {MENU.map((item) => (
          <Item
            label={content[item.label]}
            key={item.id}
            id={item.id}
            isActive={item.id === activeView}
          />
        ))}
      </ul>
    </nav>
  )
}

const TEXT_CLASSNAME =
  'text-slate-800 text-sm uppercase flex items-center gap-2.5 leading-7 dark:text-white opacity-60 transition-opacity duration-300'
const ACTIVE_CLASSNAME = 'opacity-100'

function Item({
  label,
  id,
  isActive,
}: {
  label: string;
  id: string;
  isActive?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.li
      className="relative cursor-pointer overflow-hidden flex flex-col items-start gap-2 h-7"
      style={{
        justifyContent: isHovered ? 'flex-end' : 'flex-start',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a href={'#' + id}>
        <motion.span
          layout
          className={clsx(TEXT_CLASSNAME, isActive && ACTIVE_CLASSNAME)}
        >
          {label}
        </motion.span>
        <motion.span
          layout
          className={clsx(TEXT_CLASSNAME, isActive && ACTIVE_CLASSNAME)}
          aria-hidden
        >
          {label}
        </motion.span>
      </a>
    </motion.li>
  )
}
