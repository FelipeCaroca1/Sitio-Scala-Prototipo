import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

/**
 * Props para el componente Layout
 */
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Componente Layout principal
 * Proporciona la estructura base del sitio con Navigation y Footer
 * 
 * @param {LayoutProps} props - Props del componente
 * @returns {React.FC} Componente Layout
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
