import { useEffect } from 'react';

const criticalAssets = [
  '/src/assets/hero-background.jpg',
  '/public/lovable-uploads/fad2ceb6-ecf8-49a9-8205-afa3d6191650.png'
];

export const usePreloader = () => {
  useEffect(() => {
    const preloadAssets = () => {
      criticalAssets.forEach((asset) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        document.head.appendChild(link);
      });
    };

    // Preload after initial render
    const timer = setTimeout(preloadAssets, 100);
    return () => clearTimeout(timer);
  }, []);
};