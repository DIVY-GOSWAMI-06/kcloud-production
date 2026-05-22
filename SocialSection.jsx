import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Play } from 'lucide-react'

const SocialSection = () => {
  const reelItems = [
    { id: 1, title: 'Fashion Reel 01', likes: '12.5K', comments: '892' },
    { id: 2, title: 'BTS Shoot', likes: '8.3K', comments: '567' },
    { id: 3, title: 'Product Launch', likes: '15.2K', comments: '1.2K' },
    { id: 4, title: 'Influencer Collab', likes: '20.1K', comments: '1.8K' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
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
            <span className="text-gradient">Follow Our Work</span>
          </h2>
          <p className="font-poppins text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with our latest creative content on social media
          </p>
        </motion.div>

        {/* Reels Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reelItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-darkGray via-darkGray to-black" />

              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold/40 text-5xl mb-2">📹</div>
                  <p className="text-gold/30 font-poppins text-sm">Reel Placeholder</p>
                </div>
              </div>

              {/* Play Button Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gold flex items-center justify-center cursor-pointer"
                >
                  <Play size={32} className="text-black fill-black ml-1" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="font-montserrat font-bold text-lg text-white mb-3">
                  {item.title}
                </h3>

                <div className="flex gap-4 text-sm font-poppins text-gray-300">
                  <span>❤️ {item.likes}</span>
                  <span>💬 {item.comments}</span>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-gold/0 rounded-2xl group-hover:border-gold/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-darkGray/50 via-darkGray/30 to-black rounded-2xl p-8 mb-12 border border-gold/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gold text-3xl font-montserrat font-black mb-2">245K</p>
              <p className="text-gray-400 font-poppins text-sm">Instagram Followers</p>
            </div>
            <div>
              <p className="text-gold text-3xl font-montserrat font-black mb-2">8.9M</p>
              <p className="text-gray-400 font-poppins text-sm">Monthly Reach</p>
            </div>
            <div>
              <p className="text-gold text-3xl font-montserrat font-black mb-2">3.2M</p>
              <p className="text-gray-400 font-poppins text-sm">Total Engagements</p>
            </div>
            <div>
              <p className="text-gold text-3xl font-montserrat font-black mb-2">12.5K</p>
              <p className="text-gray-400 font-poppins text-sm">Avg. Likes/Post</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gold text-black font-montserrat font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-3 shadow-lg"
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
