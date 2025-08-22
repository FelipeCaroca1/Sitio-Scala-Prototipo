import { useContext } from 'react';
import { LoadingContext } from './loading-context';
import type { LoadingContextType } from './loading-context';

/**
 * Hook para usar el contexto de Loading
 * Proporciona acceso a las funciones y estado de carga global
 * 
 * @returns {LoadingContextType} Contexto de loading
 * @throws {Error} Si se usa fuera del LoadingProvider
 */
export const useLoadingContext = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  
  return context;
};
