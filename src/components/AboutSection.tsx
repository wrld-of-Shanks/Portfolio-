import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">About</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate AI/ML Engineer creating impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">AI/ML Engineer & Innovator</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in developing intelligent systems and machine learning solutions that solve real-world problems.
                With expertise in Python, TensorFlow, and modern web technologies, I create applications that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in AI/ML has been driven by curiosity and the desire to build things that matter.
                I enjoy working on challenging projects that push the boundaries of what's possible with technology.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">7+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-gray-400 text-sm">Languages</div>
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-4">What I Do</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Machine Learning Model Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">AI-Powered Web Applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Data Analysis & Visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300">Full-Stack Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
