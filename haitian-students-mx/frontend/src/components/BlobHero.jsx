import { motion } from 'framer-motion'

const BlobHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 50, 0], y: [0, -50, 100, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-haiti-blue/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 60, 0], y: [0, 100, -40, 0], scale: [1, 0.8, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-haiti-red/25 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 70, -30, 0], y: [0, -80, 60, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-mexico-green/20 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -50, 80, 0], y: [0, 60, -100, 0], scale: [1, 0.9, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[80px]"
        />
      </div>

      {/* SVG Organic Blob Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-10 w-64 h-64 opacity-20" viewBox="0 0 200 200">
          <motion.path
            animate={{
              d: [
                "M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.1,32.3C60,43.1,49.1,51.8,37.6,59.6C26.1,67.4,14,74.3,1.2,72.3C-11.6,70.3,-25.1,59.4,-37.9,49.1C-50.7,38.8,-62.8,29.1,-70.9,16.5C-79,3.9,-83.1,-11.6,-78.3,-25.2C-73.5,-38.8,-59.8,-50.5,-46.2,-58.1C-32.6,-65.7,-19.1,-69.2,-4.8,-60.5C9.5,-51.8,30.5,-83.6,44.7,-76.4Z",
                "M39.9,-67.8C52.1,-60.6,63.1,-51.1,71.3,-39.3C79.5,-27.5,84.9,-13.4,83.8,0.1C82.7,13.6,75.1,26.5,65.8,37.2C56.5,47.9,45.5,56.4,33.6,63.3C21.7,70.2,8.9,75.5,-3.3,71.9C-15.5,68.3,-27.1,55.8,-38.5,45.3C-49.9,34.8,-61.1,26.3,-68.5,14.8C-75.9,3.3,-79.5,-11.2,-74.6,-23.8C-69.7,-36.4,-56.3,-47.1,-43.3,-54.1C-30.3,-61.1,-17.7,-64.4,-3.8,-58.1C10.1,-51.8,27.7,-75,39.9,-67.8Z",
                "M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.1,32.3C60,43.1,49.1,51.8,37.6,59.6C26.1,67.4,14,74.3,1.2,72.3C-11.6,70.3,-25.1,59.4,-37.9,49.1C-50.7,38.8,-62.8,29.1,-70.9,16.5C-79,3.9,-83.1,-11.6,-78.3,-25.2C-73.5,-38.8,-59.8,-50.5,-46.2,-58.1C-32.6,-65.7,-19.1,-69.2,-4.8,-60.5C9.5,-51.8,30.5,-83.6,44.7,-76.4Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            fill="#00209F"
          />
        </svg>

        <svg className="absolute bottom-20 right-20 w-72 h-72 opacity-15" viewBox="0 0 200 200">
          <motion.path
            animate={{
              d: [
                "M41.3,-70.6C53.9,-63.9,64.8,-54.1,73.3,-42.3C81.8,-30.5,87.9,-16.7,86.7,-3.3C85.5,10.1,77,23.1,67.1,34.2C57.2,45.3,45.9,54.5,33.5,62.1C21.1,69.7,7.6,75.7,-5.4,74.3C-18.4,72.9,-30.9,64.1,-42.6,54.8C-54.3,45.5,-65.2,35.7,-72.1,23.3C-79,10.9,-81.9,-4.1,-77.8,-17.8C-73.7,-31.5,-62.6,-43.9,-50.6,-51.1C-38.6,-58.3,-25.7,-60.3,-13.2,-63.2C-0.7,-66.1,11.3,-69.9,23.8,-71.5C36.3,-73.1,28.7,-77.3,41.3,-70.6Z",
                "M38.1,-65.2C49.7,-58.8,59.4,-49.6,67.3,-38.6C75.2,-27.6,81.3,-14.8,80.6,-2.2C79.9,10.4,72.4,22.8,63.3,33.3C54.2,43.8,43.5,52.4,31.8,59.6C20.1,66.8,7.4,72.6,-5.1,71.8C-17.6,71,-29.9,63.6,-41.2,55.1C-52.5,46.6,-62.8,37,-70.1,25.1C-77.4,13.2,-81.7,-1.1,-78.6,-14.2C-75.5,-27.3,-65,-39.2,-53.7,-46.1C-42.4,-53,-30.3,-54.9,-18.5,-58.1C-6.7,-61.3,5.3,-65.8,17.4,-68.2C29.5,-70.6,26.5,-71.6,38.1,-65.2Z",
                "M41.3,-70.6C53.9,-63.9,64.8,-54.1,73.3,-42.3C81.8,-30.5,87.9,-16.7,86.7,-3.3C85.5,10.1,77,23.1,67.1,34.2C57.2,45.3,45.9,54.5,33.5,62.1C21.1,69.7,7.6,75.7,-5.4,74.3C-18.4,72.9,-30.9,64.1,-42.6,54.8C-54.3,45.5,-65.2,35.7,-72.1,23.3C-79,10.9,-81.9,-4.1,-77.8,-17.8C-73.7,-31.5,-62.6,-43.9,-50.6,-51.1C-38.6,-58.3,-25.7,-60.3,-13.2,-63.2C-0.7,-66.1,11.3,-69.9,23.8,-71.5C36.3,-73.1,28.7,-77.3,41.3,-70.6Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="#D21034"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6 border border-white/20">
            🇭🇹 Haiti · 🇲🇽 Mexico
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Association of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
            Haitian Students
          </span>{' '}
          in Mexico
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Uniting our voices, celebrating our culture, and building our future together in the heart of Mexico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#gallery"
            className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Our Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default BlobHero
