import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useFilteredData } from '../../hooks/useFilteredData';

/**
 * Props para el componente Governance
 */
interface GovernanceProps {}

/**
 * Página del módulo GOBERNANZA
 * Muestra actas de comités, coordinación y presentaciones
 * Utiliza useResponsive y filtrado por alianzas
 * 
 * @param {GovernanceProps} props - Props del componente
 * @returns {React.FC} Componente de página Governance
 */
export const Governance: React.FC<GovernanceProps> = () => {
  const { isMobile, isTablet } = useResponsive();
  const { getGovernanceDataFiltered, getFilterIndicator } = useFilteredData();

  const filteredDocuments = getGovernanceDataFiltered();

  return (
    <div className="bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="relative mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <h1 className={`font-bold text-white mb-6 tracking-tight ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
              GOBERNANZA <span className="text-orange-400">ESTRATÉGICA</span>
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto leading-relaxed ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Gestión y coordinación de comités, actas de reuniones y presentaciones estratégicas de la alianza
            </p>
            
            {/* Indicador de filtro */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">{getFilterIndicator()}</span>
            </div>
          </div>
        </header>

        {/* Estructura de Gobernanza */}
        <section className="mb-20">
          <div className="bg-slate-600 border border-slate-500 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-slate-500 px-8 py-8">
              <h2 className={`font-light text-white mb-3 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                Estructura de Gobernanza
              </h2>
              <p className={`text-slate-200 leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>
                Sistema de comités que asegura la coordinación efectiva entre todas las alianzas
              </p>
            </div>
            
            <div className="p-8">
              <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Comité de Colaboración</h3>
                  <p className="text-slate-200 text-base leading-relaxed">Coordina proyectos conjuntos entre alianzas</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Comité de Dirección</h3>
                  <p className="text-slate-200 text-base leading-relaxed">Define estrategias generales de la alianza</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Estrategia y Comunicaciones</h3>
                  <p className="text-slate-200 text-base leading-relaxed">Planifica comunicaciones estratégicas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actas de Comités */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Actas de Comités
          </h2>
          
          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-slate-600 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-500 group hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {doc.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{doc.title}</h3>
                <p className="text-slate-200 text-base mb-6 leading-relaxed">{doc.description}</p>
                
                {/* Información del comité */}
                <div className="mb-6 p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-orange-400">Comité:</span>
                    <span className="text-sm text-white">{doc.committee}</span>
                  </div>
                  {doc.meetingDate && (
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-orange-400">Fecha:</span>
                      <span className="text-sm text-white">{new Date(doc.meetingDate).toLocaleDateString('es-ES')}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-400">Asistentes:</span>
                    <span className="text-sm text-white">{doc.attendees.length}</span>
                  </div>
                </div>

                {/* Decisiones y acciones */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Decisiones Principales:</h4>
                  <ul className="space-y-1 mb-4">
                    {doc.decisions.slice(0, 2).map((decision, index) => (
                      <li key={index} className="text-xs text-slate-200 flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Próximas Acciones:</h4>
                  <ul className="space-y-1">
                    {doc.nextActions.slice(0, 2).map((action, index) => (
                      <li key={index} className="text-xs text-slate-200 flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300 font-medium">
                    {new Date(doc.lastUpdated).toLocaleDateString('es-ES')}
                  </span>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver acta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendario de Reuniones */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Próximas Reuniones
          </h2>
          
          <div className="bg-slate-600 rounded-2xl shadow-lg p-8 border border-slate-500">
            <div className="grid gap-6">
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">15</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Comité de Colaboración</h3>
                  <p className="text-slate-200 text-base">Revisión de proyectos conjuntos Q1 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-orange-400">Febrero 15</p>
                  <p className="text-sm text-slate-300">10:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">22</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Comité de Dirección</h3>
                  <p className="text-slate-200 text-base">Planificación estratégica 2024-2025</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-blue-400">Febrero 22</p>
                  <p className="text-sm text-slate-300">2:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">29</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Estrategia y Comunicaciones</h3>
                  <p className="text-slate-200 text-base">Plan de comunicaciones Q2 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-green-400">Febrero 29</p>
                  <p className="text-sm text-slate-300">11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ¿Necesitas participar en un comité?
            </h2>
            <p className={`mb-6 opacity-90 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Contacta con la coordinación para obtener más información sobre la participación
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contactar coordinación
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
