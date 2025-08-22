import { useState, useMemo, useCallback } from 'react';
import { useFilteredData } from '../useFilteredData';

/**
 * Resultado de búsqueda con información del contexto
 */
interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'initiative' | 'contact' | 'project' | 'governance' | 'planning' | 'management';
  alliance: string;
  url?: string;
  relevanceScore: number;
  matchedTerms: string[];
}

/**
 * Hook para búsqueda inteligente en todo el contenido
 * Busca por palabras clave en títulos, descripciones y categorías
 */
export const useSmartSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = useFilteredData();

  /**
   * Función para calcular la relevancia de un elemento
   */
  const calculateRelevance = useCallback((item: any, searchTerms: string[]): { score: number; matches: string[] } => {
    let score = 0;
    const matches: string[] = [];
    
    const searchableText = [
      item.title || '',
      item.description || '',
      item.category || '',
      item.processType || '',
      item.initiativeType || '',
      item.responsibleDepartment || '',
      item.owner || '',
      item.planningPeriod || '',
      ...(item.stakeholders || []),
      ...(item.impactMetrics || []),
      ...(item.strategicObjectives || []),
      ...(item.keyInitiatives || []),
      ...(item.successMetrics || [])
    ].join(' ').toLowerCase();

    searchTerms.forEach(term => {
      const termLower = term.toLowerCase();
      
      // Búsqueda exacta en título (peso alto)
      if ((item.title || '').toLowerCase().includes(termLower)) {
        score += 10;
        matches.push(term);
      }
      
      // Búsqueda exacta en descripción (peso medio)
      if ((item.description || '').toLowerCase().includes(termLower)) {
        score += 5;
        matches.push(term);
      }
      
      // Búsqueda exacta en categoría (peso medio)
      if ((item.category || '').toLowerCase().includes(termLower)) {
        score += 5;
        matches.push(term);
      }
      
      // Búsqueda general en todo el texto (peso bajo)
      if (searchableText.includes(termLower)) {
        score += 1;
        if (!matches.includes(term)) {
          matches.push(term);
        }
      }
    });

    return { score, matches };
  }, []);

  /**
   * Resultados de búsqueda filtrados y ordenados por relevancia
   */
  const searchResults = useMemo((): SearchResult[] => {
    if (!searchQuery.trim()) {
      return [];
    }

    const searchTerms = searchQuery.trim().split(/\s+/).filter(term => term.length > 1);
    if (searchTerms.length === 0) {
      return [];
    }

    const results: SearchResult[] = [];

    // Buscar en documentos generales
    const documents = filteredData.getDocumentsByAllianceFiltered();
    documents.forEach((doc: any) => {
      const { score, matches } = calculateRelevance(doc, searchTerms);
      if (score > 0) {
        results.push({
          id: `doc-${doc.id}`,
          title: doc.title,
          description: doc.description,
          category: doc.category,
          type: 'document',
          alliance: doc.alliance,
          url: doc.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en contactos
    const contacts = filteredData.getContactsByAllianceFiltered();
    contacts.forEach((contact: any) => {
      const { score, matches } = calculateRelevance(contact, searchTerms);
      if (score > 0) {
        results.push({
          id: `contact-${contact.id}`,
          title: contact.name,
          description: `${contact.position} - ${contact.department}`,
          category: 'Contacto',
          type: 'contact',
          alliance: contact.alliance,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en proyectos
    const projects = filteredData.getProjectsByAllianceFiltered();
    projects.forEach((project: any) => {
      const { score, matches } = calculateRelevance(project, searchTerms);
      if (score > 0) {
        results.push({
          id: `project-${project.id}`,
          title: project.title,
          description: project.description,
          category: project.category,
          type: 'project',
          alliance: project.alliance,
          url: project.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en datos de gobernanza
    const governanceData = filteredData.getGovernanceDataFiltered();
    governanceData.forEach((gov: any) => {
      const { score, matches } = calculateRelevance(gov, searchTerms);
      if (score > 0) {
        results.push({
          id: `gov-${gov.id}`,
          title: gov.title,
          description: gov.description,
          category: gov.category,
          type: 'governance',
          alliance: gov.alliance,
          url: gov.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en datos de planeación
    const planningData = filteredData.getPlanningDataFiltered();
    planningData.forEach((plan: any) => {
      const { score, matches } = calculateRelevance(plan, searchTerms);
      if (score > 0) {
        results.push({
          id: `plan-${plan.id}`,
          title: plan.title,
          description: plan.description,
          category: plan.category,
          type: 'planning',
          alliance: plan.alliance,
          url: plan.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en datos de gestión
    const managementData = filteredData.getManagementDataFiltered();
    managementData.forEach((mgmt: any) => {
      const { score, matches } = calculateRelevance(mgmt, searchTerms);
      if (score > 0) {
        results.push({
          id: `mgmt-${mgmt.id}`,
          title: mgmt.title,
          description: mgmt.description,
          category: mgmt.category,
          type: 'management',
          alliance: mgmt.alliance,
          url: mgmt.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Buscar en iniciativas
    const initiativesData = filteredData.getInitiativesDataFiltered();
    initiativesData.forEach((init: any) => {
      const { score, matches } = calculateRelevance(init, searchTerms);
      if (score > 0) {
        results.push({
          id: `init-${init.id}`,
          title: init.title,
          description: init.description,
          category: init.category,
          type: 'initiative',
          alliance: init.alliance,
          url: init.url,
          relevanceScore: score,
          matchedTerms: matches
        });
      }
    });

    // Ordenar por relevancia y limitar resultados
    return results
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 20); // Máximo 20 resultados
  }, [searchQuery, filteredData, calculateRelevance]);

  /**
   * Función para actualizar la consulta de búsqueda
   */
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  /**
   * Función para limpiar la búsqueda
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    searchQuery,
    searchResults,
    handleSearch,
    clearSearch,
    hasResults: searchResults.length > 0,
    resultCount: searchResults.length
  };
};

export default useSmartSearch;
