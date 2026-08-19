import AmbientBackground from './components/AmbientBackground.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import WhyChooseMe from './components/WhyChooseMe.jsx'
import MyProcess from './components/MyProcess.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <MyProcess />
        <Projects />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
