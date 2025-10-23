import { useState } from 'react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      icon: "⚛️"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
      icon: "🔧"
    },
    {
      category: "AI/ML Tools",
      skills: ["TensorFlow", "OpenAI API", "LangChain", "Scikit-learn", "Pandas"],
      icon: "🤖"
    },
    {
      category: "Databases & Cloud",
      skills: ["MongoDB", "Firebase", "AWS", "Vercel", "Git"],
      icon: "☁️"
    }
  ];

  const softSkills = [
    "Problem-solving",
    "Collaboration",
    "Communication",
    "Creative thinking",
    "UI/UX design sense",
    "Timely delivery"
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Technical Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 relative overflow-hidden"
                whileHover={{
                  y: -5,
                  rotateX: 2,
                  rotateY: 2
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center mb-4">
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      onHoverStart={() => setHoveredSkill(`${category.category}-${skillIndex}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between p-2 bg-gray-800 rounded-lg border border-gray-700">
                        <span className="text-sm font-medium text-gray-300">{skill}</span>
                        <motion.div
                          animate={{
                            scale: hoveredSkill === `${category.category}-${skillIndex}` ? 1.2 : 1,
                            rotate: hoveredSkill === `${category.category}-${skillIndex}` ? 360 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ⭐
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Soft Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Essential skills that drive successful project delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center border border-gray-800 relative overflow-hidden"
                whileHover={{
                  y: -5,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl mb-3"
                    animate={{
                      rotate: hoveredSkill === `soft-${skillIndex}` ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setHoveredSkill(`soft-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {skillIndex === 0 && "🧩"}
                    {skillIndex === 1 && "🤝"}
                    {skillIndex === 2 && "💬"}
                    {skillIndex === 3 && "💭"}
                    {skillIndex === 4 && "🎨"}
                    {skillIndex === 5 && "⏰"}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{skill}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
