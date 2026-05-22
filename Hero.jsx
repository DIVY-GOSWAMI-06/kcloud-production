import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-darkGray via-black to-black" />
        {/* Cinematic glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl animate-pulse" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading - Premium Typography */}
        <motion.h1
          variants={itemVariants}
          className="font-montserrat font-black leading-none mb-8"
        >
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter">
            WE CREATE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter mt-2">
            HYPE
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Subheading - Minimal and elegant */}
        <motion.p
          variants={itemVariants}
          className="font-poppins text-gray-300 text-sm sm:text-base tracking-widest uppercase mb-12 max-w-2xl mx-auto"
        >
          Branding · Photography · Videography · Production
        </motion.p>

        {/* CTA Buttons - Premium styling */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 sm:px-12 py-4 bg-gold text-black font-montserrat font-bold text-sm sm:text-base tracking-wide transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative flex items-center gap-3 justify-center">
              Explore Work
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.div>
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 sm:px-12 py-4 border-2 border-gold text-gold font-montserrat font-bold text-sm sm:text-base tracking-wide transition-all duration-300 group hover:bg-gold hover:text-black overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gold"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Book a Session</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator - Refined */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-gold font-poppins text-xs tracking-widest uppercase">Scroll</p>
            <motion.div
              className="w-6 h-10 border border-gold rounded-full flex items-center justify-center"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-gold rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
