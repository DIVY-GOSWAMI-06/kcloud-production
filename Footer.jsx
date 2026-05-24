import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'Services', 'Portfolio', 'About', 'Contact']
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-black border-t border-gold/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 md:py-40">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-20 md:mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-montserrat font-black text-2xl mb-4">
              <span className="text-gold">K</span>
              <span className="text-white">CLOUD</span>
            </h3>
            <p className="font-poppins text-gray-400 text-sm leading-relaxed">
              Premium creative production for fashion and lifestyle brands.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-montserrat font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-poppins text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-montserrat font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@kcloud.production"
                className="flex items-center gap-2 font-poppins text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                hello@kcloud.production
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 font-poppins text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 font-poppins text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-montserrat font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-black transition-all duration-300 text-gold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gold/20 my-16 md:my-20" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-8 md:gap-6"
        >
          {/* Copyright */}
          <p className="font-poppins text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} KCLOUD PRODUCTION. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 sm:gap-8">
            <a
              href="#"
              className="font-poppins text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-poppins text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gold text-black shadow-lg hover:bg-yellow-400 transition-all duration-300 z-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
