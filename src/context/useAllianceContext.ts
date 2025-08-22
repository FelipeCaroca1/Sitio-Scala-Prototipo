import { useContext } from 'react';
import { AllianceContext } from './alliance-context';
import type { AllianceContextType } from './alliance-context';

/**
 * Hook para usar el contexto de Alianzas
 * Proporciona acceso a las funciones y estado de filtrado por alianzas
 * 
 * @returns {AllianceContextType} Contexto de alianzas
 * @throws {Error} Si se usa fuera del AllianceProvider
 */
export const useAllianceContext = (): AllianceContextType => {
  const context = useContext(AllianceContext);
  
  if (context === undefined) {
    throw new Error('useAllianceContext must be used within an AllianceProvider');
  }
  
  return context;
};
