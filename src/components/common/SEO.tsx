import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'Event';
  data: Record<string, unknown>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'Organization':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Center for Nexus of Air Quality, Health, Ecosystem, and Climate',
          alternateName: 'Air Quality Nexus Center',
          url: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/',
          logo: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/aqc.png',
          description: 'A leading Center in conducting and implementing application research with the aim to gain multiple benefits from reducing air pollution through improvement of health of human and ecosystem, and protection of the climate system.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway',
            addressLocality: 'Klong Luang',
            addressRegion: 'Pathum Thani',
            postalCode: '12120',
            addressCountry: 'Thailand'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+66-9-9797-6360',
            contactType: 'customer service',
            email: 'airqualitynexus@ait.ac.th'
          },
          sameAs: [
            'https://twitter.com/airqualitynexus',
            'https://facebook.com/airqualitynexus',
            'https://linkedin.com/company/airqualitynexus'
          ],
          ...data
        };
        break;
        
      case 'WebSite':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Air Quality Nexus Center',
          url: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };
        break;
        
      case 'Article':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Organization',
            name: 'Air Quality Nexus Center'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Air Quality Nexus Center',
            logo: {
              '@type': 'ImageObject',
              url: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/aqc.png'
            }
          },
          ...data
        };
        break;
        
      case 'Event':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: data.name,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          location: {
            '@type': 'Place',
            name: data.location,
            address: data.address
          },
          organizer: {
            '@type': 'Organization',
            name: 'Air Quality Nexus Center',
            url: 'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/'
          },
          ...data
        };
        break;
    }
    
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data, location.pathname]);

  return null;
};

export const usePageSEO = (title: string, description: string, image?: string) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', image);
      }
      
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', image);
      }
    }
  }, [title, description, image]);
};
