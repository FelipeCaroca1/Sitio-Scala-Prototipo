import React, { useState } from 'react';
import { useAllianceContext } from '../../context/useAllianceContext';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Props para el componente AllianceSelector
 */
interface AllianceSelectorProps {}

/**
 * Selector de alianzas para filtrar la información
 * Permite seleccionar una alianza específica o ver todas
 * 
 * @param {AllianceSelectorProps} props - Props del componente
 * @returns {React.FC} Componente selector de alianzas
 */
export const AllianceSelector: React.FC<AllianceSelectorProps> = () => {
  const { selectedAlliance, alliances, selectAlliance } = useAllianceContext();
  const { isMobile } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  // Debug temporal
  console.log('AllianceSelector - selectedAlliance:', selectedAlliance);
  console.log('AllianceSelector - alliances:', alliances);

  const handleAllianceSelect = (alliance: any) => {
    console.log('AllianceSelector - selecting alliance:', alliance);
    selectAlliance(alliance);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Selector principal */}
      <button
        onClick={toggleDropdown}
        className={`
          flex items-center space-x-3 px-4 py-3 rounded-xl border transition-all duration-200 shadow-sm
          ${selectedAlliance 
            ? 'border-slate-200 bg-slate-50 text-slate-700' 
            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
          }
          ${isMobile ? 'w-full justify-center' : 'min-w-[220px]'}
        `}
      >
        {selectedAlliance ? (
          <>
            <div 
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: selectedAlliance.color }}
            />
            <span className="font-medium text-sm">{selectedAlliance.name}</span>
          </>
        ) : (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            <span className="font-medium text-sm">Filtrar por alianza</span>
          </>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown de opciones */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto backdrop-blur-sm">
          {/* Opción "Todas las alianzas" */}
          <button
            onClick={() => handleAllianceSelect(null)}
            className={`
              w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors
              ${!selectedAlliance ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
            `}
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="font-medium">Todas las alianzas</span>
            </div>
          </button>

          {/* Separador */}
          <div className="border-t border-gray-200" />

          {/* Lista de alianzas */}
          {alliances.map((alliance) => (
            <button
              key={alliance.id}
              onClick={() => handleAllianceSelect(alliance)}
              className={`
                w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors
                ${selectedAlliance?.id === alliance.id ? 'bg-orange-50 text-orange-700' : 'text-gray-700'}
              `}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: alliance.color }}
                />
                <span className="font-medium">
                  {alliance.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Overlay para cerrar dropdown al hacer clic fuera */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
