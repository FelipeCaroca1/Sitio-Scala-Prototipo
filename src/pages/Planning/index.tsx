import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useFilteredData } from '../../hooks/useFilteredData';
import { SmartSearch } from '../../components';

/**
 * Props para el componente Planning
 */
interface PlanningProps {}

/**
 * Página del módulo PLANEACIÓN
 * Muestra presupuestos, programación y estudios de viabilidad
 * Utiliza useResponsive y filtrado por alianzas
 * 
 * @param {PlanningProps} props - Props del componente
 * @returns {React.FC} Componente de página Planning
 */
export const Planning: React.FC<PlanningProps> = () => {
  const { isMobile, isTablet, isVerySmallMobile } = useResponsive();
  const { getPlanningDataFiltered, getFilterIndicator } = useFilteredData();

  const filteredDocuments = getPlanningDataFiltered();

  return (
    <div className="bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="relative mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90 rounded-3xl overflow-hidden">
            {/* Fallback gradient si la imagen no carga */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-800/50 to-orange-900/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
          </div>
          
          {/* Content */}
          <div className={`relative z-10 text-center py-20 ${isVerySmallMobile ? 'px-2' : isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
            <h1 className={`font-bold text-white mb-6 tracking-tight ${isVerySmallMobile ? 'text-3xl' : isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
              PLANEACIÓN <span className="text-orange-400">ESTRATÉGICA</span>
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 ${isVerySmallMobile ? 'text-base' : isMobile ? 'text-lg' : 'text-xl'}`}>
              Planificación financiera, presupuestos y estrategias de desarrollo institucional
            </p>
            
            {/* Buscador inteligente */}
            <div className="mb-8">
              <SmartSearch placeholder="Buscar presupuestos, planes estratégicos..." />
            </div>
            
            {/* Indicador de filtro */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">{getFilterIndicator()}</span>
            </div>
          </div>
        </header>

        {/* Resumen Financiero */}
        <section className="mb-20">
          <div className="bg-slate-600 border border-slate-500 rounded-2xl overflow-hidden shadow-lg">
            <div className={`bg-slate-500 ${isVerySmallMobile ? 'px-3' : isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'} py-8`}>
              <h2 className={`font-light text-white mb-3 ${isVerySmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
                Resumen Financiero
              </h2>
              <p className={`text-slate-200 leading-relaxed ${isVerySmallMobile ? 'text-xs' : isMobile ? 'text-sm' : 'text-base'}`}>
                Estado actual de presupuestos y planificación financiera por alianza
              </p>
            </div>
            
            <div className={`${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
              <div className={`grid ${isVerySmallMobile ? 'gap-4' : isMobile ? 'gap-6' : 'gap-8'} ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Presupuesto Total</h3>
                  <p className="text-3xl font-bold text-orange-400 mb-2">$2.5M</p>
                  <p className="text-slate-200 text-base leading-relaxed">Presupuesto consolidado 2024</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Planes Aprobados</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">8</p>
                  <p className="text-slate-200 text-base leading-relaxed">Planes estratégicos activos</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Crecimiento</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">+15%</p>
                  <p className="text-slate-200 text-base leading-relaxed">Incremento vs. 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentos de Planeación */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isVerySmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Documentos de Planeación
          </h2>
          
          <div className={`grid ${isVerySmallMobile ? 'gap-4' : isMobile ? 'gap-6' : 'gap-8'} ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className={`bg-slate-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-500 group hover:-translate-y-1 ${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
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
                
                {/* Información de planeación */}
                <div className="mb-6 p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-orange-400">Período de Planificación:</span>
                      <p className="text-sm text-white">{doc.planningPeriod}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Timeline:</span>
                      <p className="text-sm text-white">{doc.timeline}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Objetivos Estratégicos:</span>
                      <p className="text-sm text-white">{doc.strategicObjectives.length} objetivos</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Iniciativas Clave:</span>
                      <p className="text-sm text-white">{doc.keyInitiatives.length} iniciativas</p>
                    </div>
                  </div>
                </div>

                {/* Métricas de Éxito */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Métricas de Éxito:</h4>
                  <ul className="space-y-1">
                    {doc.successMetrics.slice(0, 3).map((metric, index) => (
                      <li key={index} className="text-xs text-slate-200 flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {metric}
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
                    Ver documento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cronograma de Proyectos */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isVerySmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Cronograma de Proyectos
          </h2>
          
          <div className={`bg-slate-600 rounded-2xl shadow-lg border border-slate-500 ${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
            <div className={`grid ${isVerySmallMobile ? 'gap-4' : 'gap-6'}`}>
              <div className={`flex items-center ${isVerySmallMobile ? 'p-3' : 'p-6'} bg-slate-500 rounded-xl border border-slate-400`}>
                <div className={`${isVerySmallMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-orange-500 rounded-xl flex items-center justify-center text-white font-semibold ${isVerySmallMobile ? 'mr-3' : 'mr-6'}`}>
                  <span className={`${isVerySmallMobile ? 'text-sm' : 'text-lg'}`}>Q1</span>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-white ${isVerySmallMobile ? 'text-base' : 'text-lg'}`}>Planeación Estratégica</h3>
                  <p className={`text-slate-200 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Definición de objetivos y presupuestos 2024</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium text-orange-400 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Enero - Marzo</p>
                  <p className={`text-slate-300 ${isVerySmallMobile ? 'text-xs' : 'text-sm'}`}>En progreso</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isVerySmallMobile ? 'p-3' : 'p-6'} bg-slate-500 rounded-xl border border-slate-400`}>
                <div className={`${isVerySmallMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-blue-500 rounded-xl flex items-center justify-center text-white font-semibold ${isVerySmallMobile ? 'mr-3' : 'mr-6'}`}>
                  <span className={`${isVerySmallMobile ? 'text-sm' : 'text-lg'}`}>Q2</span>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-white ${isVerySmallMobile ? 'text-base' : 'text-lg'}`}>Implementación</h3>
                  <p className={`text-slate-200 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Ejecución de planes aprobados</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium text-blue-400 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Abril - Junio</p>
                  <p className={`text-slate-300 ${isVerySmallMobile ? 'text-xs' : 'text-sm'}`}>Pendiente</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isVerySmallMobile ? 'p-3' : 'p-6'} bg-slate-500 rounded-xl border border-slate-400`}>
                <div className={`${isVerySmallMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-slate-400 rounded-xl flex items-center justify-center text-white font-semibold ${isVerySmallMobile ? 'mr-3' : 'mr-6'}`}>
                  <span className={`${isVerySmallMobile ? 'text-sm' : 'text-lg'}`}>Q3</span>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-white ${isVerySmallMobile ? 'text-base' : 'text-lg'}`}>Seguimiento</h3>
                  <p className={`text-slate-200 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Evaluación de progreso y ajustes</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium text-slate-400 ${isVerySmallMobile ? 'text-sm' : 'text-base'}`}>Julio - Septiembre</p>
                  <p className={`text-slate-300 ${isVerySmallMobile ? 'text-xs' : 'text-sm'}`}>Pendiente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indicadores de Progreso */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isVerySmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Indicadores de Progreso
          </h2>
          
          <div className={`grid ${isVerySmallMobile ? 'gap-4' : isMobile ? 'gap-6' : 'gap-8'} ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
            <div className={`bg-slate-600 rounded-2xl shadow-lg border border-slate-500 ${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
              <h3 className="text-xl font-bold text-white mb-4">Presupuesto Ejecutado</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200">Progreso</span>
                  <span className="text-orange-400 font-semibold">65%</span>
                </div>
                <div className="w-full bg-slate-500 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">$1.6M de $2.5M ejecutados</p>
            </div>
            
            <div className={`bg-slate-600 rounded-2xl shadow-lg border border-slate-500 ${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
              <h3 className="text-xl font-bold text-white mb-4">Planes Completados</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200">Estado</span>
                  <span className="text-green-400 font-semibold">8/12</span>
                </div>
                <div className="w-full bg-slate-500 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">67% de planes completados</p>
            </div>
            
            <div className={`bg-slate-600 rounded-2xl shadow-lg border border-slate-500 ${isVerySmallMobile ? 'p-4' : 'p-8'}`}>
              <h3 className="text-xl font-bold text-white mb-4">Eficiencia Presupuestaria</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200">Meta</span>
                  <span className="text-blue-400 font-semibold">95%</span>
                </div>
                <div className="w-full bg-slate-500 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">92% de eficiencia alcanzada</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className={`bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white ${isVerySmallMobile ? 'p-6' : 'p-8'}`}>
            <h2 className={`font-bold mb-4 ${isVerySmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ¿Necesitas revisar un presupuesto?
            </h2>
            <p className={`mb-6 opacity-90 ${isVerySmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-lg'}`}>
              Contacta con el equipo de finanzas para obtener más información
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contactar finanzas
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
