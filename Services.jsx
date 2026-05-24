import React from 'react'
import { motion } from 'framer-motion'
import {
  Camera,
  Video,
  Palette,
  ImageIcon,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Photography',
      description: 'Professional studio and on-location photography for brands and influencers',
      icon: Camera,
      delay: 0,
    },
    {
      id: 2,
      title: 'Videography',
      description: 'Cinematic video production and reels for social media campaigns',
      icon: Video,
      delay: 0.1,
    },
    {
      id: 3,
      title: 'Branding',
      description: 'Complete visual identity and brand storytelling solutions',
      icon: Palette,
      delay: 0.2,
    },
    {
      id: 4,
      title: 'UGC Content',
      description: 'Authentic user-generated content creation for maximum engagement',
      icon: ImageIcon,
      delay: 0.3,
    },
    {
      id: 5,
      title: 'Retouching',
      description: 'Professional image editing and color grading services',
      icon: Sparkles,
      delay: 0.4,
    },
    {
      id: 6,
      title: 'Fashion Campaigns',
      description: 'Full-scale fashion editorial and campaign production',
      icon: TrendingUp,
      delay: 0.5,
    },
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
    <section id="services" className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32 md:mb-40"
        >
          <h2 className="font-montserrat font-black text-5xl sm:text-6xl mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="font-poppins text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive creative solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
                className="group p-8 rounded-xl border border-gold/20 bg-gradient-to-br from-darkGray/50 to-black hover:border-gold/50 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="text-gold" size={32} />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-xl mb-3 text-white group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="text-gold font-poppins font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
