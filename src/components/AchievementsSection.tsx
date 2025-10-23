import { motion } from 'framer-motion';

export function AchievementsSection() {
  const achievements = [
    {
      title: "1st Prize – AI/ML Tech Game",
      organization: "BEC Bagalkot",
      year: "2024",
      description: "Winner of AI/ML Technology Competition",
      icon: "🏆",
      gradient: "from-gray-200 to-gray-400"
    },
    {
      title: "WAVE 2.0",
      organization: "Tech Competition",
      year: "2024",
      description: "Innovation and Technology Excellence",
      icon: "🌊",
      gradient: "from-gray-300 to-gray-500"
    },
    {
      title: "WAVE",
      organization: "Tech Competition",
      year: "2023",
      description: "Technical Innovation Recognition",
      icon: "🌊",
      gradient: "from-gray-300 to-gray-500"
    },
    {
      title: "Avishkaar",
      organization: "Innovation Challenge",
      year: "2025",
      description: "Creative Technology Solutions",
      icon: "💡",
      gradient: "from-gray-300 to-gray-500"
    }
  ];

  const participations = [
    {
      title: "Marathon Runner",
      description: "Regular participant in tech and fitness marathons",
      icon: "🏃‍♂️"
    },
    {
      title: "Technisium",
      description: "Active member and contributor to technical communities",
      icon: "⚙️"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Achievements</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones in my journey of innovation and technology
          </p>
        </motion.div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Major Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{achievement.icon}</span>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{achievement.title}</h4>
                        <p className="text-gray-400 text-sm">{achievement.organization} • {achievement.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Participations */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Active Participations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {participations.map((participation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center border border-gray-800 relative overflow-hidden"
                  whileHover={{
                    y: -3,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-3"
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 1
                      }}
                    >
                      {participation.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{participation.title}</h4>
                    <p className="text-gray-400 text-sm">{participation.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline decoration */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${20 + index * 15}%`,
                top: '-4px'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
