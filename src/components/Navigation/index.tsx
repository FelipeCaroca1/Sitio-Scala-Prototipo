import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import { AllianceSelector } from '../AllianceSelector';

/**
 * Props para el componente Navigation
 */
interface NavigationProps {}

/**
 * Componente de navegación principal
 * Incluye el selector de alianzas y navegación a los 7 módulos
 * Utiliza useResponsive para adaptarse a diferentes dispositivos
 * 
 * @param {NavigationProps} props - Props del componente
 * @returns {React.FC} Componente de navegación
 */
export const Navigation: React.FC<NavigationProps> = () => {
  const { isMobile } = useResponsive();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'NUESTRA ALIANZA' },
    { path: '/gobernanza', label: 'GOBERNANZA' },
    { path: '/planeacion', label: 'PLANEACIÓN' },
    { path: '/gestion', label: 'GESTIÓN' },
    { path: '/iniciativas', label: 'INICIATIVAS' },
    { path: '/chat-ia', label: 'CHAT IA' },
    { path: '/galeria', label: 'GALERÍA' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-800/95 backdrop-blur-sm shadow-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex justify-between items-center h-20">
          {/* Logo - Izquierda */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-white tracking-wide">
                  scala
                </span>
                <span className="text-xs font-medium text-orange-400 tracking-widest -mt-1">
                  LEARNING
                </span>
              </div>
            </Link>
          </div>

          {/* Selector de Alianzas - Siempre visible */}
          <div className="flex-shrink-0 mr-4">
            <AllianceSelector />
          </div>

            {/* Desktop Navigation - Derecha */}
            {!isMobile && (
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'text-slate-200 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

                {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden">
            {/* Menú de navegación */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700 rounded-lg mt-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            isActivePath(item.path)
                              ? 'bg-orange-600 text-white'
                              : 'text-slate-200 hover:text-white hover:bg-slate-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
          </div>
        )}
      </div>
    </nav>
  );
};
