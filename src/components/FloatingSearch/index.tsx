import React, { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';
import { useSmartSearch } from '../../hooks/useSmartSearch';

/**
 * Componente de búsqueda flotante
 * Botón flotante que se despliega en un buscador compacto
 */
export const FloatingSearch: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [lastQuery, setLastQuery] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const {
    searchQuery,
    searchResults,
    handleSearch
  } = useSmartSearch();

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isExpanded]);

  const handleToggle = () => {
    if (isExpanded) {
      handleClose();
    } else {
      setIsExpanded(true);
      setShowResults(false);
      setLastQuery('');
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setShowResults(false);
  };

  const handleSearchChange = (query: string) => {
    handleSearch(query);
    
    // Solo mostrar resultados si la query cambió
    if (query.length > 0 && query !== lastQuery) {
      setShowResults(true);
    } else if (query.length === 0) {
      setShowResults(false);
    }
    
    setLastQuery(query);
  };

  const handleResultSelect = () => {
    // Cerrar automáticamente al seleccionar un resultado
    handleClose();
  };

  // Tamaños y posiciones responsivos siguiendo el patrón del sitio
  const getButtonClasses = () => {
    if (isMobile) return 'w-10 h-10 bottom-4 right-4';
    if (isTablet) return 'w-11 h-11 bottom-8 right-5';
    return 'w-12 h-12 bottom-16 right-6';
  };

  const getIconSize = () => {
    if (isMobile) return 'w-4 h-4';
    if (isTablet) return 'w-5 h-5';
    return 'w-5 h-5';
  };

  const getPanelClasses = () => {
    if (isMobile) return 'bottom-16 right-4 w-72';
    if (isTablet) return 'bottom-24 right-5 w-80';
    return 'bottom-32 right-6 w-80';
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`
          fixed ${getButtonClasses()} z-40
          rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isExpanded 
            ? 'bg-orange-500 scale-105 shadow-orange-500/50' 
            : 'bg-slate-700 hover:bg-orange-500 hover:scale-105 shadow-slate-900/60 hover:shadow-orange-500/30'
          }
          border border-white/20 hover:border-orange-300/50
          backdrop-blur-sm
        `}
        title={isExpanded ? "Cerrar búsqueda" : "Búsqueda rápida"}
      >
        <svg 
          className={`${getIconSize()} text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isExpanded ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          )}
        </svg>
      </button>

      {/* Buscador expandido */}
      {isExpanded && (
        <div
          ref={searchRef}
          className={`fixed ${getPanelClasses()} z-50 max-w-[calc(100vw-2rem)]`}
        >
          {/* Buscador compacto */}
          <div className={`bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-xl shadow-xl ${isMobile ? 'p-2' : 'p-3'}`}>
            <div className={`${isMobile ? 'mb-1' : 'mb-2'}`}>
              <h3 className={`font-semibold text-white ${isMobile ? 'text-xs mb-0' : 'text-xs mb-0.5'}`}>
                Búsqueda Rápida
              </h3>
              <p className={`text-slate-400 ${isMobile ? 'text-xs' : 'text-xs'}`}>
                {isMobile ? 'Buscar contenido' : 'Encuentra documentos e iniciativas'}
              </p>
            </div>
            
            <SearchBar
              onSearch={handleSearchChange}
              placeholder="Buscar..."
              className="w-full"
            />

            {/* Resultados */}
            {showResults && (
              <div className={`${isMobile ? 'mt-1' : 'mt-2'}`}>
                <SearchResults
                  results={searchResults.slice(0, isMobile ? 3 : 5)}
                  query={searchQuery}
                  onClose={() => setShowResults(false)}
                  onResultSelect={handleResultSelect}
                  className="compact"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSearch;
