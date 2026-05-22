import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient and glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkGray via-black to-black opacity-90" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl animate-pulse" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight"
        >
          <span className="text-gradient">WE CREATE HYPE</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-poppins text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Branding • Photography • Videography • Creative Production
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-4 bg-gold text-black font-montserrat font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Explore Work
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-4 border-2 border-gold text-gold font-montserrat font-bold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book a Shoot
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
