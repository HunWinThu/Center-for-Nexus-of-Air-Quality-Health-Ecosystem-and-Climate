import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import slide3 from '@/assets/Our_Thematics/slide01_img03.png';

const ImpactAssessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
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
              Impact Assessment: Health and Ecosystem
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Quantifying the effects of air pollution on human health and ecosystem services
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
                  Our impact assessment research quantifies the effects of air pollution on human health and ecosystem services. We conduct epidemiological studies to understand the relationship between air quality and respiratory diseases, cardiovascular conditions, and other health outcomes.
                </p>
                <p className="mb-6">
                  Our ecosystem research examines how air pollutants affect agricultural productivity, forest health, and biodiversity. Through advanced modeling and field studies, we provide evidence-based assessments that inform policy makers about the true costs of air pollution and the benefits of clean air initiatives.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
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
                  src={slide3}
                  alt="Health and ecosystem impact assessment research"
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
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Health Studies</h3>
                <p className="text-gray-700">Epidemiological research on air quality impacts on respiratory and cardiovascular health</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Ecosystem Research</h3>
                <p className="text-gray-700">Examining effects on agricultural productivity, forest health, and biodiversity</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Policy Evidence</h3>
                <p className="text-gray-700">Providing evidence-based assessments for informed policy decisions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ImpactAssessment;