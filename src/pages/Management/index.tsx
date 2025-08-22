import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useFilteredData } from '../../hooks/useFilteredData';
import { SmartSearch } from '../../components';

/**
 * Props para el componente Management
 */
interface ManagementProps {}

/**
 * Página del módulo GESTIÓN
 * Muestra tableros PMI, calendarios y métricas de gestión
 * Utiliza useResponsive y filtrado por alianzas
 * 
 * @param {ManagementProps} props - Props del componente
 * @returns {React.FC} Componente de página Management
 */
export const Management: React.FC<ManagementProps> = () => {
  const { isMobile, isTablet } = useResponsive();
  const { getManagementDataFiltered, getFilterIndicator } = useFilteredData();

  const filteredDocuments = getManagementDataFiltered();

  return (
    <div className="bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="relative mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90 rounded-3xl overflow-hidden">
            {/* Fallback gradient si la imagen no carga */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-slate-800/50 to-blue-900/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
          </div>
          
          {/* Content */}
          <div className={`relative z-10 text-center py-20 ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
            <h1 className={`font-bold text-white mb-6 tracking-tight ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
              GESTIÓN <span className="text-orange-400">OPERATIVA</span>
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 ${isMobile ? 'text-lg' : 'text-xl'}`}>
              Tableros de control, calendarios y métricas para la gestión eficiente de proyectos
            </p>
            
            {/* Buscador inteligente */}
            <div className="mb-8">
              <SmartSearch placeholder="Buscar tableros PMI, calendarios, métricas..." />
            </div>
            
            {/* Indicador de filtro */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">{getFilterIndicator()}</span>
            </div>
          </div>
        </header>

        {/* Tableros PMI */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Tableros PMI
          </h2>
          
          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-slate-600 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-500 group hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {doc.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{doc.title}</h3>
                <p className="text-slate-200 text-base mb-6 leading-relaxed">{doc.description}</p>
                
                {/* Información de gestión */}
                <div className="mb-6 p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-orange-400">Tipo de Proceso:</span>
                      <div className="mt-1">
                        <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-900/30 text-blue-200 max-w-full truncate" title={doc.processType}>
                          {doc.processType}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Departamento:</span>
                      <div className="mt-1">
                        <span className="inline-block text-xs px-3 py-1 rounded-full bg-green-900/30 text-green-200 max-w-full truncate" title={doc.responsibleDepartment}>
                          {doc.responsibleDepartment}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Frecuencia de Revisión:</span>
                      <p className="text-sm text-white mt-1">{doc.reviewFrequency}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-400">Requisitos de Cumplimiento:</span>
                      <p className="text-sm text-white mt-1">{doc.complianceRequirements.length} requisitos</p>
                    </div>
                  </div>
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
                    Ver tablero
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendarios */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Calendarios
          </h2>
          
          <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-2'}`}>
            <div className="bg-slate-600 rounded-2xl shadow-lg p-8 border border-slate-500">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Calendario Académico</h3>
                  <p className="text-slate-200 text-base">Actividades y eventos académicos</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Inicio de Semestre</h4>
                    <p className="text-slate-300 text-xs">Marzo 4, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Evaluaciones</h4>
                    <p className="text-slate-300 text-xs">Abril 15-19, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Fin de Semestre</h4>
                    <p className="text-slate-300 text-xs">Julio 12, 2024</p>
                  </div>
                </div>
              </div>
              
              <a href="#" className="inline-block mt-6 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">
                Ver calendario completo →
              </a>
            </div>
            
            <div className="bg-slate-600 rounded-2xl shadow-lg p-8 border border-slate-500">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Calendario Operacional</h3>
                  <p className="text-slate-200 text-base">Reuniones y actividades operativas</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Reunión Ejecutiva</h4>
                    <p className="text-slate-300 text-xs">Cada lunes, 9:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Revisión de Proyectos</h4>
                    <p className="text-slate-300 text-xs">Cada miércoles, 2:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-slate-500 rounded-xl border border-slate-400">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Reporte Mensual</h4>
                    <p className="text-slate-300 text-xs">Primer día del mes</p>
                  </div>
                </div>
              </div>
              
              <a href="#" className="inline-block mt-6 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">
                Ver calendario completo →
              </a>
            </div>
          </div>
        </section>

        {/* Métricas de Gestión */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Métricas de Gestión
          </h2>
          
          <div className="bg-slate-600 rounded-2xl shadow-lg p-8 border border-slate-500">
            <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'}`}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proyectos Activos</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">24</p>
                <p className="text-slate-200 text-base leading-relaxed">En ejecución actual</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tiempo Promedio</h3>
                <p className="text-3xl font-bold text-blue-400 mb-2">4.2</p>
                <p className="text-slate-200 text-base leading-relaxed">Meses por proyecto</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Eficiencia</h3>
                <p className="text-3xl font-bold text-orange-400 mb-2">87%</p>
                <p className="text-slate-200 text-base leading-relaxed">Cumplimiento de metas</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Equipos</h3>
                <p className="text-3xl font-bold text-purple-400 mb-2">12</p>
                <p className="text-slate-200 text-base leading-relaxed">Equipos activos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ¿Necesitas acceso a un tablero?
            </h2>
            <p className={`mb-6 opacity-90 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Contacta con el equipo de gestión para obtener permisos de acceso
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar acceso
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
