import { createContext } from 'react';

/**
 * Tipos para el contexto de Loading
 */
export interface LoadingContextType {
  /** Indica si hay una operación de carga en progreso */
  isLoading: boolean;
  /** Mensaje de carga actual */
  loadingMessage?: string;
  /** Función para iniciar el estado de carga */
  startLoading: (message?: string) => void;
  /** Función para detener el estado de carga */
  stopLoading: () => void;
  /** Función para alternar el estado de carga */
  toggleLoading: (message?: string) => void;
}

export interface LoadingProviderProps {
  children: React.ReactNode;
}

/**
 * Contexto para manejar estados de carga globales
 * Proporciona funciones para controlar indicadores de carga
 */
export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
