/**
 * Datos mock realistas para cada alianza
 * Simula documentos de Google Drive desordenados pero organizados por alianza
 */

export interface AllianceDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'presentation' | 'spreadsheet' | 'folder' | 'dashboard';
  url: string;
  lastUpdated: string;
  alliance: string;
  tags: string[];
  size?: string;
  owner: string;
  accessLevel: 'view' | 'edit' | 'admin';
}

export interface AllianceContact {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  department: string;
  alliance: string;
  avatar?: string;
  isActive: boolean;
}

export interface AllianceProject {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  alliance: string;
  startDate: string;
  endDate?: string;
  progress: number;
  budget: number;
  team: string[];
  documents: string[];
}

// Datos por alianza - simulando la realidad de Google Drive desordenado
export const allianceData = {
  KAPIT: {
    documents: [
      {
        id: 'kap-001',
        title: 'Protocolo de Colaboración KAPIT 2024',
        description: 'Documento base que establece las reglas de colaboración entre instituciones KAPIT',
        category: 'Protocolos',
        type: 'document',
        url: 'https://drive.google.com/file/d/1abc123def456ghi789/view',
        lastUpdated: '2024-01-15',
        alliance: 'KAPIT',
        tags: ['protocolo', 'colaboración', '2024'],
        size: '2.3 MB',
        owner: 'Dr. María González',
        accessLevel: 'view'
      },
      {
        id: 'kap-002',
        title: 'Presentación Estratégica Q1 2024',
        description: 'Slides de la reunión estratégica del primer trimestre con objetivos KAPIT',
        category: 'Presentaciones',
        type: 'presentation',
        url: 'https://drive.google.com/presentation/d/2def456ghi789jkl012/edit',
        lastUpdated: '2024-01-20',
        alliance: 'KAPIT',
        tags: ['estrategia', 'Q1', 'presentación'],
        size: '15.7 MB',
        owner: 'Lic. Carlos Ruiz',
        accessLevel: 'view'
      },
      {
        id: 'kap-003',
        title: 'Presupuesto KAPIT 2024-2025',
        description: 'Planificación financiera detallada para el período 2024-2025',
        category: 'Finanzas',
        type: 'spreadsheet',
        url: 'https://drive.google.com/spreadsheets/d/3ghi789jkl012mno345/edit',
        lastUpdated: '2024-01-10',
        alliance: 'KAPIT',
        tags: ['presupuesto', 'finanzas', '2024-2025'],
        size: '856 KB',
        owner: 'CPA Ana Martínez',
        accessLevel: 'edit'
      },
      {
        id: 'kap-004',
        title: 'Dashboard de Proyectos KAPIT',
        description: 'Tablero en tiempo real con el estado de todos los proyectos activos',
        category: 'Dashboards',
        type: 'dashboard',
        url: 'https://datastudio.google.com/reporting/4jkl012mno345pqr678',
        lastUpdated: '2024-01-25',
        alliance: 'KAPIT',
        tags: ['dashboard', 'proyectos', 'tiempo-real'],
        owner: 'Ing. Roberto Silva',
        accessLevel: 'view'
      }
    ],
    contacts: [
      {
        id: 'kap-con-001',
        name: 'Dr. María González',
        position: 'Directora Ejecutiva',
        email: 'maria.gonzalez@kapit.edu',
        phone: '+56 2 2345 6789',
        department: 'Dirección General',
        alliance: 'KAPIT',
        isActive: true
      },
      {
        id: 'kap-con-002',
        name: 'Lic. Carlos Ruiz',
        position: 'Coordinador de Proyectos',
        email: 'carlos.ruiz@kapit.edu',
        phone: '+56 2 2345 6790',
        department: 'Gestión de Proyectos',
        alliance: 'KAPIT',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'kap-proj-001',
        name: 'Plataforma de Aprendizaje Virtual',
        description: 'Desarrollo de una plataforma integrada para educación virtual',
        status: 'active',
        alliance: 'KAPIT',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        progress: 65,
        budget: 150000,
        team: ['Dr. María González', 'Lic. Carlos Ruiz', 'Ing. Roberto Silva'],
        documents: ['kap-001', 'kap-002']
      }
    ]
  },

  UNIR: {
    documents: [
      {
        id: 'unir-001',
        title: 'Memorándum de Entendimiento UNIR',
        description: 'Acuerdo base de colaboración entre instituciones UNIR',
        category: 'Acuerdos',
        type: 'document',
        url: 'https://drive.google.com/file/d/5mno345pqr678stu901/view',
        lastUpdated: '2024-01-18',
        alliance: 'UNIR',
        tags: ['memorándum', 'acuerdo', 'colaboración'],
        size: '1.8 MB',
        owner: 'Dr. Juan Pérez',
        accessLevel: 'view'
      },
      {
        id: 'unir-002',
        title: 'Calendario Académico UNIR 2024',
        description: 'Cronograma completo de actividades académicas del año',
        category: 'Académico',
        type: 'spreadsheet',
        url: 'https://drive.google.com/spreadsheets/d/6pqr678stu901vwx234/edit',
        lastUpdated: '2024-01-22',
        alliance: 'UNIR',
        tags: ['calendario', 'académico', '2024'],
        size: '1.2 MB',
        owner: 'Prof. Laura Torres',
        accessLevel: 'view'
      },
      {
        id: 'unir-003',
        title: 'Reporte de Indicadores UNIR',
        description: 'Métricas de rendimiento y KPIs institucionales',
        category: 'Reportes',
        type: 'document',
        url: 'https://drive.google.com/file/d/7stu901vwx234yza567/view',
        lastUpdated: '2024-01-24',
        alliance: 'UNIR',
        tags: ['reporte', 'indicadores', 'KPIs'],
        size: '3.1 MB',
        owner: 'Dr. Juan Pérez',
        accessLevel: 'edit'
      }
    ],
    contacts: [
      {
        id: 'unir-con-001',
        name: 'Dr. Juan Pérez',
        position: 'Rector',
        email: 'juan.perez@unir.edu',
        phone: '+56 2 3456 7890',
        department: 'Rectoría',
        alliance: 'UNIR',
        isActive: true
      },
      {
        id: 'unir-con-002',
        name: 'Prof. Laura Torres',
        position: 'Decana Académica',
        email: 'laura.torres@unir.edu',
        phone: '+56 2 3456 7891',
        department: 'Académica',
        alliance: 'UNIR',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'unir-proj-001',
        name: 'Programa de Intercambio Estudiantil',
        description: 'Iniciativa para promover movilidad estudiantil entre instituciones',
        status: 'active',
        alliance: 'UNIR',
        startDate: '2024-02-01',
        endDate: '2024-11-30',
        progress: 40,
        budget: 80000,
        team: ['Dr. Juan Pérez', 'Prof. Laura Torres'],
        documents: ['unir-001', 'unir-002']
      }
    ]
  },

  UDD: {
    documents: [
      {
        id: 'udd-001',
        title: 'Manual de Procedimientos UDD',
        description: 'Guía completa de procesos y procedimientos institucionales',
        category: 'Procedimientos',
        type: 'document',
        url: 'https://drive.google.com/file/d/8vwx234yza567bcd890/view',
        lastUpdated: '2024-01-16',
        alliance: 'UDD',
        tags: ['manual', 'procedimientos', 'procesos'],
        size: '4.5 MB',
        owner: 'Ing. Patricia López',
        accessLevel: 'view'
      },
      {
        id: 'udd-002',
        title: 'Plan de Desarrollo UDD 2024-2028',
        description: 'Estrategia de crecimiento y desarrollo institucional',
        category: 'Planificación',
        type: 'presentation',
        url: 'https://drive.google.com/presentation/d/9yza567bcd890efg123/edit',
        lastUpdated: '2024-01-19',
        alliance: 'UDD',
        tags: ['plan', 'desarrollo', 'estrategia'],
        size: '8.9 MB',
        owner: 'Dr. Roberto Mendoza',
        accessLevel: 'view'
      },
      {
        id: 'udd-003',
        title: 'Base de Datos de Investigación',
        description: 'Repositorio de proyectos de investigación activos',
        category: 'Investigación',
        type: 'spreadsheet',
        url: 'https://drive.google.com/spreadsheets/d/0bcd890efg123hij456/edit',
        lastUpdated: '2024-01-23',
        alliance: 'UDD',
        tags: ['investigación', 'base-datos', 'proyectos'],
        size: '2.1 MB',
        owner: 'Dr. Roberto Mendoza',
        accessLevel: 'edit'
      }
    ],
    contacts: [
      {
        id: 'udd-con-001',
        name: 'Dr. Roberto Mendoza',
        position: 'Vicerrector de Investigación',
        email: 'roberto.mendoza@udd.cl',
        phone: '+56 2 4567 8901',
        department: 'Investigación',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-002',
        name: 'Ing. Patricia López',
        position: 'Directora de Operaciones',
        email: 'patricia.lopez@udd.cl',
        phone: '+56 2 4567 8902',
        department: 'Operaciones',
        alliance: 'UDD',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'udd-proj-001',
        name: 'Centro de Innovación Tecnológica',
        description: 'Creación de un centro para fomentar la innovación y emprendimiento',
        status: 'active',
        alliance: 'UDD',
        startDate: '2024-01-15',
        endDate: '2025-06-30',
        progress: 25,
        budget: 250000,
        team: ['Dr. Roberto Mendoza', 'Ing. Patricia López'],
        documents: ['udd-001', 'udd-002']
      }
    ]
  },

  Crescal: {
    documents: [
      {
        id: 'cres-001',
        title: 'Estudio de Mercado Educativo',
        description: 'Análisis del panorama educativo actual y tendencias futuras',
        category: 'Estudios',
        type: 'document',
        url: 'https://drive.google.com/file/d/1efg123hij456klm789/view',
        lastUpdated: '2024-01-17',
        alliance: 'Crescal',
        tags: ['estudio', 'mercado', 'educativo'],
        size: '6.7 MB',
        owner: 'Dra. Carmen Vega',
        accessLevel: 'view'
      },
      {
        id: 'cres-002',
        title: 'Propuesta de Colaboración Internacional',
        description: 'Plan para establecer alianzas con instituciones extranjeras',
        category: 'Colaboración',
        type: 'presentation',
        url: 'https://drive.google.com/presentation/d/2hij456klm789nop012/edit',
        lastUpdated: '2024-01-21',
        alliance: 'Crescal',
        tags: ['colaboración', 'internacional', 'alianzas'],
        size: '12.3 MB',
        owner: 'Lic. Fernando Castro',
        accessLevel: 'view'
      }
    ],
    contacts: [
      {
        id: 'cres-con-001',
        name: 'Dra. Carmen Vega',
        position: 'Directora de Investigación',
        email: 'carmen.vega@crescal.org',
        phone: '+56 2 5678 9012',
        department: 'Investigación',
        alliance: 'Crescal',
        isActive: true
      },
      {
        id: 'cres-con-002',
        name: 'Lic. Fernando Castro',
        position: 'Coordinador de Relaciones Internacionales',
        email: 'fernando.castro@crescal.org',
        phone: '+56 2 5678 9013',
        department: 'Relaciones Internacionales',
        alliance: 'Crescal',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'cres-proj-001',
        name: 'Red de Colaboración Latinoamericana',
        description: 'Creación de una red de instituciones educativas en Latinoamérica',
        status: 'active',
        alliance: 'Crescal',
        startDate: '2024-02-15',
        endDate: '2024-12-31',
        progress: 30,
        budget: 120000,
        team: ['Dra. Carmen Vega', 'Lic. Fernando Castro'],
        documents: ['cres-001', 'cres-002']
      }
    ]
  },

  UP: {
    documents: [
      {
        id: 'up-001',
        title: 'Reglamento de Estudiantes UP',
        description: 'Normativas y reglas para la comunidad estudiantil',
        category: 'Reglamentos',
        type: 'document',
        url: 'https://drive.google.com/file/d/3klm789nop012qrs345/view',
        lastUpdated: '2024-01-14',
        alliance: 'UP',
        tags: ['reglamento', 'estudiantes', 'normativas'],
        size: '3.8 MB',
        owner: 'Prof. Diego Herrera',
        accessLevel: 'view'
      },
      {
        id: 'up-002',
        title: 'Catálogo de Cursos UP 2024',
        description: 'Oferta académica completa para el año 2024',
        category: 'Académico',
        type: 'spreadsheet',
        url: 'https://drive.google.com/spreadsheets/d/4nop012qrs345tuv678/edit',
        lastUpdated: '2024-01-25',
        alliance: 'UP',
        tags: ['cursos', 'catálogo', '2024'],
        size: '1.5 MB',
        owner: 'Prof. Diego Herrera',
        accessLevel: 'view'
      }
    ],
    contacts: [
      {
        id: 'up-con-001',
        name: 'Prof. Diego Herrera',
        position: 'Director Académico',
        email: 'diego.herrera@up.edu',
        phone: '+56 2 6789 0123',
        department: 'Académica',
        alliance: 'UP',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'up-proj-001',
        name: 'Modernización de Infraestructura Digital',
        description: 'Actualización de sistemas y plataformas tecnológicas',
        status: 'active',
        alliance: 'UP',
        startDate: '2024-01-01',
        endDate: '2024-08-31',
        progress: 55,
        budget: 180000,
        team: ['Prof. Diego Herrera'],
        documents: ['up-001', 'up-002']
      }
    ]
  },

  UCES: {
    documents: [
      {
        id: 'uces-001',
        title: 'Plan de Calidad UCES',
        description: 'Estrategia para asegurar la calidad educativa',
        category: 'Calidad',
        type: 'document',
        url: 'https://drive.google.com/file/d/5qrs345tuv678wxy901/view',
        lastUpdated: '2024-01-20',
        alliance: 'UCES',
        tags: ['calidad', 'educativa', 'estrategia'],
        size: '2.9 MB',
        owner: 'Dra. Isabel Morales',
        accessLevel: 'view'
      },
      {
        id: 'uces-002',
        title: 'Reporte de Acreditación UCES',
        description: 'Estado actual del proceso de acreditación institucional',
        category: 'Acreditación',
        type: 'document',
        url: 'https://drive.google.com/file/d/6tuv678wxy901zab234/view',
        lastUpdated: '2024-01-26',
        alliance: 'UCES',
        tags: ['acreditación', 'institucional', 'reporte'],
        size: '4.2 MB',
        owner: 'Dra. Isabel Morales',
        accessLevel: 'edit'
      }
    ],
    contacts: [
      {
        id: 'uces-con-001',
        name: 'Dra. Isabel Morales',
        position: 'Directora de Calidad',
        email: 'isabel.morales@uces.edu',
        phone: '+56 2 7890 1234',
        department: 'Calidad',
        alliance: 'UCES',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'uces-proj-001',
        name: 'Sistema de Gestión de Calidad',
        description: 'Implementación de un sistema integral de gestión de calidad',
        status: 'active',
        alliance: 'UCES',
        startDate: '2024-01-10',
        endDate: '2024-10-31',
        progress: 45,
        budget: 95000,
        team: ['Dra. Isabel Morales'],
        documents: ['uces-001', 'uces-002']
      }
    ]
  }
};

