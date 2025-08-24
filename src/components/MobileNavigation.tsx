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

export const MobileNavigation = () => {
  const activeView = useAppStore((state) => state.activeView)
  console.log(activeView)
  const content = useIntlayer('app')

  return (
    <nav className="fixed bottom-0 left-0 w-full p-6 text-sm block sm:hidden">
      <ul className="text-left text-xs uppercase flex w-full justify-between">
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
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isActive && (
        <div className="absolute size-2 motion-safe:animate-bounce bg-gray-800 opacity-50 rounded-full -top-1 left-1/2 transform -translate-x-1/2" />
      )}
      <div
        className="relative cursor-pointer overflow-hidden flex flex-col items-start gap-2 h-7"
        style={{
          justifyContent: isHovered ? 'flex-end' : 'flex-start',
        }}
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
      </div>
    </motion.li>
  )
}
