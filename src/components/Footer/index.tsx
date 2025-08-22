import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Props para el componente Footer
 */
interface FooterProps {}

/**
 * Componente Footer del sitio
 * Muestra información de contacto, enlaces útiles y copyright
 * Utiliza useResponsive para adaptarse a diferentes dispositivos
 * 
 * @param {FooterProps} props - Props del componente
 * @returns {React.FC} Componente Footer
 */
export const Footer: React.FC<FooterProps> = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'}`}>
          
          {/* Logo y descripción */}
          <div className={`${isMobile ? 'text-center' : ''}`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">
                scala <span className="text-orange-500">LEARNING</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Alianza estratégica que impulsa la educación virtual y la innovación tecnológica en Latinoamérica.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Nuestra Alianza
                </a>
              </li>
              <li>
                <a href="/gobernanza" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Gobernanza
                </a>
              </li>
              <li>
                <a href="/planeacion" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Planeación
                </a>
              </li>
              <li>
                <a href="/gestion" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Gestión
                </a>
              </li>
            </ul>
          </div>

          {/* Alianzas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Alianzas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">KAPIT</li>
              <li className="text-gray-300 text-sm">UNIR</li>
              <li className="text-gray-300 text-sm">UDD</li>
              <li className="text-gray-300 text-sm">Crescal</li>
              <li className="text-gray-300 text-sm">UP</li>
              <li className="text-gray-300 text-sm">UCES</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                info@scalalearning.org
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +56 2 2345 6789
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Santiago, Chile
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Scala Learning. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
