import React, { useState, useMemo, useCallback } from 'react';
import { AllianceContext } from './alliance-context';
import type { AllianceContextType, AllianceProviderProps, Alliance } from './alliance-context';

/**
 * Proveedor del contexto de Alianzas
 * Maneja el estado global de la alianza seleccionada para filtrado
 * 
 * @param {AllianceProviderProps} props - Props del proveedor
 * @returns {React.FC} Componente proveedor
 */
export const AllianceProvider: React.FC<AllianceProviderProps> = ({ children }) => {
  const [selectedAlliance, setSelectedAlliance] = useState<Alliance | null>(null);

  // Lista de alianzas disponibles según el spreadsheet
  const alliances = useMemo<Alliance[]>(() => [
    {
      id: 'kapit',
      name: 'KAPIT',
      code: 'KAPIT',
      color: '#FF6B35' // Naranja vibrante
    },
    {
      id: 'kapit-ingles',
      name: 'KAPIT Inglés',
      code: 'KAPIT-EN',
      color: '#FF8C42' // Naranja más claro
    },
    {
      id: 'unir',
      name: 'UNIR',
      code: 'UNIR',
      color: '#4A90E2' // Azul
    },
    {
      id: 'udd',
      name: 'UDD',
      code: 'UDD',
      color: '#7B68EE' // Violeta
    },
    {
      id: 'crescal',
      name: 'Crescal',
      code: 'CRESCAL',
      color: '#20B2AA' // Verde azulado
    },
    {
      id: 'up',
      name: 'UP',
      code: 'UP',
      color: '#9370DB' // Púrpura medio
    },
    {
      id: 'uces',
      name: 'UCES',
      code: 'UCES',
      color: '#4682B4' // Azul acero
    }
  ], []);

  const selectAlliance = useCallback((alliance: Alliance | null) => {
    setSelectedAlliance(alliance);
  }, []);

  const getAllianceById = useCallback((id: string): Alliance | undefined => {
    return alliances.find(alliance => alliance.id === id);
  }, [alliances]);

  const getAllianceByCode = useCallback((code: string): Alliance | undefined => {
    return alliances.find(alliance => alliance.code === code);
  }, [alliances]);

  const value = useMemo<AllianceContextType>(() => ({
    selectedAlliance,
    alliances,
    selectAlliance,
    getAllianceById,
    getAllianceByCode,
  }), [selectedAlliance, alliances, selectAlliance, getAllianceById, getAllianceByCode]);

  return (
    <AllianceContext.Provider value={value}>
      {children}
    </AllianceContext.Provider>
  );
};
