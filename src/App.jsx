import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Install from './components/Install'
import Usage from './components/Usage'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='min-h-screen bg-[#0a0a0f] text-slate-200'>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Install />
        <Usage />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
