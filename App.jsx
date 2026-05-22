import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import SocialSection from './SocialSection'
import WhyChooseUs from './WhyChooseUs'
import CTA from './CTA'
import Footer from './Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <SocialSection />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
