/**
 * Datos mock para el prototipo de Scala Learning
 * Basado en la estructura del spreadsheet proporcionado
 */

export interface MockDocument {
  id: string;
  title: string;
  description: string;
  alliance: string | string[]; // Puede ser específico o para todas
  type: 'document' | 'link' | 'dashboard' | 'contact';
  url?: string;
  category: string;
  lastUpdated: string;
}

export interface MockContact {
  id: string;
  name: string;
  position: string;
  alliance: string;
  email: string;
  phone: string;
  department: string;
}

// Datos para el módulo NUESTRA ALIANZA
export const mockAllianceData: MockDocument[] = [
  {
    id: '1',
    title: 'Protocolos y permisos',
    description: 'Documentos de protocolos y permisos de la alianza',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/protocolos',
    category: 'Protocolos',
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Fichas, informes y Evaluaciones de capacidades en producción',
    description: 'Evaluaciones de capacidades y fichas de producción',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/evaluaciones',
    category: 'Evaluaciones',
    lastUpdated: '2024-01-20'
  },
  {
    id: '3',
    title: 'UEP - Unidad de Ejecución de Proyectos',
    description: 'Información sobre la UEP y sus proyectos',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/uep',
    category: 'UEP',
    lastUpdated: '2024-01-10'
  },
  {
    id: '4',
    title: 'Estructura organizacional del equipo de trabajo',
    description: 'Organigrama y estructura organizacional',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/organigrama',
    category: 'Organización',
    lastUpdated: '2024-01-05'
  }
];

// Datos para el módulo GOBERNANZA
export const mockGovernanceData: MockDocument[] = [
  {
    id: '5',
    title: 'Actas de comité de colaboración',
    description: 'Actas y minutas del comité de colaboración',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/actas-colaboracion',
    category: 'Actas',
    lastUpdated: '2024-01-18'
  },
  {
    id: '6',
    title: 'Actas de comité de dirección',
    description: 'Actas y minutas del comité de dirección',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/actas-direccion',
    category: 'Actas',
    lastUpdated: '2024-01-17'
  },
  {
    id: '7',
    title: 'Actas de comité de estrategia y comunicaciones',
    description: 'Actas del comité de estrategia y comunicaciones',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/actas-estrategia',
    category: 'Actas',
    lastUpdated: '2024-01-16'
  },
  {
    id: '8',
    title: 'Coordinación de los comités',
    description: 'Información sobre coordinación entre comités',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/coordinacion',
    category: 'Coordinación',
    lastUpdated: '2024-01-14'
  },
  {
    id: '9',
    title: 'Presentaciones de comités',
    description: 'Presentaciones y materiales de comités',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/presentaciones',
    category: 'Presentaciones',
    lastUpdated: '2024-01-13'
  }
];

// Datos para el módulo PLANEACIÓN
export const mockPlanningData: MockDocument[] = [
  {
    id: '10',
    title: 'Budget',
    description: 'Presupuestos y planificación financiera',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/budget',
    category: 'Presupuesto',
    lastUpdated: '2024-01-22'
  },
  {
    id: '11',
    title: 'Programación de servicios y/o productos de la alianza con su presupuesto',
    description: 'Programación detallada de servicios y productos',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/programacion',
    category: 'Programación',
    lastUpdated: '2024-01-21'
  },
  {
    id: '12',
    title: 'Estudios de viabilidad, factibilidad',
    description: 'Estudios de viabilidad y factibilidad de proyectos',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/estudios',
    category: 'Estudios',
    lastUpdated: '2024-01-19'
  },
  {
    id: '13',
    title: 'Aprobación de presupuesto por alianza',
    description: 'Procesos de aprobación presupuestaria por alianza',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/aprobacion',
    category: 'Aprobación',
    lastUpdated: '2024-01-18'
  }
];