// Función para obtener todos los documentos de una alianza específica
export const getDocumentsByAlliance = (alliance: string | null): AllianceDocument[] => {
  if (!alliance) {
    // Si no hay alianza seleccionada, devolver todos los documentos
    return Object.values(allianceData).flatMap(data => data.documents);
  }
  
  return allianceData[alliance as keyof typeof allianceData]?.documents || [];
};

// Función para obtener todos los contactos de una alianza específica
export const getContactsByAlliance = (alliance: string | null): AllianceContact[] => {
  if (!alliance) {
    // Si no hay alianza seleccionada, devolver todos los contactos
    return Object.values(allianceData).flatMap(data => data.contacts);
  }
  
  return allianceData[alliance as keyof typeof allianceData]?.contacts || [];
};

// Función para obtener todos los proyectos de una alianza específica
export const getProjectsByAlliance = (alliance: string | null): AllianceProject[] => {
  if (!alliance) {
    // Si no hay alianza seleccionada, devolver todos los proyectos
    return Object.values(allianceData).flatMap(data => data.projects);
  }
  
  return allianceData[alliance as keyof typeof allianceData]?.projects || [];
};

// Función para obtener estadísticas por alianza
export const getStatsByAlliance = (alliance: string | null) => {
  if (!alliance) {
    // Estadísticas generales
    const totalDocs = Object.values(allianceData).flatMap(data => data.documents).length;
    const totalContacts = Object.values(allianceData).flatMap(data => data.contacts).length;
    const totalProjects = Object.values(allianceData).flatMap(data => data.projects).length;
    
    return {
      documents: totalDocs,
      contacts: totalContacts,
      projects: totalProjects,
      alliances: Object.keys(allianceData).length
    };
  }
  
  const data = allianceData[alliance as keyof typeof allianceData];
  if (!data) return null;
  
  return {
    documents: data.documents.length,
    contacts: data.contacts.length,
    projects: data.projects.length,
    alliance: alliance
  };
};
