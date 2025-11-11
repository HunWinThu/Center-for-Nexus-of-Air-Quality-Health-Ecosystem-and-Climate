import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-bold text-gray-900 flex-1">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-6">
          {image && (
            <div className="flex-shrink-0 w-80 space-y-4">
              {Array.isArray(image) ? (
                image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${title} - ${index + 1}`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                ))
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              )}
            </div>
          )}
          <div className="flex-1 space-y-4">
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
        </div>
      </CardContent>
    </Card>
  );
};

const News = () => {
  const allNews = getSortedNewsItems();
  const events = allNews.filter(item => item.category === 'Event');
  const media = allNews.filter(item => item.category === 'Media');

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
            Events & Media
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events and media coverage
          </p>
        </motion.div>

        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-accent/50 p-2 rounded-lg mb-8">
            <TabsTrigger value="events" className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground">
              Events
            </TabsTrigger>
            <TabsTrigger value="media" className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground">
              Media
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <motion.div
              {...fadeUp}
              className="space-y-6"
            >
              {events.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="media">
            <motion.div
              {...fadeUp}
              className="space-y-6"
            >
              {media.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default News;