// Datos para el módulo GESTIÓN
export const mockManagementData: MockDocument[] = [
  {
    id: '14',
    title: 'Tableros PMI Verano',
    description: 'Dashboard PMI para período de verano',
    alliance: ['KAPIT', 'KAPIT-EN', 'UNIR', 'UDD', 'CRESCAL', 'UP', 'UCES'],
    type: 'dashboard',
    url: 'https://app.powerbi.com/dashboards/verano',
    category: 'PMI Verano',
    lastUpdated: '2024-01-23'
  },
  {
    id: '15',
    title: 'Tableros PMI extraordinario',
    description: 'Dashboard PMI para casos extraordinarios',
    alliance: ['KAPIT', 'KAPIT-EN', 'UNIR', 'UDD', 'CRESCAL', 'UP', 'UCES'],
    type: 'dashboard',
    url: 'https://app.powerbi.com/dashboards/extraordinario',
    category: 'PMI Extraordinario',
    lastUpdated: '2024-01-22'
  },
  {
    id: '16',
    title: 'Tableros PMI gestión docente',
    description: 'Dashboard PMI para gestión docente',
    alliance: ['KAPIT', 'KAPIT-EN', 'UNIR', 'UDD', 'CRESCAL', 'UP', 'UCES'],
    type: 'dashboard',
    url: 'https://app.powerbi.com/dashboards/docente',
    category: 'PMI Docente',
    lastUpdated: '2024-01-21'
  },
  {
    id: '17',
    title: 'Tableros PMI experiencia',
    description: 'Dashboard PMI para experiencia del estudiante',
    alliance: ['KAPIT', 'KAPIT-EN', 'UNIR', 'UDD', 'CRESCAL', 'UP', 'UCES'],
    type: 'dashboard',
    url: 'https://app.powerbi.com/dashboards/experiencia',
    category: 'PMI Experiencia',
    lastUpdated: '2024-01-20'
  },
  {
    id: '18',
    title: 'Calendarios académicos de las alianzas',
    description: 'Calendarios académicos consolidados',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/calendarios-academicos',
    category: 'Calendarios',
    lastUpdated: '2024-01-19'
  },
  {
    id: '19',
    title: 'Calendarios operacionales',
    description: 'Calendarios operacionales por alianza',
    alliance: ['KAPIT', 'KAPIT-EN', 'UNIR', 'UDD', 'CRESCAL', 'UP', 'UCES'],
    type: 'link',
    url: 'https://drive.google.com/drive/folders/calendarios-operacionales',
    category: 'Calendarios',
    lastUpdated: '2024-01-18'
  }
];

// Datos para el módulo INICIATIVAS
export const mockInitiativesData: MockDocument[] = [
  {
    id: '20',
    title: 'Mapa plan',
    description: 'Mapa estratégico y plan de acción',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/mapa-plan',
    category: 'Planificación',
    lastUpdated: '2024-01-24'
  },
  {
    id: '21',
    title: 'Plan de transferencia de Operaciones en R&D 2025',
    description: 'Plan de transferencia de operaciones para 2025',
    alliance: 'all',
    type: 'link',
    url: 'https://drive.google.com/drive/folders/transferencia-rd-2025',
    category: 'Transferencia',
    lastUpdated: '2024-01-23'
  }
];

// Datos para el módulo GALERÍA
export const mockGalleryData = [
  {
    id: '22',
    title: 'Reunión de lanzamiento de la alianza',
    description: 'Fotos del evento de lanzamiento oficial',
    alliance: 'all',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    date: '2024-01-15',
    category: 'Eventos'
  },
  {
    id: '23',
    title: 'Workshop de capacitación KAPIT',
    description: 'Sesión de capacitación para equipo KAPIT',
    alliance: 'KAPIT',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
    date: '2024-01-20',
    category: 'Capacitación'
  },
  {
    id: '24',
    title: 'Presentación de resultados UNIR',
    description: 'Presentación de resultados del primer trimestre',
    alliance: 'UNIR',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    date: '2024-01-18',
    category: 'Presentaciones'
  },
  {
    id: '25',
    title: 'Equipo de trabajo UDD',
    description: 'Equipo de trabajo colaborando en proyectos',
    alliance: 'UDD',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    date: '2024-01-16',
    category: 'Equipo'
  }
];

// Contactos del directorio
export const mockContacts: MockContact[] = [
  {
    id: '1',
    name: 'Dr. María González',
    position: 'Directora de Alianzas',
    alliance: 'KAPIT',
    email: 'maria.gonzalez@kapit.edu',
    phone: '+56 2 2345 6789',
    department: 'Dirección General'
  },
  {
    id: '2',
    name: 'Prof. Carlos Rodríguez',
    position: 'Coordinador Académico',
    alliance: 'UNIR',
    email: 'carlos.rodriguez@unir.edu',
    phone: '+56 2 3456 7890',
    department: 'Académico'
  },
  {
    id: '3',
    name: 'Ing. Ana Silva',
    position: 'Gerente de Proyectos',
    alliance: 'UDD',
    email: 'ana.silva@udd.cl',
    phone: '+56 2 4567 8901',
    department: 'Gestión'
  },
  {
    id: '4',
    name: 'Dr. Roberto Méndez',
    position: 'Director de Investigación',
    alliance: 'CRESCAL',
    email: 'roberto.mendez@crescal.org',
    phone: '+56 2 5678 9012',
    department: 'Investigación'
  },
  {
    id: '5',
    name: 'Prof. Laura Torres',
    position: 'Coordinadora de Calidad',
    alliance: 'UP',
    email: 'laura.torres@up.edu',
    phone: '+56 2 6789 0123',
    department: 'Calidad'
  },
  {
    id: '6',
    name: 'Mg. Diego Herrera',
    position: 'Director de Innovación',
    alliance: 'UCES',
    email: 'diego.herrera@uces.edu.ar',
    phone: '+54 11 4567 8901',
    department: 'Innovación'
  }
];
