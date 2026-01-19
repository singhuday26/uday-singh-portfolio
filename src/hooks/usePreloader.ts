import { useEffect } from 'react';

const criticalAssets = [
  '/src/assets/hero-background.webp',
  '/src/assets/project-medicare.webp',
  '/src/assets/project-edusphere.webp',
  '/src/assets/project-churn.webp',
  '/src/assets/project-waste_management.webp'
];

// Prioritize above-the-fold assets
const priorityAssets = [
  '/src/assets/hero-background.webp'
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