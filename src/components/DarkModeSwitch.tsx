import { useTheme } from '../context/theme'

export const DarkModeSwitch = () => {
  const { setTheme, theme } = useTheme()
  return (
    <label
      htmlFor="checkbox"
      className="fixed right-0 top-8 z-50 flex items-center justify-center w-40 h-9 scale-60"
    >
      <input
        type="checkbox"
        name=""
        id="checkbox"
        checked={theme === 'dark'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <div className="toggle">
        <div className="cloud"></div>
        <div className="star"></div>
        <div className="sea"></div>
        <div className="mountains"></div>
      </div>
    </label>
  )
}
