import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/theme.tsx'
import { IntlayerProvider } from 'react-intlayer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <IntlayerProvider>
        <App />
      </IntlayerProvider>
    </ThemeProvider>
  </StrictMode>
)
