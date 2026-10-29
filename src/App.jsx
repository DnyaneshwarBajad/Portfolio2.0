import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar/>
      <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Experience/>
     <Contact/>
     <Footer/>
   </>
  )
}

export default App
