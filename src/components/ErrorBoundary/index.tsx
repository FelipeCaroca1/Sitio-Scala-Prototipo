import React, { Component } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import type { ErrorBoundaryProps, ErrorBoundaryState, ErrorFallbackProps } from './types';

/**
 * Componente de fallback por defecto para errores
 * Utiliza useResponsive para adaptarse a diferentes tamaños de pantalla
 */
const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${isMobile ? 'px-4' : 'px-6'}`}>
      <div className={`max-w-md w-full bg-white rounded-lg shadow-lg ${isMobile ? 'p-6' : 'p-8'}`}>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 className={`mt-4 text-center ${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-900`}>
          Oops! Algo salió mal
        </h1>
        <p className={`mt-2 text-center ${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>
          Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
        </p>
        {error && (
          <details className="mt-4">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              Detalles del error
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <div className={`mt-6 flex ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-3'} justify-center`}>
          <button
            onClick={resetError}
            className={`${isMobile ? 'w-full' : 'px-4'} py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
          >
            Intentar de nuevo
          </button>
          <button
            onClick={() => window.location.reload()}
            className={`${isMobile ? 'w-full' : 'px-4'} py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors`}
          >
            Recargar página
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ErrorBoundary global para capturar errores en toda la aplicación
 * Integra con useResponsive para UI adaptativa
 * Proporciona logging y fallback UI consistente
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Logging del error
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Callback personalizado si se proporciona
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}
