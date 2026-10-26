import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Services from './components/Services.jsx'
import Research from './components/Research.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap" id="top">
        <Hero />
        <Ticker />
        <Services />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
