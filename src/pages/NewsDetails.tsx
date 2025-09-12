import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { getNewsById } from '@/data/newsData';

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get news item from our data
  const item = getNewsById(parseInt(id || '0'));

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
        <Button onClick={() => navigate('/news')}>
          Back to News
        </Button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20"
    >
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
            Back to News & Events
          </Button>
        </div>

        {/* Hero Image */}
        <motion.section 
          className="relative w-full h-64 md:h-96 overflow-hidden"
          variants={imageVariants}
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl"
                variants={itemVariants}
              >
                {item.title}
              </motion.h1>
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Meta Information */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                <Tag size={18} className="text-primary" />
                <span className="font-medium">{item.category}</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                <Calendar size={18} className="text-primary" />
                <span>{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </Badge>
              {item.location && (
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                  <MapPin size={18} className="text-primary" />
                  <span>{item.location}</span>
                </Badge>
              )}
              {item.time && (
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                  <Clock size={18} className="text-primary" />
                  <span>{item.time}</span>
                </Badge>
              )}
            </motion.div>

            {/* Content Body */}
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={itemVariants}
            >
              <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
  );
};

export default NewsDetails;