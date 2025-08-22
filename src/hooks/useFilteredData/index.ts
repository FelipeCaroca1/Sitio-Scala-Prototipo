
import { useAllianceContext } from '../../context/useAllianceContext';
import {
  getDocumentsByAlliance,
  getContactsByAlliance,
  getProjectsByAlliance,
  getStatsByAlliance,
  getGovernanceDataByAlliance,
  getPlanningDataByAlliance,
  getManagementDataByAlliance,
  getInitiativesDataByAlliance
} from '../../mocks';

/**
 * Hook personalizado para filtrar datos según la alianza seleccionada
 * Proporciona funciones de filtrado para diferentes tipos de contenido
 */
export const useFilteredData = () => {
  const { selectedAlliance } = useAllianceContext();

  // Función para filtrar documentos generales
  const filterDocuments = (data: any[]) => {
    if (!selectedAlliance) {
      return data; // Si no hay alianza seleccionada, mostrar todos
    }
    return data.filter(item => item.alliance === selectedAlliance.code);
  };

  // Función para filtrar contactos
  const filterContacts = (data: any[]) => {
    if (!selectedAlliance) {
      return data; // Si no hay alianza seleccionada, mostrar todos
    }
    return data.filter(item => item.alliance === selectedAlliance.code);
  };

  // Función para filtrar proyectos
  const filterProjects = (data: any[]) => {
    if (!selectedAlliance) {
      return data; // Si no hay alianza seleccionada, mostrar todos
    }
    return data.filter(item => item.alliance === selectedAlliance.code);
  };

  // Función para obtener documentos de alianza específica
  const getDocumentsByAllianceFiltered = () => {
    const result = getDocumentsByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener contactos de alianza específica
  const getContactsByAllianceFiltered = () => {
    const result = getContactsByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener proyectos de alianza específica
  const getProjectsByAllianceFiltered = () => {
    const result = getProjectsByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener datos de gobernanza filtrados
  const getGovernanceDataFiltered = () => {
    const result = getGovernanceDataByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener datos de planeación filtrados
  const getPlanningDataFiltered = () => {
    const result = getPlanningDataByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener datos de gestión filtrados
  const getManagementDataFiltered = () => {
    const result = getManagementDataByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener datos de iniciativas filtrados
  const getInitiativesDataFiltered = () => {
    const result = getInitiativesDataByAlliance(selectedAlliance?.code || null);
    return result;
  };

  // Función para obtener estadísticas filtradas
  const getStatsFiltered = () => {
    return getStatsByAlliance(selectedAlliance?.code || null);
  };

  // Indicador de filtro actual
  const getFilterIndicator = () => {
    if (!selectedAlliance) {
      return 'Mostrando todas las alianzas';
    }
    return `Filtrando por: ${selectedAlliance.name}`;
  };

  return {
    // Funciones de filtrado genéricas
    filterDocuments,
    filterContacts,
    filterProjects,
    
    // Funciones específicas por módulo
    getDocumentsByAllianceFiltered,
    getContactsByAllianceFiltered,
    getProjectsByAllianceFiltered,
    getGovernanceDataFiltered,
    getPlanningDataFiltered,
    getManagementDataFiltered,
    getInitiativesDataFiltered,
    
    // Estadísticas
    getStatsFiltered,
    
    // Indicador de filtro
    getFilterIndicator,
    
    // Alianza seleccionada
    selectedAlliance
  };
};
