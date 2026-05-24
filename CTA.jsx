import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkGray/30 via-black to-darkGray/30" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl mb-10 leading-tight"
          >
            <span className="text-gradient">LET'S BUILD YOUR</span>
            <br />
            <span className="text-gradient">BRAND PRESENCE</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-poppins text-base sm:text-lg text-gray-300 mb-20 md:mb-28 max-w-2xl mx-auto leading-relaxed"
          >
            Let's collaborate and create something extraordinary.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-12 py-4 bg-gold text-black font-montserrat font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
            >
              Contact Us
              <ArrowRight size={20} />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-12 py-4 border-2 border-gold text-gold font-montserrat font-bold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Small text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-poppins text-gray-500 text-xs sm:text-sm mt-10"
          >
            Get a response within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
