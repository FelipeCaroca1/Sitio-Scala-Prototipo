import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Resultado de búsqueda con información del contexto
 */
interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'initiative' | 'contact' | 'project' | 'governance' | 'planning' | 'management';
  alliance: string;
  url?: string;
  relevanceScore: number;
  matchedTerms: string[];
}

/**
 * Props para el componente SearchResults
 */
interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onClose: () => void;
  className?: string;
}

/**
 * Obtiene el color del badge según el tipo
 */
const getTypeColor = (type: SearchResult['type']): string => {
  const colors = {
    document: 'bg-blue-900/30 text-blue-200',
    initiative: 'bg-purple-900/30 text-purple-200',
    contact: 'bg-green-900/30 text-green-200',
    project: 'bg-orange-900/30 text-orange-200',
    governance: 'bg-red-900/30 text-red-200',
    planning: 'bg-yellow-900/30 text-yellow-200',
    management: 'bg-indigo-900/30 text-indigo-200'
  };
  return colors[type] || 'bg-slate-900/30 text-slate-200';
};

/**
 * Obtiene el texto del tipo en español
 */
const getTypeText = (type: SearchResult['type']): string => {
  const types = {
    document: 'Documento',
    initiative: 'Iniciativa',
    contact: 'Contacto',
    project: 'Proyecto',
    governance: 'Gobernanza',
    planning: 'Planeación',
    management: 'Gestión'
  };
  return types[type] || type;
};

/**
 * Componente para mostrar resultados de búsqueda
 */
export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  onClose,
  className = ""
}) => {
  const { isMobile } = useResponsive();

  // Cerrar con Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (results.length === 0 && query) {
    return (
      <div 
        className={`
          absolute top-full left-0 right-0 mt-4 z-50
          bg-slate-700/95 backdrop-blur-sm border border-slate-500 rounded-xl
          ${isMobile ? 'p-4' : 'p-6'}
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Sin resultados</h3>
          <p className="text-slate-300 text-sm">
            No se encontraron resultados para "{query}"
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="mt-4 text-orange-400 hover:text-orange-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-400/10 transition-colors"
            title="Cerrar búsqueda (ESC)"
          >
            Limpiar búsqueda
          </button>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div 
      className={`
        absolute top-full left-0 right-0 mt-4 z-50
        bg-slate-700/95 backdrop-blur-sm border border-slate-500 rounded-xl
        max-h-96 overflow-y-auto
        ${className}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-600">
        <div>
          <h3 className="text-lg font-semibold text-white">Resultados de búsqueda</h3>
          <p className="text-sm text-slate-300">
            {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-600/50"
          title="Cerrar búsqueda (ESC)"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Resultados */}
      <div className="p-2">
        {results.map((result) => (
          <div
            key={result.id}
            className="p-4 hover:bg-slate-600/50 rounded-lg transition-colors cursor-pointer group"
            onClick={() => {
              if (result.url) {
                window.open(result.url, '_blank');
              }
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm group-hover:text-orange-300 transition-colors truncate">
                  {result.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {result.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 ml-3 flex-shrink-0">
                <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                  {getTypeText(result.type)}
                </span>
                {result.url && (
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xs text-slate-400">
                  {result.alliance}
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400">
                  {result.category}
                </span>
              </div>
              
              {result.matchedTerms.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {result.matchedTerms.slice(0, 2).map((term, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-900/30 text-orange-300 px-2 py-0.5 rounded"
                    >
                      {term}
                    </span>
                  ))}
                  {result.matchedTerms.length > 2 && (
                    <span className="text-xs text-orange-400">
                      +{result.matchedTerms.length - 2}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
