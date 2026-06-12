import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Features from '@/components/Features'
import Install from '@/components/Install'
import Usage from '@/components/Usage'
import FAQ from '@/components/FAQ'
import Roadmap from '@/components/Roadmap'
import Footer from '@/components/Footer'
import StickyInstallCTA from '@/components/StickyInstallCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <Install />
        <Usage />
        <FAQ />
        <Roadmap />
      </main>
      <Footer />
      <StickyInstallCTA />
    </>
  )
}
