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
  CENTRAL: {
    documents: [
      {
        id: 'cen-001',
        title: 'Protocolo de Colaboración Central 2024',
        description: 'Documento base que establece las reglas de colaboración entre instituciones Central',
        category: 'Protocolos',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/1abc123def456ghi789/view',
        lastUpdated: '2024-01-15',
        alliance: 'CENTRAL',
        tags: ['protocolo', 'colaboración', '2024'],
        size: '2.3 MB',
        owner: 'Dr. María González',
        accessLevel: 'view' as const
      },
      {
        id: 'cen-002',
        title: 'Presentación Estratégica Q1 2024',
        description: 'Slides de la reunión estratégica del primer trimestre con objetivos Central',
        category: 'Presentaciones',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/2def456ghi789jkl012/edit',
        lastUpdated: '2024-01-20',
        alliance: 'CENTRAL',
        tags: ['estrategia', 'Q1', 'presentación'],
        size: '15.7 MB',
        owner: 'Lic. Carlos Ruiz',
        accessLevel: 'view' as const
      },
      {
        id: 'cen-003',
        title: 'Manual de Procedimientos Administrativos',
        description: 'Guía completa de procesos administrativos y flujos de trabajo',
        category: 'Administración',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/cen-003/view',
        lastUpdated: '2024-01-25',
        alliance: 'CENTRAL',
        tags: ['administración', 'procedimientos', 'flujos'],
        size: '8.9 MB',
        owner: 'Lic. Patricia Morales',
        accessLevel: 'view' as const
      },
      {
        id: 'cen-004',
        title: 'Dashboard de Indicadores Financieros',
        description: 'Tablero interactivo con métricas financieras y presupuestarias',
        category: 'Finanzas',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/cen-004/view',
        lastUpdated: '2024-01-30',
        alliance: 'CENTRAL',
        tags: ['finanzas', 'indicadores', 'presupuesto'],
        size: '12.4 MB',
        owner: 'Lic. Roberto Silva',
        accessLevel: 'edit' as const
      },
      {
        id: 'cen-005',
        title: 'Plan de Desarrollo Institucional 2024-2026',
        description: 'Documento estratégico de desarrollo y crecimiento institucional',
        category: 'Estrategia',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/cen-005/view',
        lastUpdated: '2024-02-01',
        alliance: 'CENTRAL',
        tags: ['desarrollo', 'estrategia', 'crecimiento'],
        size: '5.6 MB',
        owner: 'Dr. María González',
        accessLevel: 'view' as const
      },
      {
        id: 'cen-006',
        title: 'Base de Datos de Recursos Humanos',
        description: 'Hoja de cálculo con información del personal y estructura organizacional',
        category: 'Recursos Humanos',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/cen-006/edit',
        lastUpdated: '2024-02-05',
        alliance: 'CENTRAL',
        tags: ['RRHH', 'personal', 'organización'],
        size: '3.1 MB',
        owner: 'Lic. Patricia Morales',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'cen-con-001',
        name: 'Dr. María González',
        position: 'Directora Ejecutiva',
        email: 'maria.gonzalez@central.edu',
        phone: '+56 2 2345 6789',
        department: 'Dirección General',
        alliance: 'CENTRAL',
        isActive: true
      },
      {
        id: 'cen-con-002',
        name: 'Lic. Carlos Ruiz',
        position: 'Director de Estrategia',
        email: 'carlos.ruiz@central.edu',
        phone: '+56 2 2345 6790',
        department: 'Estrategia',
        alliance: 'CENTRAL',
        isActive: true
      },
      {
        id: 'cen-con-003',
        name: 'Lic. Patricia Morales',
        position: 'Directora de Administración',
        email: 'patricia.morales@central.edu',
        phone: '+56 2 2345 6791',
        department: 'Administración',
        alliance: 'CENTRAL',
        isActive: true
      },
      {
        id: 'cen-con-004',
        name: 'Lic. Roberto Silva',
        position: 'Director Financiero',
        email: 'roberto.silva@central.edu',
        phone: '+56 2 2345 6792',
        department: 'Finanzas',
        alliance: 'CENTRAL',
        isActive: true
      },
      {
        id: 'cen-con-005',
        name: 'Dr. Carmen Vega',
        position: 'Directora Académica',
        email: 'carmen.vega@central.edu',
        phone: '+56 2 2345 6793',
        department: 'Académico',
        alliance: 'CENTRAL',
        isActive: true
      },
      {
        id: 'cen-con-006',
        name: 'Ing. Felipe Mendoza',
        position: 'Director de Tecnología',
        email: 'felipe.mendoza@central.edu',
        phone: '+56 2 2345 6794',
        department: 'Tecnología',
        alliance: 'CENTRAL',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'cen-proj-001',
        name: 'Plataforma de Aprendizaje Virtual',
        description: 'Desarrollo de una plataforma integrada para educación virtual',
        status: 'active' as const,
        alliance: 'CENTRAL',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        progress: 65,
        budget: 150000,
        team: ['Dr. María González', 'Lic. Carlos Ruiz'],
        documents: ['cen-001', 'cen-002']
      },
      {
        id: 'cen-proj-002',
        name: 'Sistema de Gestión de Calidad',
        description: 'Implementación de estándares de calidad ISO para procesos académicos',
        status: 'active' as const,
        alliance: 'CENTRAL',
        startDate: '2024-02-01',
        endDate: '2024-08-31',
        progress: 35,
        budget: 80000,
        team: ['Dr. Carmen Vega', 'Lic. Patricia Morales'],
        documents: ['cen-003', 'cen-005']
      },
      {
        id: 'cen-proj-003',
        name: 'Modernización de Infraestructura IT',
        description: 'Actualización de sistemas tecnológicos y equipamiento informático',
        status: 'on-hold' as const,
        alliance: 'CENTRAL',
        startDate: '2024-01-15',
        endDate: '2024-12-31',
        progress: 20,
        budget: 200000,
        team: ['Ing. Felipe Mendoza', 'Lic. Roberto Silva'],
        documents: ['cen-004', 'cen-006']
      },
      {
        id: 'cen-proj-004',
        name: 'Programa de Internacionalización',
        description: 'Desarrollo de alianzas internacionales y programas de intercambio',
        status: 'active' as const,
        alliance: 'CENTRAL',
        startDate: '2024-03-01',
        endDate: '2025-02-28',
        progress: 15,
        budget: 120000,
        team: ['Dr. María González', 'Lic. Carlos Ruiz'],
        documents: ['cen-001', 'cen-005']
      },
      {
        id: 'cen-proj-005',
        name: 'Optimización de Procesos Administrativos',
        description: 'Reingeniería de flujos de trabajo para mejorar eficiencia operativa',
        status: 'completed' as const,
        alliance: 'CENTRAL',
        startDate: '2023-09-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 60000,
        team: ['Lic. Patricia Morales', 'Lic. Roberto Silva'],
        documents: ['cen-003', 'cen-006']
      }
    ]
  },
  UNIS: {
    documents: [
      {
        id: 'unis-001',
        title: 'Plan Estratégico UNIS 2024',
        description: 'Documento estratégico de la Universidad UNIS',
        category: 'Estrategia',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unis-001/view',
        lastUpdated: '2024-01-15',
        alliance: 'UNIS',
        tags: ['estrategia', 'plan', '2024'],
        size: '1.8 MB',
        owner: 'Dr. Juan Pérez',
        accessLevel: 'view' as const
      },
      {
        id: 'unis-002',
        title: 'Manual de Investigación y Desarrollo',
        description: 'Guía para proyectos de investigación y desarrollo académico',
        category: 'Investigación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unis-002/view',
        lastUpdated: '2024-01-20',
        alliance: 'UNIS',
        tags: ['investigación', 'desarrollo', 'académico'],
        size: '4.2 MB',
        owner: 'Dr. Ana Martínez',
        accessLevel: 'view' as const
      },
      {
        id: 'unis-003',
        title: 'Presentación de Resultados Q4 2023',
        description: 'Análisis de resultados del cuarto trimestre del año anterior',
        category: 'Presentaciones',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/unis-003/edit',
        lastUpdated: '2024-01-25',
        alliance: 'UNIS',
        tags: ['resultados', 'Q4', '2023'],
        size: '18.5 MB',
        owner: 'Lic. Roberto Fernández',
        accessLevel: 'view' as const
      },
      {
        id: 'unis-004',
        title: 'Base de Datos de Estudiantes',
        description: 'Registro completo de estudiantes y su información académica',
        category: 'Académico',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/unis-004/edit',
        lastUpdated: '2024-01-30',
        alliance: 'UNIS',
        tags: ['estudiantes', 'académico', 'base de datos'],
        size: '6.8 MB',
        owner: 'Lic. Carmen López',
        accessLevel: 'edit' as const
      },
      {
        id: 'unis-005',
        title: 'Protocolo de Seguridad Informática',
        description: 'Estándares y procedimientos de seguridad para sistemas informáticos',
        category: 'Tecnología',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unis-005/view',
        lastUpdated: '2024-02-01',
        alliance: 'UNIS',
        tags: ['seguridad', 'informática', 'protocolos'],
        size: '3.7 MB',
        owner: 'Ing. Miguel Torres',
        accessLevel: 'view' as const
      },
      {
        id: 'unis-006',
        title: 'Dashboard de Indicadores Académicos',
        description: 'Métricas y estadísticas del rendimiento académico institucional',
        category: 'Académico',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/unis-006/view',
        lastUpdated: '2024-02-05',
        alliance: 'UNIS',
        tags: ['indicadores', 'académico', 'métricas'],
        size: '9.3 MB',
        owner: 'Dr. Juan Pérez',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'unis-con-001',
        name: 'Dr. Juan Pérez',
        position: 'Director Académico',
        email: 'juan.perez@unis.edu',
        phone: '+56 2 2345 6791',
        department: 'Académico',
        alliance: 'UNIS',
        isActive: true
      },
      {
        id: 'unis-con-002',
        name: 'Dr. Ana Martínez',
        position: 'Directora de Investigación',
        email: 'ana.martinez@unis.edu',
        phone: '+56 2 2345 6792',
        department: 'Investigación',
        alliance: 'UNIS',
        isActive: true
      },
      {
        id: 'unis-con-003',
        name: 'Lic. Roberto Fernández',
        position: 'Director de Planificación',
        email: 'roberto.fernandez@unis.edu',
        phone: '+56 2 2345 6793',
        department: 'Planificación',
        alliance: 'UNIS',
        isActive: true
      },
      {
        id: 'unis-con-004',
        name: 'Lic. Carmen López',
        position: 'Coordinadora Académica',
        email: 'carmen.lopez@unis.edu',
        phone: '+56 2 2345 6794',
        department: 'Académico',
        alliance: 'UNIS',
        isActive: true
      },
      {
        id: 'unis-con-005',
        name: 'Ing. Miguel Torres',
        position: 'Director de Sistemas',
        email: 'miguel.torres@unis.edu',
        phone: '+56 2 2345 6795',
        department: 'Tecnología',
        alliance: 'UNIS',
        isActive: true
      },
      {
        id: 'unis-con-006',
        name: 'Lic. Patricia Herrera',
        position: 'Directora de Extensión',
        email: 'patricia.herrera@unis.edu',
        phone: '+56 2 2345 6796',
        department: 'Extensión',
        alliance: 'UNIS',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'unis-proj-001',
        name: 'Programa de Internacionalización',
        description: 'Desarrollo de programas de intercambio internacional',
        status: 'active' as const,
        alliance: 'UNIS',
        startDate: '2024-02-01',
        endDate: '2024-12-31',
        progress: 45,
        budget: 80000,
        team: ['Dr. Juan Pérez'],
        documents: ['unis-001']
      },
      {
        id: 'unis-proj-002',
        name: 'Centro de Investigación Avanzada',
        description: 'Creación de un centro de investigación multidisciplinario',
        status: 'active' as const,
        alliance: 'UNIS',
        startDate: '2024-01-15',
        endDate: '2025-06-30',
        progress: 25,
        budget: 250000,
        team: ['Dr. Ana Martínez', 'Dr. Juan Pérez'],
        documents: ['unis-002', 'unis-006']
      },
      {
        id: 'unis-proj-003',
        name: 'Plataforma de E-learning',
        description: 'Desarrollo de sistema de aprendizaje en línea',
        status: 'on-hold' as const,
        alliance: 'UNIS',
        startDate: '2024-02-01',
        endDate: '2024-11-30',
        progress: 15,
        budget: 120000,
        team: ['Ing. Miguel Torres', 'Lic. Carmen López'],
        documents: ['unis-004', 'unis-005']
      },
      {
        id: 'unis-proj-004',
        name: 'Programa de Vinculación Empresarial',
        description: 'Fortalecimiento de relaciones con el sector empresarial',
        status: 'active' as const,
        alliance: 'UNIS',
        startDate: '2024-03-01',
        endDate: '2024-12-31',
        progress: 30,
        budget: 90000,
        team: ['Lic. Patricia Herrera', 'Dr. Juan Pérez'],
        documents: ['unis-001', 'unis-003']
      },
      {
        id: 'unis-proj-005',
        name: 'Sistema de Gestión Estudiantil',
        description: 'Modernización del sistema de gestión de estudiantes',
        status: 'completed' as const,
        alliance: 'UNIS',
        startDate: '2023-08-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 180000,
        team: ['Ing. Miguel Torres', 'Lic. Carmen López'],
        documents: ['unis-004', 'unis-006']
      }
    ]
  },
  UP: {
    documents: [
      {
        id: 'up-001',
        title: 'Manual de Calidad UP',
        description: 'Manual de procedimientos de calidad institucional',
        category: 'Calidad',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/up-001/view',
        lastUpdated: '2024-01-10',
        alliance: 'UP',
        tags: ['calidad', 'manual', 'procedimientos'],
        size: '3.2 MB',
        owner: 'Ing. Ana López',
        accessLevel: 'view' as const
      },
      {
        id: 'up-002',
        title: 'Plan de Desarrollo Sostenible 2024',
        description: 'Estrategia institucional para la implementación de prácticas sostenibles',
        category: 'Sostenibilidad',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/up-002/view',
        lastUpdated: '2024-01-18',
        alliance: 'UP',
        tags: ['sostenibilidad', 'desarrollo', 'medio ambiente'],
        size: '5.8 MB',
        owner: 'Dr. Carlos Mendoza',
        accessLevel: 'view' as const
      },
      {
        id: 'up-003',
        title: 'Presentación de Innovación Tecnológica',
        description: 'Slides sobre proyectos de innovación y desarrollo tecnológico',
        category: 'Innovación',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/up-003/edit',
        lastUpdated: '2024-01-22',
        alliance: 'UP',
        tags: ['innovación', 'tecnología', 'desarrollo'],
        size: '22.1 MB',
        owner: 'Ing. Felipe Rojas',
        accessLevel: 'view' as const
      },
      {
        id: 'up-004',
        title: 'Base de Datos de Proyectos de Investigación',
        description: 'Registro de proyectos de investigación activos y completados',
        category: 'Investigación',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/up-004/edit',
        lastUpdated: '2024-01-28',
        alliance: 'UP',
        tags: ['investigación', 'proyectos', 'base de datos'],
        size: '7.5 MB',
        owner: 'Dr. María Silva',
        accessLevel: 'edit' as const
      },
      {
        id: 'up-005',
        title: 'Protocolo de Gestión de Riesgos',
        description: 'Procedimientos para identificación y manejo de riesgos institucionales',
        category: 'Gestión',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/up-005/view',
        lastUpdated: '2024-02-02',
        alliance: 'UP',
        tags: ['riesgos', 'gestión', 'protocolos'],
        size: '4.3 MB',
        owner: 'Lic. Roberto Vega',
        accessLevel: 'view' as const
      },
      {
        id: 'up-006',
        title: 'Dashboard de Indicadores de Sostenibilidad',
        description: 'Métricas y estadísticas de iniciativas sostenibles institucionales',
        category: 'Sostenibilidad',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/up-006/view',
        lastUpdated: '2024-02-06',
        alliance: 'UP',
        tags: ['sostenibilidad', 'indicadores', 'métricas'],
        size: '11.7 MB',
        owner: 'Dr. Carlos Mendoza',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'up-con-001',
        name: 'Ing. Ana López',
        position: 'Coordinadora de Calidad',
        email: 'ana.lopez@up.edu',
        phone: '+56 2 2345 6792',
        department: 'Calidad',
        alliance: 'UP',
        isActive: true
      },
      {
        id: 'up-con-002',
        name: 'Dr. Carlos Mendoza',
        position: 'Director de Sostenibilidad',
        email: 'carlos.mendoza@up.edu',
        phone: '+56 2 2345 6793',
        department: 'Sostenibilidad',
        alliance: 'UP',
        isActive: true
      },
      {
        id: 'up-con-003',
        name: 'Ing. Felipe Rojas',
        position: 'Director de Innovación',
        email: 'felipe.rojas@up.edu',
        phone: '+56 2 2345 6794',
        department: 'Innovación',
        alliance: 'UP',
        isActive: true
      },
      {
        id: 'up-con-004',
        name: 'Dr. María Silva',
        position: 'Directora de Investigación',
        email: 'maria.silva@up.edu',
        phone: '+56 2 2345 6795',
        department: 'Investigación',
        alliance: 'UP',
        isActive: true
      },
      {
        id: 'up-con-005',
        name: 'Lic. Roberto Vega',
        position: 'Director de Gestión de Riesgos',
        email: 'roberto.vega@up.edu',
        phone: '+56 2 2345 6796',
        department: 'Gestión',
        alliance: 'UP',
        isActive: true
      },
      {
        id: 'up-con-006',
        name: 'Lic. Patricia Castro',
        position: 'Coordinadora de Proyectos',
        email: 'patricia.castro@up.edu',
        phone: '+56 2 2345 6797',
        department: 'Proyectos',
        alliance: 'UP',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'up-proj-001',
        name: 'Sistema de Gestión de Calidad',
        description: 'Implementación de sistema integral de calidad',
        status: 'active' as const,
        alliance: 'UP',
        startDate: '2024-01-15',
        endDate: '2024-06-30',
        progress: 30,
        budget: 120000,
        team: ['Ing. Ana López'],
        documents: ['up-001']
      },
      {
        id: 'up-proj-002',
        name: 'Campus Sostenible',
        description: 'Transformación del campus hacia prácticas sostenibles',
        status: 'active' as const,
        alliance: 'UP',
        startDate: '2024-02-01',
        endDate: '2025-01-31',
        progress: 20,
        budget: 300000,
        team: ['Dr. Carlos Mendoza', 'Lic. Patricia Castro'],
        documents: ['up-002', 'up-006']
      },
      {
        id: 'up-proj-003',
        name: 'Hub de Innovación Tecnológica',
        description: 'Creación de centro de innovación y desarrollo tecnológico',
        status: 'on-hold' as const,
        alliance: 'UP',
        startDate: '2024-01-20',
        endDate: '2024-12-31',
        progress: 10,
        budget: 180000,
        team: ['Ing. Felipe Rojas', 'Dr. María Silva'],
        documents: ['up-003', 'up-004']
      },
      {
        id: 'up-proj-004',
        name: 'Sistema de Gestión de Riesgos',
        description: 'Implementación de framework de gestión de riesgos',
        status: 'active' as const,
        alliance: 'UP',
        startDate: '2024-02-15',
        endDate: '2024-08-31',
        progress: 25,
        budget: 95000,
        team: ['Lic. Roberto Vega', 'Ing. Ana López'],
        documents: ['up-001', 'up-005']
      },
      {
        id: 'up-proj-005',
        name: 'Programa de Investigación Interdisciplinaria',
        description: 'Fomento de proyectos de investigación colaborativos',
        status: 'completed' as const,
        alliance: 'UP',
        startDate: '2023-07-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 150000,
        team: ['Dr. María Silva', 'Dr. Carlos Mendoza'],
        documents: ['up-002', 'up-004']
      }
    ]
  },
  UCSS: {
    documents: [
      {
        id: 'ucss-001',
        title: 'Protocolo de Investigación UCSS',
        description: 'Guía para proyectos de investigación institucional',
        category: 'Investigación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/ucss-001/view',
        lastUpdated: '2024-01-20',
        alliance: 'UCSS',
        tags: ['investigación', 'protocolo', 'proyectos'],
        size: '2.1 MB',
        owner: 'Dr. Carlos Mendoza',
        accessLevel: 'view' as const
      },
      {
        id: 'ucss-002',
        title: 'Manual de Gestión de Proyectos',
        description: 'Guía metodológica para la gestión efectiva de proyectos institucionales',
        category: 'Gestión',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/ucss-002/view',
        lastUpdated: '2024-01-18',
        alliance: 'UCSS',
        tags: ['gestión', 'proyectos', 'metodología'],
        size: '6.7 MB',
        owner: 'Lic. María Torres',
        accessLevel: 'view' as const
      },
      {
        id: 'ucss-003',
        title: 'Presentación de Indicadores de Rendimiento',
        description: 'Análisis de KPIs institucionales y métricas de éxito',
        category: 'Análisis',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/ucss-003/edit',
        lastUpdated: '2024-01-24',
        alliance: 'UCSS',
        tags: ['indicadores', 'rendimiento', 'KPIs'],
        size: '19.8 MB',
        owner: 'Dr. Ana González',
        accessLevel: 'view' as const
      },
      {
        id: 'ucss-004',
        title: 'Base de Datos de Recursos Educativos',
        description: 'Inventario de recursos educativos y materiales de enseñanza',
        category: 'Educación',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/ucss-004/edit',
        lastUpdated: '2024-01-30',
        alliance: 'UCSS',
        tags: ['educación', 'recursos', 'materiales'],
        size: '8.2 MB',
        owner: 'Lic. Carmen Ruiz',
        accessLevel: 'edit' as const
      },
      {
        id: 'ucss-005',
        title: 'Protocolo de Evaluación Docente',
        description: 'Procedimientos para la evaluación del desempeño docente',
        category: 'Académico',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/ucss-005/view',
        lastUpdated: '2024-02-03',
        alliance: 'UCSS',
        tags: ['evaluación', 'docente', 'desempeño'],
        size: '3.9 MB',
        owner: 'Dr. Roberto Herrera',
        accessLevel: 'view' as const
      },
      {
        id: 'ucss-006',
        title: 'Dashboard de Gestión Académica',
        description: 'Panel de control con métricas y estadísticas académicas',
        category: 'Académico',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/ucss-006/view',
        lastUpdated: '2024-02-07',
        alliance: 'UCSS',
        tags: ['académico', 'gestión', 'métricas'],
        size: '14.6 MB',
        owner: 'Dr. Ana González',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'ucss-con-001',
        name: 'Dr. Carlos Mendoza',
        position: 'Director de Investigación',
        email: 'carlos.mendoza@ucss.edu',
        phone: '+56 2 2345 6793',
        department: 'Investigación',
        alliance: 'UCSS',
        isActive: true
      },
      {
        id: 'ucss-con-002',
        name: 'Lic. María Torres',
        position: 'Directora de Gestión',
        email: 'maria.torres@ucss.edu',
        phone: '+56 2 2345 6794',
        department: 'Gestión',
        alliance: 'UCSS',
        isActive: true
      },
      {
        id: 'ucss-con-003',
        name: 'Dr. Ana González',
        position: 'Directora Académica',
        email: 'ana.gonzalez@ucss.edu',
        phone: '+56 2 2345 6795',
        department: 'Académico',
        alliance: 'UCSS',
        isActive: true
      },
      {
        id: 'ucss-con-004',
        name: 'Lic. Carmen Ruiz',
        position: 'Coordinadora de Educación',
        email: 'carmen.ruiz@ucss.edu',
        phone: '+56 2 2345 6796',
        department: 'Educación',
        alliance: 'UCSS',
        isActive: true
      },
      {
        id: 'ucss-con-005',
        name: 'Dr. Roberto Herrera',
        position: 'Director de Calidad',
        email: 'roberto.herrera@ucss.edu',
        phone: '+56 2 2345 6797',
        department: 'Calidad',
        alliance: 'UCSS',
        isActive: true
      },
      {
        id: 'ucss-con-006',
        name: 'Lic. Felipe Castro',
        position: 'Director de Planificación',
        email: 'felipe.castro@ucss.edu',
        phone: '+56 2 2345 6798',
        department: 'Planificación',
        alliance: 'UCSS',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'ucss-proj-001',
        name: 'Centro de Investigación Avanzada',
        description: 'Creación de centro de investigación multidisciplinario',
        status: 'active' as const,
        alliance: 'UCSS',
        startDate: '2024-03-01',
        endDate: '2024-12-31',
        progress: 20,
        budget: 200000,
        team: ['Dr. Carlos Mendoza'],
        documents: ['ucss-001']
      },
      {
        id: 'ucss-proj-002',
        name: 'Sistema de Gestión de Proyectos',
        description: 'Implementación de metodologías ágiles para gestión de proyectos',
        status: 'active' as const,
        alliance: 'UCSS',
        startDate: '2024-02-01',
        endDate: '2024-09-30',
        progress: 40,
        budget: 120000,
        team: ['Lic. María Torres', 'Lic. Felipe Castro'],
        documents: ['ucss-002', 'ucss-003']
      },
      {
        id: 'ucss-proj-003',
        name: 'Plataforma de Recursos Educativos',
        description: 'Desarrollo de sistema de gestión de recursos educativos',
        status: 'on-hold' as const,
        alliance: 'UCSS',
        startDate: '2024-01-15',
        endDate: '2024-10-31',
        progress: 25,
        budget: 150000,
        team: ['Lic. Carmen Ruiz', 'Dr. Ana González'],
        documents: ['ucss-004', 'ucss-006']
      },
      {
        id: 'ucss-proj-004',
        name: 'Programa de Evaluación Docente',
        description: 'Implementación de sistema integral de evaluación docente',
        status: 'active' as const,
        alliance: 'UCSS',
        startDate: '2024-02-15',
        endDate: '2024-08-31',
        progress: 35,
        budget: 85000,
        team: ['Dr. Roberto Herrera', 'Dr. Ana González'],
        documents: ['ucss-005', 'ucss-006']
      },
      {
        id: 'ucss-proj-005',
        name: 'Centro de Excelencia Académica',
        description: 'Creación de centro para el desarrollo de excelencia académica',
        status: 'completed' as const,
        alliance: 'UCSS',
        startDate: '2023-09-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 180000,
        team: ['Dr. Ana González', 'Lic. Carmen Ruiz'],
        documents: ['ucss-003', 'ucss-004']
      }
    ]
  },
  EAFIT: {
    documents: [
      {
        id: 'eafit-001',
        title: 'Plan de Innovación EAFIT',
        description: 'Estrategia de innovación tecnológica institucional',
        category: 'Innovación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/eafit-001/view',
        lastUpdated: '2024-01-25',
        alliance: 'EAFIT',
        tags: ['innovación', 'tecnología', 'estrategia'],
        size: '2.8 MB',
        owner: 'Dr. Laura Torres',
        accessLevel: 'view' as const
      },
      {
        id: 'eafit-002',
        title: 'Manual de Emprendimiento',
        description: 'Guía para el desarrollo de proyectos emprendedores',
        category: 'Emprendimiento',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/eafit-002/view',
        lastUpdated: '2024-01-20',
        alliance: 'EAFIT',
        tags: ['emprendimiento', 'proyectos', 'desarrollo'],
        size: '5.4 MB',
        owner: 'Lic. Roberto Silva',
        accessLevel: 'view' as const
      },
      {
        id: 'eafit-003',
        title: 'Presentación de Tecnologías Emergentes',
        description: 'Análisis de tecnologías emergentes y su aplicación institucional',
        category: 'Tecnología',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/eafit-003/edit',
        lastUpdated: '2024-01-28',
        alliance: 'EAFIT',
        tags: ['tecnología', 'emergente', 'aplicación'],
        size: '25.3 MB',
        owner: 'Ing. Miguel Herrera',
        accessLevel: 'view' as const
      },
      {
        id: 'eafit-004',
        title: 'Base de Datos de Startups',
        description: 'Registro de startups y proyectos emprendedores institucionales',
        category: 'Emprendimiento',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/eafit-004/edit',
        lastUpdated: '2024-02-01',
        alliance: 'EAFIT',
        tags: ['startups', 'emprendimiento', 'proyectos'],
        size: '9.8 MB',
        owner: 'Lic. Roberto Silva',
        accessLevel: 'edit' as const
      },
      {
        id: 'eafit-005',
        title: 'Protocolo de Transferencia Tecnológica',
        description: 'Procedimientos para transferencia de tecnología y conocimiento',
        category: 'Tecnología',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/eafit-005/view',
        lastUpdated: '2024-02-05',
        alliance: 'EAFIT',
        tags: ['transferencia', 'tecnología', 'conocimiento'],
        size: '4.2 MB',
        owner: 'Dr. Laura Torres',
        accessLevel: 'view' as const
      },
      {
        id: 'eafit-006',
        title: 'Dashboard de Innovación',
        description: 'Panel de control con métricas de innovación y emprendimiento',
        category: 'Innovación',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/eafit-006/view',
        lastUpdated: '2024-02-08',
        alliance: 'EAFIT',
        tags: ['innovación', 'métricas', 'emprendimiento'],
        size: '16.9 MB',
        owner: 'Lic. Roberto Silva',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'eafit-con-001',
        name: 'Dr. Laura Torres',
        position: 'Directora de Innovación',
        email: 'laura.torres@eafit.edu',
        phone: '+56 2 2345 6794',
        department: 'Innovación',
        alliance: 'EAFIT',
        isActive: true
      },
      {
        id: 'eafit-con-002',
        name: 'Lic. Roberto Silva',
        position: 'Director de Emprendimiento',
        email: 'roberto.silva@eafit.edu',
        phone: '+56 2 2345 6795',
        department: 'Emprendimiento',
        alliance: 'EAFIT',
        isActive: true
      },
      {
        id: 'eafit-con-003',
        name: 'Ing. Miguel Herrera',
        position: 'Director de Tecnología',
        email: 'miguel.herrera@eafit.edu',
        phone: '+56 2 2345 6796',
        department: 'Tecnología',
        alliance: 'EAFIT',
        isActive: true
      },
      {
        id: 'eafit-con-004',
        name: 'Lic. Carmen Mendoza',
        position: 'Coordinadora de Startups',
        email: 'carmen.mendoza@eafit.edu',
        phone: '+56 2 2345 6797',
        department: 'Emprendimiento',
        alliance: 'EAFIT',
        isActive: true
      },
      {
        id: 'eafit-con-005',
        name: 'Dr. Felipe Rojas',
        position: 'Director de Investigación',
        email: 'felipe.rojas@eafit.edu',
        phone: '+56 2 2345 6798',
        department: 'Investigación',
        alliance: 'EAFIT',
        isActive: true
      },
      {
        id: 'eafit-con-006',
        name: 'Lic. Patricia Vega',
        position: 'Directora de Vinculación',
        email: 'patricia.vega@eafit.edu',
        phone: '+56 2 2345 6799',
        department: 'Vinculación',
        alliance: 'EAFIT',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'eafit-proj-001',
        name: 'Hub de Innovación Tecnológica',
        description: 'Desarrollo de centro de innovación y emprendimiento',
        status: 'active' as const,
        alliance: 'EAFIT',
        startDate: '2024-02-15',
        endDate: '2024-11-30',
        progress: 35,
        budget: 180000,
        team: ['Dr. Laura Torres'],
        documents: ['eafit-001']
      },
      {
        id: 'eafit-proj-002',
        name: 'Programa de Aceleración de Startups',
        description: 'Programa integral para acelerar startups institucionales',
        status: 'active' as const,
        alliance: 'EAFIT',
        startDate: '2024-01-20',
        endDate: '2024-12-31',
        progress: 45,
        budget: 250000,
        team: ['Lic. Roberto Silva', 'Lic. Carmen Mendoza'],
        documents: ['eafit-002', 'eafit-004']
      },
      {
        id: 'eafit-proj-003',
        name: 'Laboratorio de Tecnologías Emergentes',
        description: 'Creación de laboratorio para experimentación tecnológica',
        status: 'on-hold' as const,
        alliance: 'EAFIT',
        startDate: '2024-02-01',
        endDate: '2024-10-31',
        progress: 20,
        budget: 200000,
        team: ['Ing. Miguel Herrera', 'Dr. Felipe Rojas'],
        documents: ['eafit-003', 'eafit-005']
      },
      {
        id: 'eafit-proj-004',
        name: 'Sistema de Transferencia Tecnológica',
        description: 'Implementación de plataforma para transferencia de tecnología',
        status: 'active' as const,
        alliance: 'EAFIT',
        startDate: '2024-03-01',
        endDate: '2024-09-30',
        progress: 30,
        budget: 160000,
        team: ['Dr. Laura Torres', 'Lic. Patricia Vega'],
        documents: ['eafit-001', 'eafit-005']
      },
      {
        id: 'eafit-proj-005',
        name: 'Centro de Emprendimiento Estudiantil',
        description: 'Creación de centro para fomentar emprendimiento estudiantil',
        status: 'completed' as const,
        alliance: 'EAFIT',
        startDate: '2023-08-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 120000,
        team: ['Lic. Roberto Silva', 'Lic. Carmen Mendoza'],
        documents: ['eafit-002', 'eafit-006']
      }
    ]
  },
  UNINORTE: {
    documents: [
      {
        id: 'uninorte-001',
        title: 'Programa de Desarrollo Regional UNINORTE',
        description: 'Iniciativas para el desarrollo de la región norte',
        category: 'Desarrollo Regional',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/uninorte-001/view',
        lastUpdated: '2024-01-30',
        alliance: 'UNINORTE',
        tags: ['desarrollo', 'regional', 'comunidad'],
        size: '1.9 MB',
        owner: 'Dr. Roberto Silva',
        accessLevel: 'view' as const
      },
      {
        id: 'uninorte-002',
        title: 'Plan de Sostenibilidad Ambiental',
        description: 'Estrategia para la conservación ambiental de la región norte',
        category: 'Sostenibilidad',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/uninorte-002/view',
        lastUpdated: '2024-01-25',
        alliance: 'UNINORTE',
        tags: ['sostenibilidad', 'ambiental', 'conservación'],
        size: '6.8 MB',
        owner: 'Lic. Ana Morales',
        accessLevel: 'view' as const
      },
      {
        id: 'uninorte-003',
        title: 'Presentación de Proyectos Comunitarios',
        description: 'Análisis de iniciativas comunitarias y su impacto regional',
        category: 'Comunidad',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/uninorte-003/edit',
        lastUpdated: '2024-02-01',
        alliance: 'UNINORTE',
        tags: ['comunidad', 'proyectos', 'impacto'],
        size: '21.4 MB',
        owner: 'Lic. Roberto Castro',
        accessLevel: 'view' as const
      },
      {
        id: 'uninorte-004',
        title: 'Base de Datos de Recursos Naturales',
        description: 'Inventario de recursos naturales y su estado de conservación',
        category: 'Recursos Naturales',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/uninorte-004/edit',
        lastUpdated: '2024-02-05',
        alliance: 'UNINORTE',
        tags: ['recursos', 'naturales', 'conservación'],
        size: '11.2 MB',
        owner: 'Lic. Ana Morales',
        accessLevel: 'edit' as const
      },
      {
        id: 'uninorte-005',
        title: 'Protocolo de Participación Ciudadana',
        description: 'Procedimientos para la participación ciudadana en proyectos regionales',
        category: 'Participación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/uninorte-005/view',
        lastUpdated: '2024-02-08',
        alliance: 'UNINORTE',
        tags: ['participación', 'ciudadana', 'proyectos'],
        size: '4.7 MB',
        owner: 'Lic. Roberto Castro',
        accessLevel: 'view' as const
      },
      {
        id: 'uninorte-006',
        title: 'Dashboard de Desarrollo Regional',
        description: 'Panel de control con métricas de desarrollo regional',
        category: 'Desarrollo Regional',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/uninorte-006/view',
        lastUpdated: '2024-02-10',
        alliance: 'UNINORTE',
        tags: ['desarrollo', 'regional', 'métricas'],
        size: '18.3 MB',
        owner: 'Dr. Roberto Silva',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'uninorte-con-001',
        name: 'Dr. Roberto Silva',
        position: 'Director de Extensión',
        email: 'roberto.silva@uninorte.edu',
        phone: '+56 2 2345 6795',
        department: 'Extensión',
        alliance: 'UNINORTE',
        isActive: true
      },
      {
        id: 'uninorte-con-002',
        name: 'Lic. Ana Morales',
        position: 'Directora de Sostenibilidad',
        email: 'ana.morales@uninorte.edu',
        phone: '+56 2 2345 6796',
        department: 'Sostenibilidad',
        alliance: 'UNINORTE',
        isActive: true
      },
      {
        id: 'uninorte-con-003',
        name: 'Lic. Roberto Castro',
        position: 'Director de Participación Ciudadana',
        email: 'roberto.castro@uninorte.edu',
        phone: '+56 2 2345 6797',
        department: 'Participación',
        alliance: 'UNINORTE',
        isActive: true
      },
      {
        id: 'uninorte-con-004',
        name: 'Dr. Carmen Vega',
        position: 'Directora de Desarrollo Regional',
        email: 'carmen.vega@uninorte.edu',
        phone: '+56 2 2345 6798',
        department: 'Desarrollo Regional',
        alliance: 'UNINORTE',
        isActive: true
      },
      {
        id: 'uninorte-con-005',
        name: 'Lic. Felipe Herrera',
        position: 'Coordinador de Proyectos Comunitarios',
        email: 'felipe.herrera@uninorte.edu',
        phone: '+56 2 2345 6799',
        department: 'Comunidad',
        alliance: 'UNINORTE',
        isActive: true
      },
      {
        id: 'uninorte-con-006',
        name: 'Ing. Patricia Mendoza',
        position: 'Directora de Recursos Naturales',
        email: 'patricia.mendoza@uninorte.edu',
        phone: '+56 2 2345 6800',
        department: 'Recursos Naturales',
        alliance: 'UNINORTE',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'uninorte-proj-001',
        name: 'Programa de Vinculación Comunitaria',
        description: 'Iniciativas de impacto social en la región',
        status: 'active' as const,
        alliance: 'UNINORTE',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        progress: 55,
        budget: 95000,
        team: ['Dr. Roberto Silva'],
        documents: ['uninorte-001']
      },
      {
        id: 'uninorte-proj-002',
        name: 'Iniciativa de Conservación Ambiental',
        description: 'Programa integral de conservación de recursos naturales',
        status: 'active' as const,
        alliance: 'UNINORTE',
        startDate: '2024-02-01',
        endDate: '2025-01-31',
        progress: 30,
        budget: 180000,
        team: ['Lic. Ana Morales', 'Ing. Patricia Mendoza'],
        documents: ['uninorte-002', 'uninorte-004']
      },
      {
        id: 'uninorte-proj-003',
        name: 'Centro de Participación Ciudadana',
        description: 'Creación de espacio para participación ciudadana activa',
        status: 'on-hold' as const,
        alliance: 'UNINORTE',
        startDate: '2024-01-15',
        endDate: '2024-11-30',
        progress: 20,
        budget: 150000,
        team: ['Lic. Roberto Castro', 'Lic. Felipe Herrera'],
        documents: ['uninorte-003', 'uninorte-005']
      },
      {
        id: 'uninorte-proj-004',
        name: 'Sistema de Monitoreo Regional',
        description: 'Implementación de sistema de monitoreo de desarrollo regional',
        status: 'active' as const,
        alliance: 'UNINORTE',
        startDate: '2024-03-01',
        endDate: '2024-09-30',
        progress: 25,
        budget: 120000,
        team: ['Dr. Carmen Vega', 'Lic. Felipe Herrera'],
        documents: ['uninorte-001', 'uninorte-006']
      },
      {
        id: 'uninorte-proj-005',
        name: 'Programa de Desarrollo Comunitario',
        description: 'Iniciativas para el desarrollo integral de comunidades',
        status: 'completed' as const,
        alliance: 'UNINORTE',
        startDate: '2023-09-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 200000,
        team: ['Dr. Roberto Silva', 'Lic. Felipe Herrera'],
        documents: ['uninorte-003', 'uninorte-006']
      }
    ]
  },
  UNAB: {
    documents: [
      {
        id: 'unab-001',
        title: 'Estrategia de Internacionalización UNAB',
        description: 'Plan de expansión internacional y cooperación',
        category: 'Internacionalización',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unab-001/view',
        lastUpdated: '2024-02-01',
        alliance: 'UNAB',
        tags: ['internacionalización', 'cooperación', 'alianzas'],
        size: '2.5 MB',
        owner: 'Dr. Patricia González',
        accessLevel: 'view' as const
      },
      {
        id: 'unab-002',
        title: 'Manual de Cooperación Académica',
        description: 'Guía para establecer alianzas académicas internacionales',
        category: 'Cooperación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unab-002/view',
        lastUpdated: '2024-01-28',
        alliance: 'UNAB',
        tags: ['cooperación', 'académica', 'alianzas'],
        size: '4.8 MB',
        owner: 'Lic. Carlos Ruiz',
        accessLevel: 'view' as const
      },
      {
        id: 'unab-003',
        title: 'Presentación de Programas de Intercambio',
        description: 'Análisis de programas de intercambio estudiantil y docente',
        category: 'Intercambio',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/unab-003/edit',
        lastUpdated: '2024-02-03',
        alliance: 'UNAB',
        tags: ['intercambio', 'estudiantil', 'docente'],
        size: '23.7 MB',
        owner: 'Lic. Ana Martínez',
        accessLevel: 'view' as const
      },
      {
        id: 'unab-004',
        title: 'Base de Datos de Socios Internacionales',
        description: 'Registro de instituciones socias y acuerdos de cooperación',
        category: 'Cooperación',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/unab-004/edit',
        lastUpdated: '2024-02-06',
        alliance: 'UNAB',
        tags: ['socios', 'internacionales', 'acuerdos'],
        size: '8.9 MB',
        owner: 'Lic. Carlos Ruiz',
        accessLevel: 'edit' as const
      },
      {
        id: 'unab-005',
        title: 'Protocolo de Movilidad Estudiantil',
        description: 'Procedimientos para programas de movilidad internacional',
        category: 'Movilidad',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/unab-005/view',
        lastUpdated: '2024-02-09',
        alliance: 'UNAB',
        tags: ['movilidad', 'estudiantil', 'internacional'],
        size: '3.6 MB',
        owner: 'Lic. Ana Martínez',
        accessLevel: 'view' as const
      },
      {
        id: 'unab-006',
        title: 'Dashboard de Cooperación Internacional',
        description: 'Panel de control con métricas de cooperación internacional',
        category: 'Internacionalización',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/unab-006/view',
        lastUpdated: '2024-02-12',
        alliance: 'UNAB',
        tags: ['cooperación', 'internacional', 'métricas'],
        size: '15.2 MB',
        owner: 'Dr. Patricia González',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'unab-con-001',
        name: 'Dr. Patricia González',
        position: 'Directora de Relaciones Internacionales',
        email: 'patricia.gonzalez@unab.edu',
        phone: '+56 2 2345 6796',
        department: 'Relaciones Internacionales',
        alliance: 'UNAB',
        isActive: true
      },
      {
        id: 'unab-con-002',
        name: 'Lic. Carlos Ruiz',
        position: 'Director de Cooperación Académica',
        email: 'carlos.ruiz@unab.edu',
        phone: '+56 2 2345 6797',
        department: 'Cooperación',
        alliance: 'UNAB',
        isActive: true
      },
      {
        id: 'unab-con-003',
        name: 'Lic. Ana Martínez',
        position: 'Coordinadora de Movilidad Estudiantil',
        email: 'ana.martinez@unab.edu',
        phone: '+56 2 2345 6798',
        department: 'Movilidad',
        alliance: 'UNAB',
        isActive: true
      },
      {
        id: 'unab-con-004',
        name: 'Dr. Roberto Herrera',
        position: 'Director de Alianzas Estratégicas',
        email: 'roberto.herrera@unab.edu',
        phone: '+56 2 2345 6799',
        department: 'Alianzas',
        alliance: 'UNAB',
        isActive: true
      },
      {
        id: 'unab-con-005',
        name: 'Lic. Carmen Silva',
        position: 'Directora de Programas de Intercambio',
        email: 'carmen.silva@unab.edu',
        phone: '+56 2 2345 6800',
        department: 'Intercambio',
        alliance: 'UNAB',
        isActive: true
      },
      {
        id: 'unab-con-006',
        name: 'Ing. Felipe Torres',
        position: 'Coordinador de Proyectos Internacionales',
        email: 'felipe.torres@unab.edu',
        phone: '+56 2 2345 6801',
        department: 'Proyectos',
        alliance: 'UNAB',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'unab-proj-001',
        name: 'Red de Universidades Latinoamericanas',
        description: 'Creación de red de cooperación académica',
        status: 'active' as const,
        alliance: 'UNAB',
        startDate: '2024-01-15',
        endDate: '2024-12-31',
        progress: 40,
        budget: 110000,
        team: ['Dr. Patricia González'],
        documents: ['unab-001']
      },
      {
        id: 'unab-proj-002',
        name: 'Centro de Cooperación Académica',
        description: 'Creación de centro para fomentar la cooperación académica',
        status: 'active' as const,
        alliance: 'UNAB',
        startDate: '2024-01-15',
        endDate: '2025-02-28',
        progress: 25,
        budget: 300000,
        team: ['Lic. Carlos Ruiz', 'Dr. Roberto Herrera'],
        documents: ['unab-002', 'unab-004']
      },
      {
        id: 'unab-proj-003',
        name: 'Sistema de Movilidad Estudiantil',
        description: 'Implementación de plataforma para gestión de movilidad',
        status: 'on-hold' as const,
        alliance: 'UNAB',
        startDate: '2024-02-01',
        endDate: '2024-11-30',
        progress: 15,
        budget: 180000,
        team: ['Lic. Ana Martínez', 'Lic. Carmen Silva'],
        documents: ['unab-003', 'unab-005']
      },
      {
        id: 'unab-proj-004',
        name: 'Programa de Intercambio Docente',
        description: 'Desarrollo de programas de intercambio para docentes',
        status: 'active' as const,
        alliance: 'UNAB',
        startDate: '2024-03-01',
        endDate: '2024-10-31',
        progress: 35,
        budget: 150000,
        team: ['Lic. Carmen Silva', 'Ing. Felipe Torres'],
        documents: ['unab-001', 'unab-003']
      },
      {
        id: 'unab-proj-005',
        name: 'Red de Universidades Socias',
        description: 'Creación de red colaborativa de universidades internacionales',
        status: 'completed' as const,
        alliance: 'UNAB',
        startDate: '2023-08-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 250000,
        team: ['Dr. Patricia González', 'Dr. Roberto Herrera'],
        documents: ['unab-002', 'unab-006']
      }
    ]
  },
  UDD: {
    documents: [
      {
        id: 'udd-001',
        title: 'Programa de Emprendimiento UDD',
        description: 'Iniciativas para fomentar el emprendimiento estudiantil',
        category: 'Emprendimiento',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/udd-001/view',
        lastUpdated: '2024-02-05',
        alliance: 'UDD',
        tags: ['emprendimiento', 'estudiantes', 'innovación'],
        size: '2.0 MB',
        owner: 'Dr. Miguel Herrera',
        accessLevel: 'view' as const
      },
      {
        id: 'udd-002',
        title: 'Manual de Innovación Empresarial',
        description: 'Guía para el desarrollo de proyectos empresariales innovadores',
        category: 'Innovación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/udd-002/view',
        lastUpdated: '2024-01-30',
        alliance: 'UDD',
        tags: ['innovación', 'empresarial', 'proyectos'],
        size: '5.2 MB',
        owner: 'Lic. Ana Castro',
        accessLevel: 'view' as const
      },
      {
        id: 'udd-003',
        title: 'Presentación de Ecosistema Emprendedor',
        description: 'Análisis del ecosistema emprendedor y oportunidades de mercado',
        category: 'Ecosistema',
        type: 'presentation' as const,
        url: 'https://drive.google.com/presentation/d/udd-003/edit',
        lastUpdated: '2024-02-01',
        alliance: 'UDD',
        tags: ['ecosistema', 'emprendedor', 'mercado'],
        size: '24.8 MB',
        owner: 'Lic. Roberto Vega',
        accessLevel: 'view' as const
      },
      {
        id: 'udd-004',
        title: 'Base de Datos de Emprendedores',
        description: 'Registro de emprendedores y sus proyectos empresariales',
        category: 'Emprendimiento',
        type: 'spreadsheet' as const,
        url: 'https://drive.google.com/spreadsheets/d/udd-004/edit',
        lastUpdated: '2024-02-06',
        alliance: 'UDD',
        tags: ['emprendedores', 'proyectos', 'empresariales'],
        size: '10.5 MB',
        owner: 'Lic. Ana Castro',
        accessLevel: 'edit' as const
      },
      {
        id: 'udd-005',
        title: 'Protocolo de Incubación de Startups',
        description: 'Procedimientos para el proceso de incubación empresarial',
        category: 'Incubación',
        type: 'document' as const,
        url: 'https://drive.google.com/file/d/udd-005/view',
        lastUpdated: '2024-02-09',
        alliance: 'UDD',
        tags: ['incubación', 'startups', 'empresarial'],
        size: '4.1 MB',
        owner: 'Lic. Roberto Vega',
        accessLevel: 'view' as const
      },
      {
        id: 'udd-006',
        title: 'Dashboard de Emprendimiento',
        description: 'Panel de control con métricas de emprendimiento e innovación',
        category: 'Emprendimiento',
        type: 'dashboard' as const,
        url: 'https://drive.google.com/file/d/udd-006/view',
        lastUpdated: '2024-02-12',
        alliance: 'UDD',
        tags: ['emprendimiento', 'métricas', 'innovación'],
        size: '17.6 MB',
        owner: 'Dr. Miguel Herrera',
        accessLevel: 'edit' as const
      }
    ],
    contacts: [
      {
        id: 'udd-con-001',
        name: 'Dr. Miguel Herrera',
        position: 'Director de Emprendimiento',
        email: 'miguel.herrera@udd.edu',
        phone: '+56 2 2345 6797',
        department: 'Emprendimiento',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-002',
        name: 'Lic. Ana Castro',
        position: 'Directora de Innovación',
        email: 'ana.castro@udd.edu',
        phone: '+56 2 2345 6798',
        department: 'Innovación',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-003',
        name: 'Lic. Roberto Vega',
        position: 'Director de Incubación',
        email: 'roberto.vega@udd.edu',
        phone: '+56 2 2345 6799',
        department: 'Incubación',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-004',
        name: 'Dr. Carmen Silva',
        position: 'Directora de Desarrollo Empresarial',
        email: 'carmen.silva@udd.edu',
        phone: '+56 2 2345 6800',
        department: 'Desarrollo Empresarial',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-005',
        name: 'Lic. Felipe Mendoza',
        position: 'Coordinador de Startups',
        email: 'felipe.mendoza@udd.edu',
        phone: '+56 2 2345 6801',
        department: 'Startups',
        alliance: 'UDD',
        isActive: true
      },
      {
        id: 'udd-con-006',
        name: 'Ing. Patricia Rojas',
        position: 'Directora de Ecosistema',
        email: 'patricia.rojas@udd.edu',
        phone: '+56 2 2345 6802',
        department: 'Ecosistema',
        alliance: 'UDD',
        isActive: true
      }
    ],
    projects: [
      {
        id: 'udd-proj-001',
        name: 'Incubadora de Startups UDD',
        description: 'Programa de incubación para emprendedores',
        status: 'active' as const,
        alliance: 'UDD',
        startDate: '2024-02-01',
        endDate: '2024-12-31',
        progress: 25,
        budget: 160000,
        team: ['Dr. Miguel Herrera'],
        documents: ['udd-001']
      },
      {
        id: 'udd-proj-002',
        name: 'Centro de Innovación Empresarial',
        description: 'Creación de centro para fomentar la innovación empresarial',
        status: 'active' as const,
        alliance: 'UDD',
        startDate: '2024-01-20',
        endDate: '2025-01-31',
        progress: 30,
        budget: 280000,
        team: ['Lic. Ana Castro', 'Dr. Carmen Silva'],
        documents: ['udd-002', 'udd-006']
      },
      {
        id: 'udd-proj-003',
        name: 'Ecosistema Emprendedor Regional',
        description: 'Desarrollo de ecosistema emprendedor integrado',
        status: 'on-hold' as const,
        alliance: 'UDD',
        startDate: '2024-02-01',
        endDate: '2024-11-30',
        progress: 20,
        budget: 220000,
        team: ['Ing. Patricia Rojas', 'Lic. Roberto Vega'],
        documents: ['udd-003', 'udd-004']
      },
      {
        id: 'udd-proj-004',
        name: 'Programa de Aceleración Empresarial',
        description: 'Programa integral para acelerar empresas emergentes',
        status: 'active' as const,
        alliance: 'UDD',
        startDate: '2024-03-01',
        endDate: '2024-10-31',
        progress: 40,
        budget: 190000,
        team: ['Lic. Roberto Vega', 'Lic. Felipe Mendoza'],
        documents: ['udd-001', 'udd-005']
      },
      {
        id: 'udd-proj-005',
        name: 'Hub de Emprendimiento Estudiantil',
        description: 'Creación de centro para emprendimiento estudiantil',
        status: 'completed' as const,
        alliance: 'UDD',
        startDate: '2023-09-01',
        endDate: '2024-01-31',
        progress: 100,
        budget: 140000,
        team: ['Dr. Miguel Herrera', 'Lic. Felipe Mendoza'],
        documents: ['udd-004', 'udd-006']
      }
    ]
  }
};

