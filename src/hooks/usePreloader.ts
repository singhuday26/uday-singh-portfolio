import { useEffect } from 'react';

const criticalAssets = [
  '/src/assets/hero-background.jpg',
  '/src/assets/project-medicare.png',
  '/src/assets/project-edusphere.png',
  '/src/assets/project-churn.png',
  '/src/assets/project-waste_management.png'
];

// Prioritize above-the-fold assets
const priorityAssets = [
  '/src/assets/hero-background.jpg'
];

export const usePreloader = () => {
  useEffect(() => {
    const preloadPriorityAssets = () => {
      // Preload critical above-the-fold assets immediately
      priorityAssets.forEach((asset) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    };

    const preloadSecondaryAssets = () => {
      // Preload other critical assets after a delay
      criticalAssets.filter(asset => !priorityAssets.includes(asset)).forEach((asset) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        document.head.appendChild(link);
      });
    };

    // Immediate preload for hero background
    preloadPriorityAssets();
    
    // Delayed preload for other assets
    const timer = setTimeout(preloadSecondaryAssets, 200);
    return () => clearTimeout(timer);
  }, []);
};