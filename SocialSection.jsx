import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, Share2, Eye } from 'lucide-react'

const SocialSection = () => {
  // Using same image assets for reels showcase - same as portfolio
  const reelItems = [
    {
      id: 1,
      title: 'Fashion Reel 01',
      description: 'Creative shoot behind the scenes',
      image: '/src/assets/posts/post1.jpg',
      likes: '12.5K',
      comments: '892',
      shares: '120',
      views: '85K',
    },
    {
      id: 2,
      title: 'BTS Shoot',
      description: 'Production in action',
      image: '/src/assets/posts/post2.jpg',
      likes: '8.3K',
      comments: '567',
      shares: '89',
      views: '62K',
    },
    {
      id: 3,
      title: 'Product Launch',
      description: 'Brand campaign showcase',
      image: '/src/assets/posts/post3.jpg',
      likes: '15.2K',
      comments: '1.2K',
      shares: '210',
      views: '120K',
    },
    {
      id: 4,
      title: 'Influencer Collab',
      description: 'Collaborative content creation',
      image: '/src/assets/posts/post4.jpg',
      likes: '20.1K',
      comments: '1.8K',
      shares: '340',
      views: '180K',
    },
    {
      id: 5,
      title: 'Fashion Week',
      description: 'Editorial photography',
      image: '/src/assets/posts/post5.jpg',
      likes: '18.7K',
      comments: '1.5K',
      shares: '280',
      views: '145K',
    },
    {
      id: 6,
      title: 'Studio Session',
      description: 'Professional production',
      image: '/src/assets/posts/post6.jpg',
      likes: '14.3K',
      comments: '920',
      shares: '165',
      views: '98K',
    },
    {
      id: 7,
      title: 'Brand Story',
      description: 'Visual storytelling',
      image: '/src/assets/posts/post7.jpg',
      likes: '16.9K',
      comments: '1.1K',
      shares: '195',
      views: '110K',
    },
    {
      id: 8,
      title: 'Campaign 2024',
      description: 'Modern creative direction',
      image: '/src/assets/posts/post8.jpg',
      likes: '22.5K',
      comments: '2.1K',
      shares: '420',
      views: '210K',
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
    <section className="py-40 sm:py-56 lg:py-64 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-3 blur-3xl pointer-events-none" />

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
            <span className="text-white">LATEST</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-yellow-500">
              REELS
            </span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Reels Grid - SAME structure as Portfolio */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reelItems.map((item) => (
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

                {/* Stats - IDENTICAL to Portfolio */}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24 md:mt-32"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gold text-black font-montserrat font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-3"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialSection
