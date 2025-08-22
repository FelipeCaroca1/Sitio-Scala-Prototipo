/**
 * Datos mock específicos para cada módulo del sistema
 * Organizados por alianza para filtrado dinámico
 */

import { AllianceDocument } from './allianceData';

// ===== MÓDULO GOBERNANZA =====
export interface GovernanceDocument extends AllianceDocument {
  committee: string;
  meetingDate?: string;
  attendees: string[];
  decisions: string[];
  nextActions: string[];
}

export const governanceData = {
  KAPIT: [
    {
      id: 'gov-kap-001',
      title: 'Acta del Comité de Colaboración KAPIT',
      description: 'Minuta de la reunión del comité de colaboración del 15 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-kap-001/view',
      lastUpdated: '2024-01-15',
      alliance: 'KAPIT',
      tags: ['acta', 'comité', 'colaboración'],
      size: '1.2 MB',
      owner: 'Dr. María González',
      accessLevel: 'view',
      committee: 'Comité de Colaboración',
      meetingDate: '2024-01-15',
      attendees: ['Dr. María González', 'Lic. Carlos Ruiz', 'Ing. Roberto Silva'],
      decisions: [
        'Aprobación del protocolo de colaboración 2024',
        'Definición de proyectos conjuntos Q1',
        'Asignación de presupuesto para iniciativas'
      ],
      nextActions: [
        'Implementar protocolo aprobado',
        'Iniciar proyectos definidos',
        'Programar siguiente reunión'
      ]
    },
    {
      id: 'gov-kap-002',
      title: 'Presentación Estratégica KAPIT Q1',
      description: 'Slides de la presentación estratégica del primer trimestre',
      category: 'Presentaciones',
      type: 'presentation',
      url: 'https://drive.google.com/presentation/d/gov-kap-002/edit',
      lastUpdated: '2024-01-20',
      alliance: 'KAPIT',
      tags: ['estrategia', 'Q1', 'presentación'],
      size: '8.5 MB',
      owner: 'Lic. Carlos Ruiz',
      accessLevel: 'view',
      committee: 'Comité de Dirección',
      meetingDate: '2024-01-20',
      attendees: ['Dr. María González', 'Lic. Carlos Ruiz'],
      decisions: [
        'Definición de objetivos estratégicos Q1',
        'Aprobación de iniciativas prioritarias',
        'Establecimiento de métricas de seguimiento'
      ],
      nextActions: [
        'Implementar iniciativas aprobadas',
        'Establecer sistema de métricas',
        'Programar revisión mensual'
      ]
    }
  ],

  UNIR: [
    {
      id: 'gov-unir-001',
      title: 'Acta del Comité de Dirección UNIR',
      description: 'Minuta de la reunión del comité de dirección del 18 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-unir-001/view',
      lastUpdated: '2024-01-18',
      alliance: 'UNIR',
      tags: ['acta', 'comité', 'dirección'],
      size: '1.8 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view',
      committee: 'Comité de Dirección',
      meetingDate: '2024-01-18',
      attendees: ['Dr. Juan Pérez', 'Prof. Laura Torres'],
      decisions: [
        'Aprobación del memorándum de entendimiento',
        'Definición de programa de intercambio estudiantil',
        'Establecimiento de calendario académico 2024'
      ],
      nextActions: [
        'Firmar memorándum de entendimiento',
        'Implementar programa de intercambio',
        'Publicar calendario académico'
      ]
    }
  ],

  UDD: [
    {
      id: 'gov-udd-001',
      title: 'Acta del Comité de Investigación UDD',
      description: 'Minuta de la reunión del comité de investigación del 16 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-udd-001/view',
      lastUpdated: '2024-01-16',
      alliance: 'UDD',
      tags: ['acta', 'comité', 'investigación'],
      size: '2.1 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view',
      committee: 'Comité de Investigación',
      meetingDate: '2024-01-16',
      attendees: ['Dr. Roberto Mendoza', 'Ing. Patricia López'],
      decisions: [
        'Aprobación del plan de desarrollo 2024-2028',
        'Definición de líneas de investigación prioritarias',
        'Establecimiento de centro de innovación tecnológica'
      ],
      nextActions: [
        'Implementar plan de desarrollo',
        'Definir líneas de investigación',
        'Iniciar proyecto del centro de innovación'
      ]
    }
  ],

  Crescal: [
    {
      id: 'gov-cres-001',
      title: 'Acta del Comité de Relaciones Internacionales',
      description: 'Minuta de la reunión del comité de relaciones internacionales del 17 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-cres-001/view',
      lastUpdated: '2024-01-17',
      alliance: 'Crescal',
      tags: ['acta', 'comité', 'relaciones-internacionales'],
      size: '1.5 MB',
      owner: 'Dra. Carmen Vega',
      accessLevel: 'view',
      committee: 'Comité de Relaciones Internacionales',
      meetingDate: '2024-01-17',
      attendees: ['Dra. Carmen Vega', 'Lic. Fernando Castro'],
      decisions: [
        'Aprobación del estudio de mercado educativo',
        'Definición de propuesta de colaboración internacional',
        'Establecimiento de red de colaboración latinoamericana'
      ],
      nextActions: [
        'Finalizar estudio de mercado',
        'Desarrollar propuesta de colaboración',
        'Iniciar proyecto de red latinoamericana'
      ]
    }
  ],

  UP: [
    {
      id: 'gov-up-001',
      title: 'Acta del Comité Académico UP',
      description: 'Minuta de la reunión del comité académico del 14 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-up-001/view',
      lastUpdated: '2024-01-14',
      alliance: 'UP',
      tags: ['acta', 'comité', 'académico'],
      size: '1.3 MB',
      owner: 'Prof. Diego Herrera',
      accessLevel: 'view',
      committee: 'Comité Académico',
      meetingDate: '2024-01-14',
      attendees: ['Prof. Diego Herrera'],
      decisions: [
        'Aprobación del reglamento de estudiantes',
        'Definición del catálogo de cursos 2024',
        'Establecimiento de programa de modernización digital'
      ],
      nextActions: [
        'Publicar reglamento de estudiantes',
        'Actualizar catálogo de cursos',
        'Iniciar programa de modernización'
      ]
    }
  ],

  UCES: [
    {
      id: 'gov-uces-001',
      title: 'Acta del Comité de Calidad UCES',
      description: 'Minuta de la reunión del comité de calidad del 20 de enero 2024',
      category: 'Actas',
      type: 'document',
      url: 'https://drive.google.com/file/d/gov-uces-001/view',
      lastUpdated: '2024-01-20',
      alliance: 'UCES',
      tags: ['acta', 'comité', 'calidad'],
      size: '1.7 MB',
      owner: 'Dra. Isabel Morales',
      accessLevel: 'view',
      committee: 'Comité de Calidad',
      meetingDate: '2024-01-20',
      attendees: ['Dra. Isabel Morales'],
      decisions: [
        'Aprobación del plan de calidad',
        'Definición de sistema de gestión de calidad',
        'Establecimiento de proceso de acreditación'
      ],
      nextActions: [
        'Implementar plan de calidad',
        'Desarrollar sistema de gestión',
        'Iniciar proceso de acreditación'
      ]
    }
  ]
};

