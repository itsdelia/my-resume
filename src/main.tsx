import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/theme.tsx'
import { IntlayerProvider, MarkdownProvider } from 'react-intlayer'
import Markdown from 'markdown-to-jsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MarkdownProvider renderMarkdown={(markdown) => <Markdown>{markdown}</Markdown>}>
      <IntlayerProvider>
        <App />
      </IntlayerProvider>
      </MarkdownProvider>
    </ThemeProvider>
  </StrictMode>
)
