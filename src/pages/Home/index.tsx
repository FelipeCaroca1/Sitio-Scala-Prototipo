import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Props para el componente Home
 */
interface HomeProps {}

/**
 * Página principal de la aplicación
 * Utiliza useResponsive para adaptarse a diferentes dispositivos
 * 
 * @param {HomeProps} props - Props del componente
 * @returns {React.FC} Componente de página Home
 */
export const Home: React.FC<HomeProps> = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}>
            Sitio Scala Prototipo
          </h1>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isMobile ? 'text-base' : 'text-lg'}`}>
            Aplicación React con TypeScript, Tailwind CSS y React Router DOM
          </p>
        </header>

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">React + TypeScript</h3>
            <p className="text-gray-600 text-sm">
              Desarrollo moderno con tipado estático y componentes funcionales
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">
              Estilos utilitarios con diseño responsivo usando useResponsive
            </p>
          </div>

          <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${isMobile ? '' : isTablet ? 'col-span-2' : ''}`}>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">React Router DOM</h3>
            <p className="text-gray-600 text-sm">
              Navegación SPA con rutas dinámicas y gestión de estado
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className={`inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm ${isMobile ? 'text-sm' : 'text-base'}`}>
            <div className={`w-2 h-2 bg-green-400 rounded-full ${isDesktop ? 'animate-pulse' : ''}`}></div>
            <span className="text-gray-600">
              {isMobile ? 'Móvil' : isTablet ? 'Tablet' : 'Desktop'} - {isDesktop && 'Listo para desarrollo'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
