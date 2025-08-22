import React, { useState, useMemo, useCallback } from 'react';
import { LoadingContext } from './loading-context';
import type { LoadingContextType, LoadingProviderProps } from './loading-context';

/**
 * Proveedor del contexto de Loading
 * Maneja el estado global de carga de la aplicación
 * 
 * @param {LoadingProviderProps} props - Props del proveedor
 * @returns {React.FC} Componente proveedor
 */
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string | undefined>(undefined);

  const startLoading = useCallback((message?: string) => {
    setIsLoading(true);
    setLoadingMessage(message);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setLoadingMessage(undefined);
  }, []);

  const toggleLoading = useCallback((message?: string) => {
    setIsLoading(prev => {
      const newState = !prev;
      if (newState) {
        setLoadingMessage(message);
      } else {
        setLoadingMessage(undefined);
      }
      return newState;
    });
  }, []);

  const value = useMemo<LoadingContextType>(() => ({
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    toggleLoading,
  }), [isLoading, loadingMessage, startLoading, stopLoading, toggleLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
