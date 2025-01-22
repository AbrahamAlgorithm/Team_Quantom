import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      
      <AppNavbar />

      <div className="container mx-auto px-4 pt-32 pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          >
            <motion.span 
              className="inline-block text-blue-400 text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome to DocTrim
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Simplify Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Study Experience</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Tired of reading long PDFs? Let us summarize it for you! Convert
              your texts into easy-to-listen audio and download them for later.
              Perfect for students who want to study smarter, not harder.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="/signup"
                className="group relative inline-flex items-center px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Free
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"
                />
              </Link>
              
              <Link
                to="/features"
                className="px-8 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            className="relative grid gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { title: 'PDF Summaries', description: 'Get instant AI-powered summaries' },
              { title: 'Audio Conversion', description: 'Convert text to natural speech' },
              { title: 'Smart Notes', description: 'Generate study notes automatically' },
              { title: 'Easy Sharing', description: 'Share and collaborate seamlessly' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}

export default HeroSection;