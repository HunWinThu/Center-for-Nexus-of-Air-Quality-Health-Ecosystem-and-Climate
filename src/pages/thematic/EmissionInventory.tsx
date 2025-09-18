import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import slide2 from '@/assets/Our_Thematics/slide01_img02.png';

const EmissionInventory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#research-areas" className="inline-flex items-center mb-6 text-indigo-200 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research Areas
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Emission Inventory and Emission Projection
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Comprehensive emission inventories and future projection modeling
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
                  We develop comprehensive emission inventories that catalog pollutant sources across different sectors including transportation, industry, agriculture, and residential activities. Our projection models forecast future emission scenarios under various policy and development pathways.
                </p>
                <p className="mb-6">
                  Using advanced methodologies and local activity data, we provide accurate estimates of current emissions and reliable projections for future planning. These inventories serve as fundamental inputs for air quality modeling and policy development at local, national, and regional scales.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-indigo-700 hover:bg-indigo-800">
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
                  src={slide2}
                  alt="Emission inventory development and projection modeling"
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
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Comprehensive Inventories</h3>
                <p className="text-gray-700">Cataloging pollutant sources across transportation, industry, agriculture, and residential sectors</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Future Projections</h3>
                <p className="text-gray-700">Forecasting emission scenarios under various policy and development pathways</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Multi-Scale Applications</h3>
                <p className="text-gray-700">Supporting policy development at local, national, and regional scales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EmissionInventory;