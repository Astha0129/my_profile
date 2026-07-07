
import './App.css'
import mydata from "./data/mydata";
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
    <Navbar navbar={mydata.navbar} />
    <Hero hero={mydata.hero} />
   <About about={mydata.about} />
   <Project projects={mydata.projects} />
   <Skills skills={mydata.skills} />
   <Certification certifications={mydata.certifications} />
    <Contact contact={mydata.contact} />
    <Footer footer={mydata.footer} />
   </>
    
      
    
  )
}

export default App
