import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import slide7 from '@/assets/Our_Thematics/slide01_img07.png';
import slide8 from '@/assets/Our_Thematics/slide01_img08.png';

const DispersionModeling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
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
              Performance and Evaluation of Meteorological and Chemical Transport Modeling Systems
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Advanced atmospheric modeling for air quality prediction and assessment
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
                  We employ sophisticated atmospheric dispersion models to predict how pollutants move through the atmosphere from their sources to receptor locations. Our modeling capabilities include both local-scale dispersion for industrial sources and regional-scale transport for understanding transboundary pollution.
                </p>
                <p className="mb-6">
                  These models help predict air quality impacts of proposed developments, evaluate the effectiveness of emission control strategies, and support emergency response planning. Our modeling work combines meteorological data, emission inventories, and advanced numerical techniques to provide accurate air quality forecasts and scenario assessments.
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
                  src={slide7}
                  alt="Atmospheric dispersion modeling and air quality prediction"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={slide8}
                  alt="Modeling results and simulations"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DispersionModeling;