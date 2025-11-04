import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import slide1 from '@/assets/Our_Thematics/slide01_img01.png';

const MeteorologyClimate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#research-areas" className="inline-flex items-center mb-6 text-purple-200 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research Areas
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meteorology and Science of Climate Change
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Understanding interactions between weather patterns, climate change, and air quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Our meteorology and climate science research examines the complex interactions between weather patterns, climate change, and air quality. We study how meteorological conditions influence pollutant transport, transformation, and removal from the atmosphere.
                </p>
                <p className="mb-6">
                  Our climate research investigates the co-benefits of air pollution control measures for climate change mitigation. Through advanced atmospheric science techniques, we provide insights into how changing climate conditions may affect future air quality and inform adaptation strategies for air pollution management.
                </p>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={slide1}
                  alt="Meteorology and climate science research"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MeteorologyClimate;