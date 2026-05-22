import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null)

  // Placeholder portfolio items
  const portfolioItems = [
    { id: 1, title: 'Fashion Campaign 01', category: 'Campaign', span: 'col-span-1 row-span-2' },
    { id: 2, title: 'Studio Shoot', category: 'Photography', span: 'col-span-1' },
    { id: 3, title: 'Brand Reels', category: 'Videography', span: 'col-span-1' },
    { id: 4, title: 'Influencer Branding', category: 'Content', span: 'col-span-1 row-span-2' },
    { id: 5, title: 'Product Photography', category: 'Photography', span: 'col-span-1' },
    { id: 6, title: 'Editorial Shoot', category: 'Fashion', span: 'col-span-1' },
    { id: 7, title: 'UGC Content Series', category: 'Content', span: 'col-span-1' },
    { id: 8, title: 'Brand Story', category: 'Videography', span: 'col-span-2' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="portfolio" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl mb-6">
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="font-poppins text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of our premium creative work
          </p>
        </motion.div>

        {/* Portfolio Grid - Masonry Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${item.span} relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer group`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-darkGray via-darkGray to-black" />

              {/* Placeholder Image - replaced later */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold/40 text-5xl mb-2">📸</div>
                  <p className="text-gold/30 font-poppins text-sm">Placeholder Image</p>
                  <p className="text-gold/20 font-poppins text-xs mt-1">{item.id}</p>
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredId === item.id ? 0 : 20,
                  opacity: hoveredId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gold text-xs font-montserrat font-bold mb-2 uppercase">
                  {item.category}
                </span>
                <h3 className="font-montserrat font-bold text-xl mb-3">{item.title}</h3>
                <div className="flex items-center text-gold gap-2">
                  <span className="text-sm font-poppins font-medium">View Project</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-gold/0 rounded-2xl group-hover:border-gold/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-gold text-gold font-montserrat font-bold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
