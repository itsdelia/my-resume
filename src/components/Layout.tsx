import type { ReactNode } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { useTheme } from '../context/theme'
import { LanguageToggle } from './LanguageToggle'

export const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme()
  return (
    <div className="px-6 h-dvh flex flex-col py-4 text-center">
      <header className="header">
        <div className="fixed left-0 top-0 flex items-center gap-2 p-4 z-50">
          <img
            src={theme === 'dark' ? '../dm-white.png' : '../2.png'}
            alt="Logo"
            className="h-auto w-32"
          />
          <span className="sr-only">Delia's resume</span>
        </div>
        <div className="fixed right-0 top-8 z-50 flex items-center gap-2 px-10 h-9">
          <DarkModeSwitch />
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1 mt-20">{children}</main>
      <footer className="footer">
        <p>© 2023 Delia's resume</p>
      </footer>
    </div>
  )
}
