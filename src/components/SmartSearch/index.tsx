import React, { useState } from 'react';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';
import { useSmartSearch } from '../../hooks/useSmartSearch';

/**
 * Props para el componente SmartSearch
 */
interface SmartSearchProps {
  className?: string;
  placeholder?: string;
}

/**
 * Componente de búsqueda inteligente completo
 * Combina la barra de búsqueda con los resultados
 */
export const SmartSearch: React.FC<SmartSearchProps> = ({
  className = "",
  placeholder = "Buscar documentos, iniciativas, contactos..."
}) => {
  const [showResults, setShowResults] = useState(false);
  const [lastQuery, setLastQuery] = useState('');
  const {
    searchQuery,
    searchResults,
    handleSearch
  } = useSmartSearch();

  const handleSearchChange = (query: string) => {
    handleSearch(query);
    
    // Solo mostrar resultados si:
    // 1. Hay query
    // 2. La query cambió (el usuario está escribiendo activamente)
    if (query.length > 0 && query !== lastQuery) {
      setShowResults(true);
    } else if (query.length === 0) {
      setShowResults(false);
    }
    
    setLastQuery(query);
  };

  const handleClose = () => {
    setShowResults(false);
    // No cambiar lastQuery para que no se reabra automáticamente
  };

  return (
    <div className={`relative ${className}`}>
      {/* Barra de búsqueda */}
      <SearchBar
        onSearch={handleSearchChange}
        placeholder={placeholder}
        className="w-full"
      />

      {/* Resultados de búsqueda */}
      {showResults && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          />
          
          {/* Resultados */}
          <div className="relative z-50">
            <SearchResults
              results={searchResults}
              query={searchQuery}
              onClose={handleClose}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SmartSearch;
