import { motion } from 'framer-motion';

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Legal Assistant (Specter.)",
      description: "An intelligent legal assistant powered by AI to help with legal research, document analysis, and case preparation.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
      tags: ["Python", "OpenAI API", "LangChain", "React"]
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz platform with real-time scoring, multiple categories, and engaging user experience.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop",
      tags: ["React", "JavaScript", "Firebase", "Tailwind CSS"]
    },
    {
      title: "AI-Powered Music Studio",
      description: "Revolutionary music creation platform using AI to generate, mix, and enhance musical compositions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      tags: ["Python", "TensorFlow", "OpenAI API", "Web Audio API"]
    },
    {
      title: "Practically (Coding Platform)",
      description: "Interactive coding platform for learning and practicing programming with real-time feedback and collaboration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      title: "AI PDF Chatbot (Multilingual)",
      description: "Intelligent PDF analysis tool with multilingual support for document querying and content extraction.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      tags: ["Python", "OpenAI API", "Googletrans", "PDF Processing"]
    },
    {
      title: "Carbon Footprint Calculator",
      description: "Environmental impact calculator helping users track and reduce their carbon footprint with data visualization.",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb3ba2ea?w=400&h=250&fit=crop",
      tags: ["React", "JavaScript", "D3.js", "Environmental API"]
    },
    {
      title: "WebAR Marker Experience",
      description: "Augmented reality web experience using marker-based tracking for interactive 3D content in browsers.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=250&fit=crop",
      tags: ["Three.js", "WebXR", "AR.js", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative AI/ML projects and applications that showcase my expertise in building intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating view button */}
                  <motion.button
                    className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-2 text-white group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 border border-gray-600 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
