import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
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

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'airqualitynexus@ait.ac.th',
    description: 'General inquiries and information'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+66 9-9797-6360',
    description: ''
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand',
    description: 'https://maps.app.goo.gl/UA82JeVX5uKR2Stg6'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Mon - Fri: 9 AM - 5 PM',
    description: 'Saturday: 10 AM - 2 PM (by appointment)'
  }
];

export function ContactInfo() {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-6 mb-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Card className="text-center bg-gradient-to-br from-background to-accent/10">
            <CardContent className="p-6">
              <info.icon className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
              <p className="text-primary font-medium mb-1">{info.content}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
