import AboutSection from './components/containers/AboutSection'
import Footer from './components/containers/Footer'
import HeroSection from './components/containers/HeroSection'
import Highlights from './components/containers/Highlights'
import NavigationBar from './components/containers/NavigationBar'
import Testimonials from './components/containers/Testimonials'

import './App.css'

function App() {
  return (
    <>
      <NavigationBar/>
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
      <AboutSection/>
      <Footer/>
    </>
  )
}

export default App
