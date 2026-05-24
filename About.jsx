import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
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
    <section id="about" className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32 md:mb-40"
        >
          <h2 className="font-montserrat font-black text-5xl sm:text-6xl">
            <span className="text-gradient">About KCLOUD</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center mb-32 md:mb-40">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-poppins text-gray-300 text-lg leading-relaxed mb-8">
              KCLOUD PRODUCTION is a creative digital production house focused on branding, photography, videography, UGC content, and modern visual storytelling for fashion and lifestyle brands.
            </p>

            <p className="font-poppins text-gray-400 text-base leading-relaxed">
              With a team of award-winning creatives, photographers, and videographers, we transform your vision into stunning visual narratives that captivate audiences and drive authentic brand connections.
            </p>
          </motion.div>

          {/* Right - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-darkGray via-darkGray to-black" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gold/40 text-5xl mb-2">🎬</div>
                <p className="text-gold/30 font-poppins text-sm">About Section Image</p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl group-hover:border-gold/50 transition-all duration-300" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-32 md:mb-40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-gold/20 bg-gradient-to-br from-darkGray/50 to-black hover:border-gold/50 transition-all duration-300 text-center"
            >
              <h3 className="font-montserrat font-black text-3xl sm:text-4xl text-gold mb-2">
                {stat.value}
              </h3>
              <p className="font-poppins text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-10 sm:p-14 md:p-16 rounded-2xl border border-gold/30 bg-gradient-to-br from-darkGray/30 to-black/50 backdrop-blur-sm"
        >
          <h3 className="font-montserrat font-bold text-2xl sm:text-3xl mb-6 text-gold">
            Our Commitment
          </h3>
          <p className="font-poppins text-gray-300 text-base sm:text-lg leading-relaxed">
            We believe in pushing creative boundaries, delivering exceptional quality, and building lasting partnerships with our clients. Every project is a collaboration, and every frame tells a story.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
