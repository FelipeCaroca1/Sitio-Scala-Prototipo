import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingProvider, AllianceProvider } from './context';
import { Layout } from './components/Layout';
import { OurAlliance } from './pages/OurAlliance';
import { Governance } from './pages/Governance';
import { Planning } from './pages/Planning';
import { Management } from './pages/Management';
import { Initiatives } from './pages/Initiatives';

/**
 * Componente principal de la aplicación
 * Configura el enrutamiento y los proveedores globales
 * Incluye ErrorBoundary global para captura de errores
 * 
 * @returns {React.FC} Componente App principal
 */
const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <LoadingProvider>
          <AllianceProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<OurAlliance />} />
                <Route path="/gobernanza" element={<Governance />} />
                <Route path="/planeacion" element={<Planning />} />
                <Route path="/gestion" element={<Management />} />
                <Route path="/iniciativas" element={<Initiatives />} />
                <Route path="/chat-ia" element={<div className="min-h-screen bg-slate-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">CHAT IA</h1>
                    <p className="text-xl text-slate-300">Próximamente - Agente IA para orientar usuarios</p>
                  </div>
                </div>} />
                <Route path="/galeria" element={<div className="min-h-screen bg-slate-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">GALERÍA DE FOTOS E HITOS</h1>
                    <p className="text-xl text-slate-300">Próximamente - Galería de fotos e hitos de la alianza</p>
                  </div>
                </div>} />
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-8">Página no encontrada</p>
                        <a
                          href="/"
                          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                        >
                          Volver al inicio
                        </a>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </Layout>
          </AllianceProvider>
        </LoadingProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
