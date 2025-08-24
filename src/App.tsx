import './App.css'
import { Layout } from './components/Layout'
import { MobileNavigation } from './components/MobileNavigation'
import { Navigation } from './components/Navigation'
import Parallax from './components/Parallax'

function App() {

  return (
    <Layout>
      <Parallax />
      <Navigation />
      <MobileNavigation />
    </Layout>
  )
}

export default App
