import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingProvider } from './context';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';

/**
 * Componente principal de la aplicación
 * Configura el enrutamiento y los proveedores globales
 * Incluye ErrorBoundary global para captura de errores
 * 
 * @returns {React.FC} Componente App principal
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Página no encontrada</p>
                      <a
                        href="/"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Volver al inicio
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </LoadingProvider>
    </ErrorBoundary>
  );
};

export default App;
