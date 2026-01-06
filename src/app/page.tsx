import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Gamification from '@/components/sections/Gamification'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import Community from '@/components/sections/Community'
import ProgrammaticPages from '@/components/sections/ProgrammaticPages'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <Gamification />
      <Benefits />
      <Testimonials />
      <Community />
      <ProgrammaticPages />
      <FAQ />
      <FinalCTA />
    </>
  )
}

