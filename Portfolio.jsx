import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Eye } from 'lucide-react'

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null)

  // Portfolio items with real images
  const portfolioItems = [
    {
      id: 1,
      image: '/src/assets/posts/post1.jpg',
      title: 'Luxury Fashion Campaign',
      description: 'Premium editorial shoot',
      likes: '12.5K',
      comments: '892',
      shares: '120',
      views: '85K',
    },
    {
      id: 2,
      image: '/src/assets/posts/post2.jpg',
      title: 'Studio Portrait Series',
      description: 'Professional headshots',
      likes: '9.8K',
      comments: '567',
      shares: '98',
      views: '62K',
    },
    {
      id: 3,
      image: '/src/assets/posts/post3.jpg',
      title: 'Brand Campaign',
      description: 'Creative direction & styling',
      likes: '15.2K',
      comments: '1.2K',
      shares: '245',
      views: '128K',
    },
    {
      id: 4,
      image: '/src/assets/posts/post4.jpg',
      title: 'Product Photography',
      description: 'E-commerce showcase',
      likes: '8.3K',
      comments: '445',
      shares: '76',
      views: '54K',
    },
    {
      id: 5,
      image: '/src/assets/posts/post5.jpg',
      title: 'Content Creation',
      description: 'UGC & Social Media Content',
      likes: '11.6K',
      comments: '834',
      shares: '156',
      views: '96K',
    },
    {
      id: 6,
      image: '/src/assets/posts/post6.jpg',
      title: 'Influencer Shoot',
      description: 'Brand collaboration',
      likes: '13.9K',
      comments: '975',
      shares: '187',
      views: '112K',
    },
    {
      id: 7,
      image: '/src/assets/posts/post7.jpg',
      title: 'Editorial Series',
      description: 'High-fashion production',
      likes: '16.4K',
      comments: '1.1K',
      shares: '268',
      views: '145K',
    },
    {
      id: 8,
      image: '/src/assets/posts/post8.jpg',
      title: 'Lifestyle Campaign',
      description: 'Premium visual storytelling',
      likes: '10.7K',
      comments: '723',
      shares: '134',
      views: '78K',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="portfolio" className="py-24 sm:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 -right-40 w-96 h-96 bg-gold rounded-full opacity-2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gold rounded-full opacity-2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-montserrat font-black text-5xl sm:text-6xl mb-4 leading-tight">
            <span className="text-white">OUR</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-yellow-500">
              WORK
            </span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Portfolio Grid - 3 columns desktop, 2 tablet, 1 mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container with shadow */}
              <div className="relative h-96 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === item.id ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                {/* Gold Glow Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  animate={{
                    background:
                      hoveredId === item.id
                        ? 'linear-gradient(to right, rgba(212, 175, 55, 0.1), transparent), linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8))'
                        : 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6))',
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content - Always visible */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white pointer-events-none">
                  {/* Title and description at top */}
                  <motion.div
                    animate={{
                      opacity: hoveredId === item.id ? 0 : 1,
                      y: hoveredId === item.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-montserrat font-black text-xl lg:text-2xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-sm text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Stats at bottom */}
                  <motion.div
                    animate={{
                      opacity: hoveredId === item.id ? 1 : 0.7,
                      y: hoveredId === item.id ? 0 : 5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between text-sm font-poppins"
                  >
                    {/* Left stats */}
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-gray-200 hover:text-red-400 transition-colors pointer-events-auto cursor-pointer">
                        <Heart size={16} fill="currentColor" />
                        <span className="text-xs">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-200 hover:text-blue-400 transition-colors pointer-events-auto cursor-pointer">
                        <MessageCircle size={16} />
                        <span className="text-xs">{item.comments}</span>
                      </div>
                    </div>

                    {/* Right stats */}
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-gray-200 hover:text-green-400 transition-colors pointer-events-auto cursor-pointer">
                        <Share2 size={16} />
                        <span className="text-xs">{item.shares}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-200 hover:text-gold transition-colors pointer-events-auto cursor-pointer">
                        <Eye size={16} />
                        <span className="text-xs">{item.views}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Premium Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: hoveredId === item.id
                      ? '0 0 40px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.1)'
                      : '0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(212, 175, 55, 0.05)',
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-gold/20 group-hover:border-gold/60 transition-all duration-300 pointer-events-none" />

                {/* Scale effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    scale: hoveredId === item.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
