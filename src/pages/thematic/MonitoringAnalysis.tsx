import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

import monitoringImg from '@/assets/hig-quality.jpg';
import slide6 from '@/assets/Our_Thematics/slide01_img06.png';

const MonitoringAnalysis = () => {
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
              Air quality Monitoring, Chemical Components Analysis, and Source Apportionment Study
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Advanced air quality monitoring and comprehensive chemical analysis for informed decision-making
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
                  Our comprehensive air quality monitoring program employs monitoring equipments and methodologies to track pollutant concentrations across various environments. We conduct detailed chemical analysis of atmospheric samples, including PM₂.₅, PM₁₀, ozone, nitrogen oxides, and volatile organic compounds.
                </p>
                <p className="mb-6">
                  Our source apportionment studies help identify the major contributors to air pollution, enabling targeted intervention strategies. Through continuous monitoring networks and advanced analytical techniques, we provide real-time data and insights that inform policy decisions and public health recommendations.
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
                  src={monitoringImg}
                  alt="Air quality monitoring equipment and chemical analysis"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={slide6}
                  alt="Additional monitoring data visualization"
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

export default MonitoringAnalysis;