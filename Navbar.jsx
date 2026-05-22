import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const bgOpacity = Math.min(scrollY / 300, 0.92)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        backdropFilter: scrollY > 50 ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-1 cursor-pointer group"
          >
            <span className="text-gold font-montserrat font-black text-3xl tracking-wider">K</span>
            <div className="flex flex-col">
              <span className="text-white font-montserrat font-black text-sm tracking-widest leading-none">CLOUD</span>
              <span className="text-gold font-poppins font-medium text-xs tracking-wider">PRODUCTION</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative text-white font-poppins font-medium text-sm tracking-wide transition-colors duration-300"
                whileHover={{ color: '#d4af37' }}
                onMouseEnter={(e) => {
                  const underline = e.currentTarget.querySelector('.underline')
                  if (underline) {
                    underline.style.width = '100%'
                  }
                }}
                onMouseLeave={(e) => {
                  const underline = e.currentTarget.querySelector('.underline')
                  if (underline) {
                    underline.style.width = '0%'
                  }
                }}
              >
                {link.label}
                <motion.span
                  className="underline absolute bottom-0 left-0 h-0.5 bg-gold"
                  initial={{ width: '0%' }}
                  style={{ width: '0%', transition: 'width 0.3s ease' }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-gold transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="bg-black/95 backdrop-blur-sm border-t border-gold/10 px-6 py-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white hover:text-gold transition-colors duration-300 font-poppins font-medium text-base tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
