import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import slide5 from '@/assets/Our_Thematics/slide01_img05.png';

const PollutionControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/#research-areas" className="inline-flex items-center mb-6 text-blue-200 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research Areas
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Integrated Air Pollution Control: Demonstration
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Developing and demonstrating integrated approaches to air pollution control
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
                  We develop and demonstrate integrated approaches to air pollution control that address multiple pollutants simultaneously. Our demonstration projects showcase cost-effective technologies and practices that can be scaled up across different sectors.
                </p>
                <p className="mb-6">
                  From industrial emission control systems to clean cooking technologies, we work with communities and governments to implement practical solutions. Our integrated approach considers economic feasibility, social acceptance, and environmental effectiveness to ensure sustainable long-term impact.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
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
                  src={slide5}
                  alt="Integrated air pollution control demonstration projects"
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Multi-Pollutant Control</h3>
                <p className="text-gray-700">Addressing multiple air pollutants simultaneously through integrated approaches</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Technology Demonstration</h3>
                <p className="text-gray-700">Showcasing cost-effective technologies for industrial and community applications</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Scalable Solutions</h3>
                <p className="text-gray-700">Developing practical solutions that can be scaled across different sectors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PollutionControl;