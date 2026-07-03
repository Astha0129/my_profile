
import './App.css'

import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Certification from './components/Certification.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'




function App() {
  

  return (
   <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Project></Project>
    <Skills></Skills>
    <Certification></Certification>
    <Contact></Contact>
     <Footer></Footer>
   </>
    
      
    
  )
}

export default App
