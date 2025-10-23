import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shankardarur0@gmail.com",
      href: "mailto:shankardarur0@gmail.com",
      color: "from-gray-200 to-gray-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9321526724",
      href: "tel:+919321526724",
      color: "from-gray-300 to-gray-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      color: "from-gray-300 to-gray-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/wrld-of-Shanks", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shankar-darur-26b521249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/wrld.of_shanks?igsh=bXZ3YjF1ZnBvbGo2", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-white">Contact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on your next AI/ML project. I'm always excited to work on innovative solutions!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-br ${method.color}`}>
                      <IconComponent className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{method.title}</h4>
                      <a
                        href={method.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-lg mb-4 text-white">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 360,
                        y: -5
                      }}
                      transition={{ duration: 0.3 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-6">Send a Message</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Background floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotateZ: [0, 360],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
