import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useFilteredData } from '../../hooks/useFilteredData';

/**
 * Props para el componente OurAlliance
 */
interface OurAllianceProps {}

/**
 * Página principal NUESTRA ALIANZA
 * Muestra información básica, protocolos, UEP, organigrama y directorio
 * Utiliza useResponsive y filtrado por alianzas
 * 
 * @param {OurAllianceProps} props - Props del componente
 * @returns {React.FC} Componente de página OurAlliance
 */
export const OurAlliance: React.FC<OurAllianceProps> = () => {
  const { isMobile, isTablet } = useResponsive();
  const { 
    getDocumentsByAllianceFiltered, 
    getContactsByAllianceFiltered, 
    getFilterIndicator 
  } = useFilteredData();

  const filteredDocuments = getDocumentsByAllianceFiltered();
  const filteredContacts = getContactsByAllianceFiltered();

  return (
    <div className="bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="relative mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <h1 className={`font-bold text-white mb-6 tracking-tight ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
              Impulsamos la <span className="text-orange-400">educación virtual</span>
            </h1>
            <p className={`text-white/90 max-w-3xl mx-auto leading-relaxed ${isMobile ? 'text-lg' : 'text-xl'}`}>
              En esta plataforma digital podrás conectar con tus compañeros de trabajo, obtener información importante sobre la empresa, tu bienestar y agilizar procesos administrativos y corporativos.
            </p>
            
            {/* Indicador de filtro */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">{getFilterIndicator()}</span>
            </div>
          </div>
        </header>

        {/* Documentos y Protocolos */}
        <section className="mb-20">
          <h2 className={`font-bold text-white mb-8 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Documentos y Protocolos
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
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-300 font-medium">
                    {new Date(doc.lastUpdated).toLocaleDateString('es-ES')}
                  </span>
                  {doc.size && (
                    <span className="text-xs text-slate-400 bg-slate-500 px-2 py-1 rounded-full">
                      {doc.size}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-300 bg-slate-500 px-2 py-1 rounded-full">
                    {doc.owner}
                  </span>
                  <span className="text-xs text-slate-300 bg-slate-500 px-2 py-1 rounded-full">
                    {doc.accessLevel}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs text-slate-400 bg-slate-500 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
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

        {/* Directorio de Contactos */}
        <section className="mb-12">
          <h2 className={`font-bold text-white mb-6 text-center ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Directorio de Contactos
          </h2>
          
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="bg-slate-600 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-slate-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                    <p className="text-sm text-slate-200">{contact.position}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-200">
                    <svg className="w-4 h-4 mr-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    {contact.email}
                  </div>
                  <div className="flex items-center text-sm text-slate-200">
                    <svg className="w-4 h-4 mr-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {contact.phone}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 bg-slate-500 px-2 py-1 rounded-full">
                    {contact.department}
                  </span>
                  <span className="text-xs text-orange-200 bg-orange-900/30 px-2 py-1 rounded-full">
                    {contact.alliance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ¿Necesitas más información?
            </h2>
            <p className={`mb-6 opacity-90 ${isMobile ? 'text-base' : 'text-lg'}`}>
              Explora los otros módulos para encontrar toda la información disponible sobre la alianza
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorar módulos
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
