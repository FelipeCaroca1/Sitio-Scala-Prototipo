import { useState, useEffect } from 'react';
import type { ResponsiveHookReturn } from './types';

/**
 * Hook para manejar responsividad sin media queries
 * Proporciona información sobre el tamaño de pantalla actual y breakpoints
 * 
 * @returns {ResponsiveHookReturn} Objeto con información de responsividad
 */
export const useResponsive = (): ResponsiveHookReturn => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;

  // Breakpoints basados en Tailwind CSS
  const xs = width < 641;
  const sm = width >= 641 && width < 769;
  const md = width >= 769 && width < 1025;
  const lg = width >= 1025 && width < 1281;
  const xl = width >= 1281 && width < 1537;
  const xxl = width >= 1537;

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    '2xl': xxl,
    isMobile: xs || sm,
    isTablet: md,
    isDesktop: lg || xl || xxl,
    width,
    height,
  };
};
