import React from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Eye } from 'lucide-react'

const Portfolio = () => {
  // Portfolio items with real images
  const portfolioItems = [
    {
      id: 1,
      image: '/src/assets/posts/post1.jpg',
      title: 'Fashion Campaign',
      description: 'Premium editorial',
      likes: '12.5K',
      comments: '892',
      shares: '120',
      views: '85K',
    },
    {
      id: 2,
      image: '/src/assets/posts/post2.jpg',
      title: 'Studio Series',
      description: 'Professional shots',
      likes: '9.8K',
      comments: '567',
      shares: '98',
      views: '62K',
    },
    {
      id: 3,
      image: '/src/assets/posts/post3.jpg',
      title: 'Brand Campaign',
      description: 'Creative direction',
      likes: '15.2K',
      comments: '1.2K',
      shares: '245',
      views: '128K',
    },
    {
      id: 4,
      image: '/src/assets/posts/post4.jpg',
      title: 'Product Showcase',
      description: 'E-commerce focus',
      likes: '8.3K',
      comments: '445',
      shares: '76',
      views: '54K',
    },
    {
      id: 5,
      image: '/src/assets/posts/post5.jpg',
      title: 'Content Creation',
      description: 'Social media magic',
      likes: '11.6K',
      comments: '834',
      shares: '156',
      views: '96K',
    },
    {
      id: 6,
      image: '/src/assets/posts/post6.jpg',
      title: 'Influencer Collab',
      description: 'Brand partnership',
      likes: '13.9K',
      comments: '975',
      shares: '187',
      views: '112K',
    },
    {
      id: 7,
      image: '/src/assets/posts/post7.jpg',
      title: 'Editorial Shoot',
      description: 'High-fashion work',
      likes: '16.4K',
      comments: '1.1K',
      shares: '268',
      views: '145K',
    },
    {
      id: 8,
      image: '/src/assets/posts/post8.jpg',
      title: 'Lifestyle Campaign',
      description: 'Visual storytelling',
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
      transition: { staggerChildren: 0.06 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="portfolio" className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 -right-40 w-96 h-96 bg-gold rounded-full opacity-2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gold rounded-full opacity-2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32 md:mb-40"
        >
          <h2 className="font-montserrat font-black text-5xl sm:text-6xl mb-6 leading-tight">
            <span className="text-white">OUR</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-yellow-500">
              WORK
            </span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Portfolio Grid - Clean & Minimal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-85"
                  />
                  {/* Subtle border */}
                  <div className="absolute inset-0 border border-gold/10 rounded-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-montserrat font-bold text-base text-white mb-1 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-sm text-gray-400 mb-4">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gold/15 mb-4" />

                {/* Stats */}
                <div className="grid grid-cols-4 gap-1 text-center">
                  <div className="flex flex-col items-center py-2">
                    <Heart size={13} className="text-gray-400 mb-0.5" />
                    <span className="font-poppins text-xs text-gray-300">{item.likes}</span>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <MessageCircle size={13} className="text-gray-400 mb-0.5" />
                    <span className="font-poppins text-xs text-gray-300">{item.comments}</span>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <Share2 size={13} className="text-gray-400 mb-0.5" />
                    <span className="font-poppins text-xs text-gray-300">{item.shares}</span>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <Eye size={13} className="text-gray-400 mb-0.5" />
                    <span className="font-poppins text-xs text-gray-300">{item.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-32 md:mt-40"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
