import React, { Suspense } from 'react';

interface LazyRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-primary">Loading...</div>
  </div>
);

export const LazyRoute = React.memo(({ children, fallback = <DefaultFallback /> }: LazyRouteProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
});

LazyRoute.displayName = 'LazyRoute';