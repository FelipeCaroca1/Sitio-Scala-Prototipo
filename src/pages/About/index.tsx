import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Props para el componente About
 */
interface AboutProps {}

/**
 * Página About de la aplicación
 * Muestra información sobre el proyecto y tecnologías utilizadas
 * 
 * @param {AboutProps} props - Props del componente
 * @returns {React.FC} Componente de página About
 */
export const About: React.FC<AboutProps> = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className={`min-h-screen bg-gray-50 ${isMobile ? 'px-4 py-8' : 'px-8 py-12'}`}>
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Acerca del Proyecto
          </h1>
          <p className={`text-gray-600 ${isMobile ? 'text-base' : 'text-lg'}`}>
            Información sobre las tecnologías y arquitectura utilizada
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white">
            <h2 className={`font-semibold mb-2 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
              Stack Tecnológico
            </h2>
            <p className={`opacity-90 ${isMobile ? 'text-sm' : 'text-base'}`}>
              Tecnologías modernas para desarrollo frontend
            </p>
          </div>

          <div className="p-6">
            <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-2'}`}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• React 18 con hooks</li>
                    <li>• TypeScript para tipado</li>
                    <li>• Vite como bundler</li>
                    <li>• React Router DOM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Estilos</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Tailwind CSS</li>
                    <li>• Hook useResponsive</li>
                    <li>• Diseño mobile-first</li>
                    <li>• Componentes adaptativos</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Arquitectura</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Componentes funcionales</li>
                    <li>• Context API</li>
                    <li>• Error Boundaries</li>
                    <li>• Hooks personalizados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Herramientas</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• ESLint para linting</li>
                    <li>• PostCSS</li>
                    <li>• Autoprefixer</li>
                    <li>• Hot Module Replacement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Características Principales</h3>
              <ul className="space-y-1 text-blue-800 text-sm">
                <li>• Responsividad sin media queries usando useResponsive</li>
                <li>• Manejo global de estados de carga</li>
                <li>• Error Boundary para captura de errores</li>
                <li>• Estructura de carpetas escalable</li>
                <li>• Tipado estricto con TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
