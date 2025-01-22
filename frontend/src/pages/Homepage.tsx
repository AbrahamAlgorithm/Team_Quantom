import { MdUploadFile } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How to use <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DocTrim</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your documents in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="bg-blue-100 p-3 rounded-full"
              >
                <MdUploadFile className="w-6 h-6 text-blue-600" />
              </motion.span>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">
                1. Upload PDF
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Drag and drop your PDF file or enter a URL. Google Drive integration available.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-purple-100 p-3 rounded-full"
              >
                <MdUploadFile className="w-6 h-6 text-purple-600" />
              </motion.span>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">
                2. Choose Features
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Select from our AI tools: summarize, extract text, translate, or generate mind maps.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <motion.span 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-green-100 p-3 rounded-full"
              >
                <MdUploadFile className="w-6 h-6 text-green-600" />
              </motion.span>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">
                3. Get Results
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Download processed documents instantly. Share results or save for later.
            </p>
          </motion.div>
        </div>

        {/* Upload Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="bg-blue-50 p-4 rounded-full cursor-pointer"
            >
              <MdUploadFile className="w-8 h-8 text-blue-600" />
            </motion.span>
            <p className="text-lg text-gray-600">Drag and Drop a file</p>
            <div className="flex items-center gap-4 w-full max-w-md">
              <hr className="flex-1 border-gray-200" />
              <span className="text-gray-500">or</span>
              <hr className="flex-1 border-gray-200" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium flex items-center gap-3 transition-all duration-300"
            >
              <GoPlus className="w-5 h-5" />
              <span>Choose a file</span>
            </motion.button>
          </div>
        </motion.div>
      </main>

      <FAQ />
      <Footer />
    </div>
  );
}

export default Homepage;