import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What file formats does DocTrim support?",
    answer: "DocTrim currently supports PDF files, with plans to add support for Word documents, PowerPoint presentations, and more in the near future."
  },
  {
    question: "How accurate is the AI summarization?",
    answer: "Our AI summarization maintains 95% accuracy, trained on millions of documents to provide concise yet comprehensive summaries while preserving key information."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use end-to-end encryption and automatically delete your files after processing. We never store your documents on our servers longer than necessary."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 10 document processes per month, basic summarization, and text extraction. Premium features include unlimited documents, advanced AI analysis, and priority support."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about DocTrim and its features
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="w-6 h-6 text-blue-600" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;