// ===== MÓDULO PLANEACIÓN =====
export interface PlanningDocument extends AllianceDocument {
  fiscalYear: string;
  budgetCategory: string;
  approvalStatus: 'pending' | 'approved' | 'rejected' | 'under-review';
  responsiblePerson: string;
  milestones: string[];
}

export const planningData = {
  KAPIT: [
    {
      id: 'plan-kap-001',
      title: 'Presupuesto KAPIT 2024-2025',
      description: 'Planificación financiera detallada para el período 2024-2025',
      category: 'Finanzas',
      type: 'spreadsheet',
      url: 'https://drive.google.com/spreadsheets/d/plan-kap-001/edit',
      lastUpdated: '2024-01-10',
      alliance: 'KAPIT',
      tags: ['presupuesto', 'finanzas', '2024-2025'],
      size: '856 KB',
      owner: 'CPA Ana Martínez',
      accessLevel: 'edit',
      fiscalYear: '2024-2025',
      budgetCategory: 'Operacional',
      approvalStatus: 'approved',
      responsiblePerson: 'CPA Ana Martínez',
      milestones: [
        'Aprobación inicial - Enero 2024',
        'Revisión trimestral - Abril 2024',
        'Ajuste presupuestario - Julio 2024',
        'Cierre fiscal - Diciembre 2024'
      ]
    },
    {
      id: 'plan-kap-002',
      title: 'Plan Estratégico KAPIT 2024-2026',
      description: 'Documento estratégico de planificación institucional',
      category: 'Estrategia',
      type: 'document',
      url: 'https://drive.google.com/file/d/plan-kap-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'KAPIT',
      tags: ['plan', 'estratégico', '2024-2026'],
      size: '3.2 MB',
      owner: 'Dr. María González',
      accessLevel: 'view',
      fiscalYear: '2024-2026',
      budgetCategory: 'Estratégico',
      approvalStatus: 'approved',
      responsiblePerson: 'Dr. María González',
      milestones: [
        'Desarrollo del plan - Enero 2024',
        'Aprobación ejecutiva - Marzo 2024',
        'Implementación - Abril 2024',
        'Seguimiento semestral - Julio 2024'
      ]
    }
  ],

  UNIR: [
    {
      id: 'plan-unir-001',
      title: 'Plan Académico UNIR 2024',
      description: 'Planificación de actividades académicas del año 2024',
      category: 'Académico',
      type: 'document',
      url: 'https://drive.google.com/file/d/plan-unir-001/view',
      lastUpdated: '2024-01-22',
      alliance: 'UNIR',
      tags: ['plan', 'académico', '2024'],
      size: '2.8 MB',
      owner: 'Prof. Laura Torres',
      accessLevel: 'view',
      fiscalYear: '2024',
      budgetCategory: 'Académico',
      approvalStatus: 'approved',
      responsiblePerson: 'Prof. Laura Torres',
      milestones: [
        'Definición de objetivos - Enero 2024',
        'Aprobación de programas - Febrero 2024',
        'Implementación - Marzo 2024',
        'Evaluación trimestral - Junio 2024'
      ]
    }
  ],

  UDD: [
    {
      id: 'plan-udd-001',
      title: 'Plan de Desarrollo UDD 2024-2028',
      description: 'Estrategia de crecimiento y desarrollo institucional',
      category: 'Planificación',
      type: 'presentation',
      url: 'https://drive.google.com/presentation/d/plan-udd-001/edit',
      lastUpdated: '2024-01-19',
      alliance: 'UDD',
      tags: ['plan', 'desarrollo', 'estrategia'],
      size: '8.9 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view',
      fiscalYear: '2024-2028',
      budgetCategory: 'Desarrollo',
      approvalStatus: 'under-review',
      responsiblePerson: 'Dr. Roberto Mendoza',
      milestones: [
        'Desarrollo del plan - Enero 2024',
        'Revisión ejecutiva - Marzo 2024',
        'Aprobación final - Mayo 2024',
        'Implementación - Junio 2024'
      ]
    }
  ],

  Crescal: [
    {
      id: 'plan-cres-001',
      title: 'Plan de Investigación Crescal 2024',
      description: 'Estrategia de investigación y desarrollo para 2024',
      category: 'Investigación',
      type: 'document',
      url: 'https://drive.google.com/file/d/plan-cres-001/view',
      lastUpdated: '2024-01-21',
      alliance: 'Crescal',
      tags: ['plan', 'investigación', '2024'],
      size: '4.1 MB',
      owner: 'Dra. Carmen Vega',
      accessLevel: 'view',
      fiscalYear: '2024',
      budgetCategory: 'Investigación',
      approvalStatus: 'approved',
      responsiblePerson: 'Dra. Carmen Vega',
      milestones: [
        'Definición de líneas - Enero 2024',
        'Aprobación de proyectos - Febrero 2024',
        'Inicio de investigación - Marzo 2024',
        'Presentación de resultados - Diciembre 2024'
      ]
    }
  ],

  UP: [
    {
      id: 'plan-up-001',
      title: 'Plan de Modernización Digital UP',
      description: 'Estrategia de actualización tecnológica institucional',
      category: 'Tecnología',
      type: 'document',
      url: 'https://drive.google.com/file/d/plan-up-001/view',
      lastUpdated: '2024-01-25',
      alliance: 'UP',
      tags: ['plan', 'modernización', 'digital'],
      size: '2.7 MB',
      owner: 'Prof. Diego Herrera',
      accessLevel: 'view',
      fiscalYear: '2024',
      budgetCategory: 'Tecnología',
      approvalStatus: 'pending',
      responsiblePerson: 'Prof. Diego Herrera',
      milestones: [
        'Análisis de necesidades - Enero 2024',
        'Definición de soluciones - Febrero 2024',
        'Aprobación presupuestaria - Marzo 2024',
        'Implementación - Abril 2024'
      ]
    }
  ],

  UCES: [
    {
      id: 'plan-uces-001',
      title: 'Plan de Calidad UCES 2024-2025',
      description: 'Estrategia para asegurar la calidad educativa',
      category: 'Calidad',
      type: 'document',
      url: 'https://drive.google.com/file/d/plan-uces-001/view',
      lastUpdated: '2024-01-20',
      alliance: 'UCES',
      tags: ['plan', 'calidad', '2024-2025'],
      size: '2.9 MB',
      owner: 'Dra. Isabel Morales',
      accessLevel: 'view',
      fiscalYear: '2024-2025',
      budgetCategory: 'Calidad',
      approvalStatus: 'approved',
      responsiblePerson: 'Dra. Isabel Morales',
      milestones: [
        'Desarrollo del plan - Enero 2024',
        'Aprobación ejecutiva - Febrero 2024',
        'Implementación - Marzo 2024',
        'Auditoría de calidad - Diciembre 2024'
      ]
    }
  ]
};

