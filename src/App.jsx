import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App