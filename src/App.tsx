import AboutSection from './components/containers/AboutSection'
import Footer from './components/containers/Footer'
import HeroSection from './components/containers/HeroSection'
import Highlights from './components/containers/Highlights'
import NavigationBar from './components/containers/NavigationBar'
import Testimonials from './components/containers/Testimonials'

import { ThemeProvider } from './components/theme-provider'

import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavigationBar/>
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
      <AboutSection/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
