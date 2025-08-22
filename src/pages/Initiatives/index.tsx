import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useFilteredData } from '../../hooks/useFilteredData';
import { SmartSearch } from '../../components';

/**
 * Props para el componente Initiatives
 */
interface InitiativesProps {}

/**
 * Página del módulo INICIATIVAS
 * Muestra planes de acción con las alianzas internas
 * Utiliza useResponsive y filtrado por alianzas
 * 
 * @param {InitiativesProps} props - Props del componente
 * @returns {React.FC} Componente de página Initiatives
 */
export const Initiatives: React.FC<InitiativesProps> = () => {
  const { isMobile, isTablet } = useResponsive();
  const { getInitiativesDataFiltered, getFilterIndicator } = useFilteredData();

  const filteredInitiatives = getInitiativesDataFiltered();

  // Función para obtener el color del tipo de iniciativa
  const getInitiativeTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-900/30 text-blue-200';
      case 'research': return 'bg-purple-900/30 text-purple-200';
      case 'innovation': return 'bg-orange-900/30 text-orange-200';
      case 'social': return 'bg-green-900/30 text-green-200';
      case 'international': return 'bg-indigo-900/30 text-indigo-200';
      default: return 'bg-gray-900/30 text-gray-200';
    }
  };

  // Función para obtener el texto del tipo de iniciativa
  const getInitiativeTypeText = (type: string) => {
    switch (type) {
      case 'academic': return 'Académica';
      case 'research': return 'Investigación';
      case 'innovation': return 'Innovación';
      case 'social': return 'Social';
      case 'international': return 'Internacional';
      default: return type;
    }
  };

  // Función para obtener el color de la fase
  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'planning': return 'bg-yellow-900/30 text-yellow-200';
      case 'development': return 'bg-blue-900/30 text-blue-200';
      case 'implementation': return 'bg-green-900/30 text-green-200';
      case 'evaluation': return 'bg-purple-900/30 text-purple-200';
      case 'completed': return 'bg-gray-900/30 text-gray-200';
      default: return 'bg-gray-900/30 text-gray-200';
    }
  };

  // Función para obtener el texto de la fase
  const getPhaseText = (phase: string) => {
    switch (phase) {
      case 'planning': return 'Planificación';
      case 'development': return 'Desarrollo';
      case 'implementation': return 'Implementación';
      case 'evaluation': return 'Evaluación';
      case 'completed': return 'Completada';
      default: return phase;
    }
  };

  return (
    <div className="bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="relative mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90 rounded-3xl overflow-hidden">
            {/* Fallback gradient si la imagen no carga */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-800/50 to-orange-900/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
          </div>
          
          {/* Content */}
          <div className={`relative z-10 text-center py-20 ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
            <h1 className={`font-bold text-white mb-6 tracking-tight ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
              INICIATIVAS <span className="text-orange-400">ESTRATÉGICAS</span>
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Planes de acción con las alianzas internas para el desarrollo y crecimiento institucional
            </p>
            
            {/* Buscador inteligente */}
            <div className="mb-8">
              <SmartSearch placeholder="Buscar iniciativas, proyectos, stakeholders..." />
            </div>
            
            {/* Indicador de filtro */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">{getFilterIndicator()}</span>
            </div>
          </div>
        </header>

        {/* Macroplan */}
        <section className="mb-20">
          <div className="bg-slate-600 border border-slate-500 rounded-2xl overflow-hidden shadow-lg">
            <div className={`bg-slate-500 ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'} py-8`}>
              <h2 className={`font-light text-white mb-3 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                Macroplan Estratégico
              </h2>
              <p className={`text-slate-200 leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>
                Visión general y objetivos estratégicos de las iniciativas por alianza
              </p>
            </div>
            
            <div className="p-8">
              <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Iniciativas Activas</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-2">{filteredInitiatives.length}</p>
                  <p className="text-slate-200 text-base leading-relaxed">Proyectos en ejecución</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Crecimiento</h3>
                  <p className="text-3xl font-bold text-orange-400 mb-2">+25%</p>
                  <p className="text-slate-200 text-base leading-relaxed">Incremento vs. 2023</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Equipos</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">8</p>
                  <p className="text-slate-200 text-base leading-relaxed">Equipos colaborando</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planes de Acción */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Planes de Acción
          </h2>
          
          {filteredInitiatives.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No hay iniciativas disponibles</h3>
              <p className="text-slate-300">Selecciona una alianza específica para ver las iniciativas disponibles</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {filteredInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-slate-600 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-500 group hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                      {initiative.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{initiative.title}</h3>
                  <p className="text-slate-200 text-base mb-6 leading-relaxed">{initiative.description}</p>
                  
                  {/* Información de la iniciativa */}
                  <div className="mb-6 p-4 bg-slate-500 rounded-xl border border-slate-400">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-orange-400">Tipo:</span>
                        <div className="mt-1">
                          <span className={`inline-block text-xs px-3 py-1 rounded-full ml-2 max-w-full truncate ${getInitiativeTypeColor(initiative.initiativeType)}`} title={getInitiativeTypeText(initiative.initiativeType)}>
                            {getInitiativeTypeText(initiative.initiativeType)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-orange-400">Fase:</span>
                        <div className="mt-1">
                          <span className={`inline-block text-xs px-3 py-1 rounded-full ml-2 max-w-full truncate ${getPhaseColor(initiative.phase)}`} title={getPhaseText(initiative.phase)}>
                            {getPhaseText(initiative.phase)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-orange-400">Responsable:</span>
                        <p className="text-sm text-white mt-1">{initiative.owner}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-orange-400">Tamaño:</span>
                        <p className="text-sm text-white mt-1">{initiative.size}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stakeholders */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Stakeholders:</h4>
                    <div className="flex flex-wrap gap-2">
                      {initiative.stakeholders.slice(0, 3).map((stakeholder, index) => (
                        <span key={index} className="text-xs bg-slate-500 text-white px-2 py-1 rounded-full">
                          {stakeholder}
                        </span>
                      ))}
                      {initiative.stakeholders.length > 3 && (
                        <span className="text-xs bg-slate-500 text-white px-2 py-1 rounded-full">
                          +{initiative.stakeholders.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Métricas de impacto */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Métricas de Impacto:</h4>
                    <ul className="space-y-1">
                      {initiative.impactMetrics.slice(0, 2).map((metric, index) => (
                        <li key={index} className="text-xs text-slate-200 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-medium">
                      {new Date(initiative.lastUpdated).toLocaleDateString('es-ES')}
                    </span>
                    <a
                      href={initiative.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver iniciativa
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Operativa 2024 */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Operativa 2024
          </h2>
          
          <div className="bg-slate-600 rounded-2xl shadow-lg p-8 border border-slate-500">
            <div className="grid gap-6">
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">Q1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Lanzamiento de Iniciativas</h3>
                  <p className="text-slate-200 text-base">Definición y aprobación de proyectos estratégicos</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-orange-400">Enero - Marzo</p>
                  <p className="text-sm text-slate-300">Completado</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">Q2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Implementación</h3>
                  <p className="text-slate-200 text-base">Ejecución de iniciativas aprobadas</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-blue-400">Abril - Junio</p>
                  <p className="text-sm text-slate-300">En progreso</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">Q3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Evaluación</h3>
                  <p className="text-slate-200 text-base">Revisión de resultados y ajustes</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-green-400">Julio - Septiembre</p>
                  <p className="text-sm text-slate-300">Pendiente</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-slate-500 rounded-xl border border-slate-400">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white font-semibold mr-6">
                  <span className="text-lg">Q4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">Planificación 2025</h3>
                  <p className="text-slate-200 text-base">Definición de nuevas iniciativas</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium text-purple-400">Octubre - Diciembre</p>
                  <p className="text-sm text-slate-300">Pendiente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ¿Tienes una nueva iniciativa?
            </h2>
            <p className={`mb-6 opacity-90 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Contacta con el equipo estratégico para evaluar y aprobar nuevas iniciativas
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Proponer iniciativa
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
