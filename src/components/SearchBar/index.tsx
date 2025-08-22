import React, { useState, useEffect, useRef } from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Props para el componente SearchBar
 */
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Componente de barra de búsqueda inteligente
 * Permite buscar por palabras clave de forma elegante
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Buscar documentos, iniciativas, contactos...",
  className = ""
}) => {
  const { isMobile } = useResponsive();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce para búsqueda en tiempo real
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        onSearch(query.trim());
      } else {
        onSearch('');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      {/* Barra de búsqueda principal */}
      <div className={`
        relative flex items-center
        bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl
        transition-all duration-300 ease-in-out
        ${isFocused ? 'bg-white/15 border-orange-400/50 shadow-lg shadow-orange-500/20' : 'hover:bg-white/12'}
        ${isMobile ? 'h-12' : 'h-14'}
      `}>
        {/* Icono de búsqueda */}
        <div className={`
          flex items-center justify-center text-white/70
          ${isMobile ? 'w-12 h-12' : 'w-14 h-14'}
        `}>
          <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input de búsqueda */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
            flex-1 bg-transparent text-white placeholder-white/50
            focus:outline-none focus:placeholder-white/30
            ${isMobile ? 'text-sm pr-3' : 'text-base pr-4'}
          `}
        />

        {/* Botón de limpiar */}
        {query && (
          <button
            onClick={handleClear}
            className={`
              flex items-center justify-center text-white/50 hover:text-white/80
              transition-colors duration-200
              ${isMobile ? 'w-10 h-10 mr-1' : 'w-12 h-12 mr-2'}
            `}
            title="Limpiar búsqueda"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicador de búsqueda activa */}
      {query && (
        <div className="absolute -bottom-8 left-0 right-0 text-center">
          <span className="text-xs text-white/60 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            Buscando: "{query}"
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
