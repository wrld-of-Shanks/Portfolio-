import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Floating Grayscale Sphere with Letter S */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="w-48 h-48 mx-auto relative"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Grayscale Sphere with Letter S */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 shadow-2xl flex items-center justify-center"
                 style={{
                   background: 'radial-gradient(circle at 30% 30%, #ffffff, #e5e5e5, #cccccc, #999999, #666666)',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset -10px -10px 20px rgba(0,0,0,0.2)'
                 }}>
              <span className="text-6xl font-bold text-gray-800 select-none">S</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white"
        >
          Hi, I&apos;m Shankar M Darur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          AI/ML Engineer | Builder | Innovator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          {/* Floating Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-lg">📞</span>
              <span>+91 9321526724</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-lg">📧</span>
              <span>shankardarur0@gmail.com</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-lg">🌍</span>
              <span>India</span>
            </div>
          </div>

          {/* Language Tags */}
          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">English</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">Hindi</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">Kannada</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">Marathi</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-4 bg-white text-black rounded-full hover:shadow-2xl transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border border-white/20 bg-white/5 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Help/Info Icon */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.button
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Help & Information"
        >
          <HelpCircle className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