// ===== MÓDULO GESTIÓN =====
export interface ManagementDocument extends AllianceDocument {
  projectId?: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignedTo: string;
  dueDate?: string;
  progress: number;
}

export const managementData = {
  KAPIT: [
    {
      id: 'mgmt-kap-001',
      title: 'Dashboard de Proyectos KAPIT',
      description: 'Tablero en tiempo real con el estado de todos los proyectos activos',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-kap-001',
      lastUpdated: '2024-01-25',
      alliance: 'KAPIT',
      tags: ['dashboard', 'proyectos', 'tiempo-real'],
      owner: 'Ing. Roberto Silva',
      accessLevel: 'view',
      projectId: 'kap-proj-001',
      status: 'active',
      priority: 'high',
      assignedTo: 'Ing. Roberto Silva',
      dueDate: '2024-12-31',
      progress: 65
    },
    {
      id: 'mgmt-kap-002',
      title: 'Reporte de Progreso Q1 2024',
      description: 'Informe detallado del progreso de proyectos en el primer trimestre',
      category: 'Reportes',
      type: 'document',
      url: 'https://drive.google.com/file/d/mgmt-kap-002/view',
      lastUpdated: '2024-01-28',
      alliance: 'KAPIT',
      tags: ['reporte', 'progreso', 'Q1'],
      size: '1.5 MB',
      owner: 'Lic. Carlos Ruiz',
      accessLevel: 'view',
      status: 'completed',
      priority: 'medium',
      assignedTo: 'Lic. Carlos Ruiz',
      progress: 100
    }
  ],

  UNIR: [
    {
      id: 'mgmt-unir-001',
      title: 'Tablero de Gestión Académica UNIR',
      description: 'Dashboard para seguimiento de actividades académicas',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-unir-001',
      lastUpdated: '2024-01-26',
      alliance: 'UNIR',
      tags: ['dashboard', 'académico', 'gestión'],
      owner: 'Prof. Laura Torres',
      accessLevel: 'view',
      status: 'active',
      priority: 'medium',
      assignedTo: 'Prof. Laura Torres',
      progress: 75
    }
  ],

  UDD: [
    {
      id: 'mgmt-udd-001',
      title: 'Dashboard de Investigación UDD',
      description: 'Tablero para seguimiento de proyectos de investigación',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-udd-001',
      lastUpdated: '2024-01-27',
      alliance: 'UDD',
      tags: ['dashboard', 'investigación', 'proyectos'],
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view',
      status: 'active',
      priority: 'high',
      assignedTo: 'Dr. Roberto Mendoza',
      progress: 45
    }
  ],

  Crescal: [
    {
      id: 'mgmt-cres-001',
      title: 'Tablero de Colaboración Internacional',
      description: 'Dashboard para seguimiento de iniciativas internacionales',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-cres-001',
      lastUpdated: '2024-01-28',
      alliance: 'Crescal',
      tags: ['dashboard', 'colaboración', 'internacional'],
      owner: 'Lic. Fernando Castro',
      accessLevel: 'view',
      status: 'active',
      priority: 'medium',
      assignedTo: 'Lic. Fernando Castro',
      progress: 30
    }
  ],

  UP: [
    {
      id: 'mgmt-up-001',
      title: 'Dashboard de Modernización Digital UP',
      description: 'Tablero para seguimiento de proyectos de modernización',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-up-001',
      lastUpdated: '2024-01-29',
      alliance: 'UP',
      tags: ['dashboard', 'modernización', 'digital'],
      owner: 'Prof. Diego Herrera',
      accessLevel: 'view',
      status: 'active',
      priority: 'high',
      assignedTo: 'Prof. Diego Herrera',
      progress: 55
    }
  ],

  UCES: [
    {
      id: 'mgmt-uces-001',
      title: 'Dashboard de Calidad UCES',
      description: 'Tablero para seguimiento de indicadores de calidad',
      category: 'Dashboards',
      type: 'dashboard',
      url: 'https://datastudio.google.com/reporting/mgmt-uces-001',
      lastUpdated: '2024-01-30',
      alliance: 'UCES',
      tags: ['dashboard', 'calidad', 'indicadores'],
      owner: 'Dra. Isabel Morales',
      accessLevel: 'view',
      status: 'active',
      priority: 'high',
      assignedTo: 'Dra. Isabel Morales',
      progress: 45
    }
  ]
};

// Funciones de filtrado para cada módulo
export const getGovernanceDataByAlliance = (alliance: string | null) => {
  if (!alliance) {
    return Object.values(governanceData).flat();
  }
  return governanceData[alliance as keyof typeof governanceData] || [];
};

export const getPlanningDataByAlliance = (alliance: string | null) => {
  if (!alliance) {
    return Object.values(planningData).flat();
  }
  return planningData[alliance as keyof typeof planningData] || [];
};

export const getManagementDataByAlliance = (alliance: string | null) => {
  if (!alliance) {
    return Object.values(managementData).flat();
  }
  return managementData[alliance as keyof typeof managementData] || [];
};
