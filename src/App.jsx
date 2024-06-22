import Testimonials from './components/testimonials'
import About from './components/about'
import Hero from './components/hero'
import Parent from './components/parents'
import Footer from './components/foooter'
import Calculator from './components/calculator'
import FAQS from './components/faq'
import NavBar from './components/navbar'

function App() {

  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Parent />
      <section className='cal-faq'>
        <Calculator />
        <FAQS />
      </section>
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
