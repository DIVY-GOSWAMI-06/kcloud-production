import React from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Zap,
  Rocket,
  Award,
} from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Creative Direction',
      description: 'Expert creative team with proven track record in modern visual storytelling',
      icon: Lightbulb,
      delay: 0,
    },
    {
      id: 2,
      title: 'Trend-Focused Content',
      description: 'We stay ahead of trends to create content that resonates with audiences',
      icon: Zap,
      delay: 0.1,
    },
    {
      id: 3,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
      icon: Rocket,
      delay: 0.2,
    },
    {
      id: 4,
      title: 'Professional Production',
      description: 'State-of-the-art equipment and professional production standards',
      icon: Award,
      delay: 0.3,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl pointer-events-none" />

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
            <span className="text-gradient">Why Choose KCLOUD</span>
          </h2>
          <p className="font-poppins text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Creativity, innovation, and professionalism
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="flex gap-6 p-8 rounded-xl border border-gold/20 bg-gradient-to-br from-darkGray/50 to-black hover:border-gold/50 hover:bg-darkGray/60 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="text-gold" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-montserrat font-bold text-xl mb-2 text-white group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
