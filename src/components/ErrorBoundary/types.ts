/**
 * Tipos para el componente ErrorBoundary
 */
export interface ErrorBoundaryProps {
  /** Componentes hijos a renderizar */
  children: React.ReactNode;
  /** Componente de fallback personalizado */
  fallback?: React.ComponentType<ErrorFallbackProps>;
  /** Callback cuando ocurre un error */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  /** Indica si hay un error */
  hasError: boolean;
  /** Información del error */
  error?: Error;
}

export interface ErrorFallbackProps {
  /** Error que ocurrió */
  error?: Error;
  /** Función para resetear el error */
  resetError: () => void;
}
