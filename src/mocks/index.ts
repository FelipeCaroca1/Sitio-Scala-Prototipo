/**
 * Exportaciones centralizadas de todos los datos mock
 * Organizados por módulo y alianza para filtrado dinámico
 */

// Datos principales de alianzas
export * from './allianceData';

// Datos específicos de módulos
export * from './moduleData';

// Re-exportar funciones principales para facilitar el uso
export {
  getDocumentsByAlliance,
  getContactsByAlliance,
  getProjectsByAlliance,
  getStatsByAlliance
} from './allianceData';

export {
  getGovernanceDataByAlliance,
  getPlanningDataByAlliance,
  getManagementDataByAlliance
} from './moduleData';
