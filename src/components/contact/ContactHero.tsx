import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4
    }
  }
};

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-air-light to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariants}>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            Have questions about our research, want to collaborate, or need information about air quality in your area? 
            We'd love to hear from you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
