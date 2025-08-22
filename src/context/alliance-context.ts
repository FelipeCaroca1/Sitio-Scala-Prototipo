import { createContext } from 'react';

/**
 * Tipos para el contexto de Alianzas
 */
export interface Alliance {
  id: string;
  name: string;
  code: string;
  color: string;
}

export interface AllianceContextType {
  /** Alianza actualmente seleccionada */
  selectedAlliance: Alliance | null;
  /** Lista de todas las alianzas disponibles */
  alliances: Alliance[];
  /** Función para cambiar la alianza seleccionada */
  selectAlliance: (alliance: Alliance | null) => void;
  /** Función para obtener alianza por ID */
  getAllianceById: (id: string) => Alliance | undefined;
  /** Función para obtener alianza por código */
  getAllianceByCode: (code: string) => Alliance | undefined;
}

export interface AllianceProviderProps {
  children: React.ReactNode;
}

/**
 * Contexto para manejar el filtrado por alianzas
 * Permite filtrar toda la información según la alianza seleccionada
 */
export const AllianceContext = createContext<AllianceContextType | undefined>(undefined);