// Funciones utilitarias para obtener datos filtrados
export const getDocumentsByAlliance = (allianceName: string | null): AllianceDocument[] => {
  if (!allianceName) {
    return Object.values(allianceData).flatMap(alliance => alliance.documents);
  }
  const alliance = Object.values(allianceData).find(alliance => 
    alliance.documents.some(doc => doc.alliance === allianceName)
  );
  return alliance ? alliance.documents.filter(doc => doc.alliance === allianceName) : [];
};

export const getContactsByAlliance = (allianceName: string | null): AllianceContact[] => {
  if (!allianceName) {
    return Object.values(allianceData).flatMap(alliance => alliance.contacts);
  }
  const alliance = Object.values(allianceData).find(alliance => 
    alliance.contacts.some(contact => contact.alliance === allianceName)
  );
  return alliance ? alliance.contacts.filter(contact => contact.alliance === allianceName) : [];
};

export const getProjectsByAlliance = (allianceName: string | null): AllianceProject[] => {
  if (!allianceName) {
    return Object.values(allianceData).flatMap(alliance => alliance.projects);
  }
  const alliance = Object.values(allianceData).find(alliance => 
    alliance.projects.some(project => project.alliance === allianceName)
  );
  return alliance ? alliance.projects.filter(project => project.alliance === allianceName) : [];
};

export const getStatsByAlliance = (allianceName: string | null) => {
  if (!allianceName) {
    const totalDocuments = Object.values(allianceData).reduce((total, alliance) => 
      total + alliance.documents.length, 0
    );
    const totalContacts = Object.values(allianceData).reduce((total, alliance) => 
      total + alliance.contacts.length, 0
    );
    const totalProjects = Object.values(allianceData).reduce((total, alliance) => 
      total + alliance.projects.length, 0
    );
    
    return {
      documents: totalDocuments,
      contacts: totalContacts,
      projects: totalProjects,
      alliances: Object.keys(allianceData).length
    };
  }
  
  const alliance = Object.values(allianceData).find(alliance => 
    alliance.documents.some(doc => doc.alliance === allianceName)
  );
  
  if (!alliance) {
    return {
      documents: 0,
      contacts: 0,
      projects: 0,
      alliance: allianceName
    };
  }
  
  const documents = alliance.documents.filter(doc => doc.alliance === allianceName).length;
  const contacts = alliance.contacts.filter(contact => contact.alliance === allianceName).length;
  const projects = alliance.projects.filter(project => project.alliance === allianceName).length;
  
  return {
    documents,
    contacts,
    projects,
    alliance: allianceName
  };
};
