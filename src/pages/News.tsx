import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { getSortedNewsItems } from '@/data/allSharedNewsData';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string | string[];
}

const NewsCard = ({ title, excerpt, date, image }: NewsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = excerpt.length > 200;
  const displayText = isExpanded || !shouldTruncate ? excerpt : excerpt.slice(0, 200) + '...';
  
  // Get first image for thumbnail and remaining images
  const images = Array.isArray(image) ? image : [image];
  const firstImage = images[0];
  const remainingImages = images.slice(1);
  // Strip HTML for alt text
  const plainTitle = title.replace(/<[^>]*>/g, '');

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle 
            className="text-xl font-bold text-gray-900 flex-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {firstImage && (
          <img
            src={firstImage}
            alt={plainTitle}
            className="float-left w-80 mr-6 mb-4 rounded-lg object-cover"
          />
        )}
        
        <div className="space-y-4">
          <div 
            className="text-gray-700 leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: displayText }}
          />
          
          {shouldTruncate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
            >
              {isExpanded ? (
                <>
                  Read Less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          )}
        </div>
        
        <div className="clear-both"></div>
        
        {/* Show remaining images after text when expanded */}
        {isExpanded && remainingImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {remainingImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - ${index + 2}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const News = () => {
  const allNews = getSortedNewsItems();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(allNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allNews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Outreach Activities
          </h1>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="space-y-6"
        >
          {currentItems.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 ${
                    currentPage === page 
                      ? "bg-primary text-white" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
