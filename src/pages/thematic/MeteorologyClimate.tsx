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
              Meteorology and Climate Science
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
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Learn More About Our Work
                  </Button>
                </Link>
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

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Weather-Air Quality Interactions</h3>
                <p className="text-gray-700">Studying how meteorological conditions influence pollutant behavior in the atmosphere</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Climate Co-benefits</h3>
                <p className="text-gray-700">Investigating co-benefits of air pollution control for climate change mitigation</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Future Projections</h3>
                <p className="text-gray-700">Assessing how climate change may affect future air quality conditions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MeteorologyClimate;