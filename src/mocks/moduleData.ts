/**
 * Datos mock específicos para cada módulo del sistema
 * Organizados por alianza para filtrado dinámico
 * Alianzas actualizadas: Central, UNIS, UP, UCSS, EAFIT, Uninorte, UNAB, UDD
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
  CENTRAL: [
    {
      id: 'gov-cen-001',
      title: 'Acta del Comité de Colaboración Central',
      description: 'Minuta de la reunión del comité de colaboración del 15 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-cen-001/view',
      lastUpdated: '2024-01-15',
      alliance: 'CENTRAL',
      tags: ['acta', 'comité', 'colaboración'],
      size: '1.2 MB',
      owner: 'Dr. María González',
      accessLevel: 'view' as const,
      committee: 'Comité de Colaboración',
      meetingDate: '2024-01-15',
      attendees: ['Dr. María González', 'Lic. Carlos Ruiz'],
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
      id: 'gov-cen-002',
      title: 'Acta del Comité de Finanzas Central',
      description: 'Minuta de la reunión del comité de finanzas del 25 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-cen-002/view',
      lastUpdated: '2024-01-25',
      alliance: 'CENTRAL',
      tags: ['acta', 'comité', 'finanzas'],
      size: '1.5 MB',
      owner: 'CPA Ana Martínez',
      accessLevel: 'view' as const,
      committee: 'Comité de Finanzas',
      meetingDate: '2024-01-25',
      attendees: ['CPA Ana Martínez', 'Dr. María González', 'Lic. Carlos Ruiz'],
      decisions: [
        'Aprobación del presupuesto 2024-2025',
        'Revisión de gastos del Q1',
        'Planificación de inversiones estratégicas'
      ],
      nextActions: [
        'Implementar presupuesto aprobado',
        'Monitorear gastos trimestrales',
        'Evaluar nuevas inversiones'
      ]
    },
    {
      id: 'gov-cen-003',
      title: 'Acta del Comité de Calidad Central',
      description: 'Minuta de la reunión del comité de calidad del 5 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-cen-003/view',
      lastUpdated: '2024-02-05',
      alliance: 'CENTRAL',
      tags: ['acta', 'comité', 'calidad'],
      size: '1.3 MB',
      owner: 'Ing. Patricia López',
      accessLevel: 'view' as const,
      committee: 'Comité de Calidad',
      meetingDate: '2024-02-05',
      attendees: ['Ing. Patricia López', 'Dr. María González'],
      decisions: [
        'Aprobación de estándares de calidad 2024',
        'Definición de indicadores de rendimiento',
        'Planificación de auditorías internas'
      ],
      nextActions: [
        'Implementar estándares aprobados',
        'Establecer sistema de indicadores',
        'Programar auditorías'
      ]
    }
  ],
  UNIS: [
    {
      id: 'gov-unis-001',
      title: 'Acta del Comité Académico UNIS',
      description: 'Minuta de la reunión del comité académico del 20 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unis-001/view',
      lastUpdated: '2024-01-20',
      alliance: 'UNIS',
      tags: ['acta', 'comité', 'académico'],
      size: '1.0 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      committee: 'Comité Académico',
      meetingDate: '2024-01-20',
      attendees: ['Dr. Juan Pérez'],
      decisions: [
        'Aprobación de programas de internacionalización',
        'Definición de estándares académicos',
        'Planificación de intercambios estudiantiles'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Establecer estándares definidos',
        'Coordinar intercambios'
      ]
    },
    {
      id: 'gov-unis-002',
      title: 'Acta del Comité de Investigación UNIS',
      description: 'Minuta de la reunión del comité de investigación del 30 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unis-002/view',
      lastUpdated: '2024-01-30',
      alliance: 'UNIS',
      tags: ['acta', 'comité', 'investigación'],
      size: '1.2 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      committee: 'Comité de Investigación',
      meetingDate: '2024-01-30',
      attendees: ['Dr. Juan Pérez', 'Prof. Laura Torres'],
      decisions: [
        'Aprobación de líneas de investigación 2024',
        'Definición de proyectos prioritarios',
        'Asignación de recursos de investigación'
      ],
      nextActions: [
        'Desarrollar líneas aprobadas',
        'Iniciar proyectos prioritarios',
        'Gestionar recursos asignados'
      ]
    },
    {
      id: 'gov-unis-003',
      title: 'Acta del Comité de Extensión UNIS',
      description: 'Minuta de la reunión del comité de extensión del 10 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unis-003/view',
      lastUpdated: '2024-02-10',
      alliance: 'UNIS',
      tags: ['acta', 'comité', 'extensión'],
      size: '1.1 MB',
      owner: 'Prof. Laura Torres',
      accessLevel: 'view' as const,
      committee: 'Comité de Extensión',
      meetingDate: '2024-02-10',
      attendees: ['Prof. Laura Torres', 'Dr. Juan Pérez'],
      decisions: [
        'Aprobación de programas de extensión 2024',
        'Definición de comunidades objetivo',
        'Planificación de actividades comunitarias'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Identificar comunidades objetivo',
        'Organizar actividades planificadas'
      ]
    }
  ],
  UP: [
    {
      id: 'gov-up-001',
      title: 'Acta del Comité de Calidad UP',
      description: 'Minuta de la reunión del comité de calidad del 25 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-up-001/view',
      lastUpdated: '2024-01-25',
      alliance: 'UP',
      tags: ['acta', 'comité', 'calidad'],
      size: '1.1 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      committee: 'Comité de Calidad',
      meetingDate: '2024-01-25',
      attendees: ['Ing. Ana López'],
      decisions: [
        'Aprobación del manual de procedimientos',
        'Definición de indicadores de calidad',
        'Planificación de auditorías internas'
      ],
      nextActions: [
        'Implementar manual aprobado',
        'Establecer indicadores',
        'Programar auditorías'
      ]
    },
    {
      id: 'gov-up-002',
      title: 'Acta del Comité Académico UP',
      description: 'Minuta de la reunión del comité académico del 5 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-up-002/view',
      lastUpdated: '2024-02-05',
      alliance: 'UP',
      tags: ['acta', 'comité', 'académico'],
      size: '1.3 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view' as const,
      committee: 'Comité Académico',
      meetingDate: '2024-02-05',
      attendees: ['Dr. Roberto Mendoza', 'Ing. Ana López'],
      decisions: [
        'Aprobación de programas académicos 2024',
        'Definición de metodologías de enseñanza',
        'Planificación de desarrollo docente'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Capacitar en metodologías',
        'Ejecutar plan de desarrollo docente'
      ]
    },
    {
      id: 'gov-up-003',
      title: 'Acta del Comité de Innovación UP',
      description: 'Minuta de la reunión del comité de innovación del 15 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-up-003/view',
      lastUpdated: '2024-02-15',
      alliance: 'UP',
      tags: ['acta', 'comité', 'innovación'],
      size: '1.4 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      committee: 'Comité de Innovación',
      meetingDate: '2024-02-15',
      attendees: ['Ing. Ana López', 'Dr. Roberto Mendoza'],
      decisions: [
        'Aprobación de proyectos de innovación 2024',
        'Definición de tecnologías emergentes',
        'Planificación de laboratorios de innovación'
      ],
      nextActions: [
        'Iniciar proyectos aprobados',
        'Implementar tecnologías definidas',
        'Construir laboratorios planificados'
      ]
    }
  ],
  UCSS: [
    {
      id: 'gov-ucss-001',
      title: 'Acta del Comité de Investigación UCSS',
      description: 'Minuta de la reunión del comité de investigación del 30 de enero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-ucss-001/view',
      lastUpdated: '2024-01-30',
      alliance: 'UCSS',
      tags: ['acta', 'comité', 'investigación'],
      size: '1.3 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      committee: 'Comité de Investigación',
      meetingDate: '2024-01-30',
      attendees: ['Dr. Carlos Mendoza'],
      decisions: [
        'Aprobación del protocolo de investigación',
        'Definición de líneas de investigación',
        'Asignación de recursos para proyectos'
      ],
      nextActions: [
        'Implementar protocolo aprobado',
        'Desarrollar líneas definidas',
        'Gestionar recursos asignados'
      ]
    },
    {
      id: 'gov-ucss-002',
      title: 'Acta del Comité de Posgrado UCSS',
      description: 'Minuta de la reunión del comité de posgrado del 10 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-ucss-002/view',
      lastUpdated: '2024-02-10',
      alliance: 'UCSS',
      tags: ['acta', 'comité', 'posgrado'],
      size: '1.2 MB',
      owner: 'Dr. Elena Vargas',
      accessLevel: 'view' as const,
      committee: 'Comité de Posgrado',
      meetingDate: '2024-02-10',
      attendees: ['Dr. Elena Vargas', 'Dr. Carlos Mendoza'],
      decisions: [
        'Aprobación de programas de posgrado 2024',
        'Definición de estándares de calidad',
        'Planificación de acreditaciones'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Establecer estándares definidos',
        'Iniciar proceso de acreditación'
      ]
    },
    {
      id: 'gov-ucss-003',
      title: 'Acta del Comité de Internacionalización UCSS',
      description: 'Minuta de la reunión del comité de internacionalización del 20 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-ucss-003/view',
      lastUpdated: '2024-02-20',
      alliance: 'UCSS',
      tags: ['acta', 'comité', 'internacionalización'],
      size: '1.1 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      committee: 'Comité de Internacionalización',
      meetingDate: '2024-02-20',
      attendees: ['Dr. Carlos Mendoza', 'Dr. Elena Vargas'],
      decisions: [
        'Aprobación de alianzas internacionales 2024',
        'Definición de programas de intercambio',
        'Planificación de eventos internacionales'
      ],
      nextActions: [
        'Establecer alianzas aprobadas',
        'Implementar programas de intercambio',
        'Organizar eventos planificados'
      ]
    }
  ],
  EAFIT: [
    {
      id: 'gov-eafit-001',
      title: 'Acta del Comité de Innovación EAFIT',
      description: 'Minuta de la reunión del comité de innovación del 5 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-eafit-001/view',
      lastUpdated: '2024-02-05',
      alliance: 'EAFIT',
      tags: ['acta', 'comité', 'innovación'],
      size: '1.4 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      committee: 'Comité de Innovación',
      meetingDate: '2024-02-05',
      attendees: ['Dr. Laura Torres'],
      decisions: [
        'Aprobación del plan de innovación',
        'Definición de proyectos tecnológicos',
        'Planificación de hub de innovación'
      ],
      nextActions: [
        'Implementar plan aprobado',
        'Desarrollar proyectos definidos',
        'Construir hub de innovación'
      ]
    },
    {
      id: 'gov-eafit-002',
      title: 'Acta del Comité de Emprendimiento EAFIT',
      description: 'Minuta de la reunión del comité de emprendimiento del 15 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-eafit-002/view',
      lastUpdated: '2024-02-15',
      alliance: 'EAFIT',
      tags: ['acta', 'comité', 'emprendimiento'],
      size: '1.3 MB',
      owner: 'Lic. Diego Herrera',
      accessLevel: 'view' as const,
      committee: 'Comité de Emprendimiento',
      meetingDate: '2024-02-15',
      attendees: ['Lic. Diego Herrera', 'Dr. Laura Torres'],
      decisions: [
        'Aprobación de programas de emprendimiento',
        'Definición de incubadora de startups',
        'Planificación de eventos de emprendimiento'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Construir incubadora definida',
        'Organizar eventos planificados'
      ]
    },
    {
      id: 'gov-eafit-003',
      title: 'Acta del Comité de Tecnología EAFIT',
      description: 'Minuta de la reunión del comité de tecnología del 25 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-eafit-003/view',
      lastUpdated: '2024-02-25',
      alliance: 'EAFIT',
      tags: ['acta', 'comité', 'tecnología'],
      size: '1.5 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      committee: 'Comité de Tecnología',
      meetingDate: '2024-02-25',
      attendees: ['Dr. Laura Torres', 'Lic. Diego Herrera'],
      decisions: [
        'Aprobación de infraestructura tecnológica',
        'Definición de plataformas digitales',
        'Planificación de transformación digital'
      ],
      nextActions: [
        'Implementar infraestructura aprobada',
        'Desarrollar plataformas definidas',
        'Ejecutar transformación digital'
      ]
    }
  ],
  UNINORTE: [
    {
      id: 'gov-uninorte-001',
      title: 'Acta del Comité de Extensión UNINORTE',
      description: 'Minuta de la reunión del comité de extensión del 10 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-uninorte-001/view',
      lastUpdated: '2024-02-10',
      alliance: 'UNINORTE',
      tags: ['acta', 'comité', 'extensión'],
      size: '1.2 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      committee: 'Comité de Extensión',
      meetingDate: '2024-02-10',
      attendees: ['Dr. Roberto Silva'],
      decisions: [
        'Aprobación del programa de desarrollo regional',
        'Definición de iniciativas comunitarias',
        'Planificación de vinculación social'
      ],
      nextActions: [
        'Implementar programa aprobado',
        'Desarrollar iniciativas definidas',
        'Establecer vinculación social'
      ]
    },
    {
      id: 'gov-uninorte-002',
      title: 'Acta del Comité de Desarrollo Regional UNINORTE',
      description: 'Minuta de la reunión del comité de desarrollo regional del 20 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-uninorte-002/view',
      lastUpdated: '2024-02-20',
      alliance: 'UNINORTE',
      tags: ['acta', 'comité', 'desarrollo regional'],
      size: '1.4 MB',
      owner: 'Lic. Carmen Jiménez',
      accessLevel: 'view' as const,
      committee: 'Comité de Desarrollo Regional',
      meetingDate: '2024-02-20',
      attendees: ['Lic. Carmen Jiménez', 'Dr. Roberto Silva'],
      decisions: [
        'Aprobación de proyectos de desarrollo regional',
        'Definición de comunidades objetivo',
        'Planificación de impacto social'
      ],
      nextActions: [
        'Implementar proyectos aprobados',
        'Identificar comunidades objetivo',
        'Medir impacto social'
      ]
    },
    {
      id: 'gov-uninorte-003',
      title: 'Acta del Comité de Sostenibilidad UNINORTE',
      description: 'Minuta de la reunión del comité de sostenibilidad del 1 de marzo 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-uninorte-003/view',
      lastUpdated: '2024-03-01',
      alliance: 'UNINORTE',
      tags: ['acta', 'comité', 'sostenibilidad'],
      size: '1.3 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      committee: 'Comité de Sostenibilidad',
      meetingDate: '2024-03-01',
      attendees: ['Dr. Roberto Silva', 'Lic. Carmen Jiménez'],
      decisions: [
        'Aprobación de políticas de sostenibilidad',
        'Definición de indicadores ambientales',
        'Planificación de proyectos verdes'
      ],
      nextActions: [
        'Implementar políticas aprobadas',
        'Establecer indicadores ambientales',
        'Desarrollar proyectos verdes'
      ]
    }
  ],
  UNAB: [
    {
      id: 'gov-unab-001',
      title: 'Acta del Comité de Relaciones Internacionales UNAB',
      description: 'Minuta de la reunión del comité de relaciones internacionales del 15 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unab-001/view',
      lastUpdated: '2024-02-15',
      alliance: 'UNAB',
      tags: ['acta', 'comité', 'internacional'],
      size: '1.1 MB',
      owner: 'Dr. Patricia González',
      accessLevel: 'view' as const,
      committee: 'Comité de Relaciones Internacionales',
      meetingDate: '2024-02-15',
      attendees: ['Dr. Patricia González'],
      decisions: [
        'Aprobación de la estrategia de internacionalización',
        'Definición de alianzas internacionales',
        'Planificación de programas de intercambio'
      ],
      nextActions: [
        'Implementar estrategia aprobada',
        'Establecer alianzas definidas',
        'Desarrollar programas de intercambio'
      ]
    },
    {
      id: 'gov-unab-002',
      title: 'Acta del Comité de Excelencia Académica UNAB',
      description: 'Minuta de la reunión del comité de excelencia académica del 25 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unab-002/view',
      lastUpdated: '2024-02-25',
      alliance: 'UNAB',
      tags: ['acta', 'comité', 'excelencia académica'],
      size: '1.2 MB',
      owner: 'Dr. Marcela Fuentes',
      accessLevel: 'view' as const,
      committee: 'Comité de Excelencia Académica',
      meetingDate: '2024-02-25',
      attendees: ['Dr. Marcela Fuentes', 'Dr. Patricia González'],
      decisions: [
        'Aprobación de estándares de excelencia',
        'Definición de indicadores de calidad',
        'Planificación de acreditaciones'
      ],
      nextActions: [
        'Implementar estándares aprobados',
        'Establecer indicadores de calidad',
        'Iniciar proceso de acreditación'
      ]
    },
    {
      id: 'gov-unab-003',
      title: 'Acta del Comité de Investigación UNAB',
      description: 'Minuta de la reunión del comité de investigación del 5 de marzo 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-unab-003/view',
      lastUpdated: '2024-03-05',
      alliance: 'UNAB',
      tags: ['acta', 'comité', 'investigación'],
      size: '1.3 MB',
      owner: 'Lic. Pablo Contreras',
      accessLevel: 'view' as const,
      committee: 'Comité de Investigación',
      meetingDate: '2024-03-05',
      attendees: ['Lic. Pablo Contreras', 'Dr. Marcela Fuentes'],
      decisions: [
        'Aprobación de líneas de investigación 2024',
        'Definición de proyectos prioritarios',
        'Asignación de recursos de investigación'
      ],
      nextActions: [
        'Desarrollar líneas aprobadas',
        'Iniciar proyectos prioritarios',
        'Gestionar recursos asignados'
      ]
    }
  ],
  UDD: [
    {
      id: 'gov-udd-001',
      title: 'Acta del Comité de Emprendimiento UDD',
      description: 'Minuta de la reunión del comité de emprendimiento del 20 de febrero 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-udd-001/view',
      lastUpdated: '2024-02-20',
      alliance: 'UDD',
      tags: ['acta', 'comité', 'emprendimiento'],
      size: '1.3 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      committee: 'Comité de Emprendimiento',
      meetingDate: '2024-02-20',
      attendees: ['Dr. Miguel Herrera'],
      decisions: [
        'Aprobación del programa de emprendimiento',
        'Definición de incubadora de startups',
        'Planificación de eventos de emprendimiento'
      ],
      nextActions: [
        'Implementar programa aprobado',
        'Construir incubadora definida',
        'Organizar eventos planificados'
      ]
    },
    {
      id: 'gov-udd-002',
      title: 'Acta del Comité de Innovación Social UDD',
      description: 'Minuta de la reunión del comité de innovación social del 1 de marzo 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-udd-002/view',
      lastUpdated: '2024-03-01',
      alliance: 'UDD',
      tags: ['acta', 'comité', 'innovación social'],
      size: '1.4 MB',
      owner: 'Lic. Valentina Muñoz',
      accessLevel: 'view' as const,
      committee: 'Comité de Innovación Social',
      meetingDate: '2024-03-01',
      attendees: ['Lic. Valentina Muñoz', 'Dr. Miguel Herrera'],
      decisions: [
        'Aprobación de proyectos de innovación social',
        'Definición de comunidades objetivo',
        'Planificación de impacto social'
      ],
      nextActions: [
        'Implementar proyectos aprobados',
        'Identificar comunidades objetivo',
        'Medir impacto social'
      ]
    },
    {
      id: 'gov-udd-003',
      title: 'Acta del Comité de Desarrollo Estudiantil UDD',
      description: 'Minuta de la reunión del comité de desarrollo estudiantil del 10 de marzo 2024',
      category: 'Actas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/gov-udd-003/view',
      lastUpdated: '2024-03-10',
      alliance: 'UDD',
      tags: ['acta', 'comité', 'desarrollo estudiantil'],
      size: '1.2 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      committee: 'Comité de Desarrollo Estudiantil',
      meetingDate: '2024-03-10',
      attendees: ['Dr. Miguel Herrera', 'Lic. Valentina Muñoz'],
      decisions: [
        'Aprobación de programas de desarrollo estudiantil',
        'Definición de competencias clave',
        'Planificación de actividades extracurriculares'
      ],
      nextActions: [
        'Implementar programas aprobados',
        'Desarrollar competencias definidas',
        'Organizar actividades planificadas'
      ]
    }
  ]
};

// ===== MÓDULO PLANEACIÓN =====
export interface PlanningDocument extends AllianceDocument {
  planningPeriod: string;
  strategicObjectives: string[];
  keyInitiatives: string[];
  successMetrics: string[];
  timeline: string;
}

export const planningData = {
  CENTRAL: [
    {
      id: 'plan-cen-001',
      title: 'Plan Estratégico Central 2024-2027',
      description: 'Plan estratégico integral para la alianza central con objetivos a 3 años',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-cen-001/view',
      lastUpdated: '2024-01-15',
      alliance: 'CENTRAL',
      tags: ['plan estratégico', '2024-2027', 'objetivos'],
      size: '2.5 MB',
      owner: 'Dr. María González',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2027',
      strategicObjectives: [
        'Consolidar liderazgo en innovación educativa',
        'Expandir alianzas internacionales',
        'Implementar tecnologías emergentes'
      ],
      keyInitiatives: [
        'Programa de transformación digital',
        'Hub de innovación educativa',
        'Red de alianzas estratégicas'
      ],
      successMetrics: [
        '30% incremento en proyectos de innovación',
        '50% más alianzas internacionales',
        '90% adopción de tecnologías digitales'
      ],
      timeline: '36 meses'
    },
    {
      id: 'plan-cen-002',
      title: 'Plan de Desarrollo de Capital Humano Central',
      description: 'Estrategia integral para el desarrollo profesional del equipo central',
      category: 'Planes de Desarrollo',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-cen-002/view',
      lastUpdated: '2024-01-20',
      alliance: 'CENTRAL',
      tags: ['capital humano', 'desarrollo profesional', 'capacitación'],
      size: '1.8 MB',
      owner: 'Lic. Carlos Ruiz',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Fortalecer competencias digitales del equipo',
        'Implementar programa de liderazgo',
        'Desarrollar habilidades de innovación'
      ],
      keyInitiatives: [
        'Programa de certificaciones digitales',
        'Academia de liderazgo',
        'Workshops de innovación'
      ],
      successMetrics: [
        '100% del equipo certificado digitalmente',
        '80% de líderes desarrollados',
        '95% de satisfacción en capacitaciones'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-cen-003',
      title: 'Plan de Expansión Geográfica Central',
      description: 'Estrategia para expandir la presencia de la alianza central en nuevas regiones',
      category: 'Planes de Expansión',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-cen-003/view',
      lastUpdated: '2024-01-25',
      alliance: 'CENTRAL',
      tags: ['expansión geográfica', 'nuevas regiones', 'crecimiento'],
      size: '2.1 MB',
      owner: 'Dr. María González',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Establecer presencia en 5 nuevas regiones',
        'Desarrollar modelos de replicación',
        'Crear centros de excelencia regionales'
      ],
      keyInitiatives: [
        'Análisis de mercados objetivo',
        'Desarrollo de modelos de negocio',
        'Establecimiento de alianzas locales'
      ],
      successMetrics: [
        '5 nuevas regiones cubiertas',
        '3 modelos de replicación exitosos',
        '10 centros de excelencia operativos'
      ],
      timeline: '24 meses'
    }
  ],
  UNIS: [
    {
      id: 'plan-unis-001',
      title: 'Plan Estratégico UNIS 2024-2026',
      description: 'Plan estratégico de la Universidad del Istmo con enfoque en excelencia académica',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unis-001/view',
      lastUpdated: '2024-01-10',
      alliance: 'UNIS',
      tags: ['plan estratégico', 'excelencia académica', '2024-2026'],
      size: '2.2 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Alcanzar acreditación internacional',
        'Implementar programas de doble titulación',
        'Desarrollar investigación de impacto'
      ],
      keyInitiatives: [
        'Proceso de acreditación internacional',
        'Alianzas para doble titulación',
        'Centro de investigación avanzada'
      ],
      successMetrics: [
        'Acreditación internacional obtenida',
        '10 programas de doble titulación',
        '20 publicaciones de alto impacto'
      ],
      timeline: '24 meses'
    },
    {
      id: 'plan-unis-002',
      title: 'Plan de Internacionalización UNIS',
      description: 'Estrategia para posicionar UNIS como universidad de referencia internacional',
      category: 'Planes de Internacionalización',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unis-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNIS',
      tags: ['internacionalización', 'alumnos extranjeros', 'intercambios'],
      size: '1.9 MB',
      owner: 'Prof. Laura Torres',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Aumentar matrícula de estudiantes internacionales',
        'Establecer alianzas con universidades top 100',
        'Implementar programas de intercambio'
      ],
      keyInitiatives: [
        'Programa de reclutamiento internacional',
        'Alianzas estratégicas globales',
        'Programa de intercambio estudiantil'
      ],
      successMetrics: [
        '15% de estudiantes internacionales',
        '5 alianzas con top 100 universidades',
        '100 estudiantes en intercambio anual'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-unis-003',
      title: 'Plan de Innovación Pedagógica UNIS',
      description: 'Estrategia para implementar metodologías de enseñanza innovadoras',
      category: 'Planes de Innovación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unis-003/view',
      lastUpdated: '2024-01-20',
      alliance: 'UNIS',
      tags: ['innovación pedagógica', 'metodologías', 'enseñanza'],
      size: '1.7 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Implementar aprendizaje basado en proyectos',
        'Desarrollar competencias digitales',
        'Fomentar pensamiento crítico'
      ],
      keyInitiatives: [
        'Capacitación en metodologías activas',
        'Laboratorio de innovación educativa',
        'Programa de desarrollo docente'
      ],
      successMetrics: [
        '80% de cursos con metodologías activas',
        '100% de docentes capacitados digitalmente',
        'Mejora del 25% en pensamiento crítico'
      ],
      timeline: '18 meses'
    }
  ],
  UP: [
    {
      id: 'plan-up-001',
      title: 'Plan Estratégico UP 2024-2027',
      description: 'Plan estratégico de la Universidad Panamericana con enfoque en calidad y excelencia',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-up-001/view',
      lastUpdated: '2024-01-12',
      alliance: 'UP',
      tags: ['plan estratégico', 'calidad', 'excelencia', '2024-2027'],
      size: '2.3 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2027',
      strategicObjectives: [
        'Mantener acreditación de excelencia',
        'Desarrollar programas de posgrado',
        'Fortalecer investigación aplicada'
      ],
      keyInitiatives: [
        'Proceso de reacreditación',
        'Desarrollo de maestrías',
        'Centro de investigación aplicada'
      ],
      successMetrics: [
        'Reacreditación exitosa',
        '5 nuevas maestrías',
        '15 proyectos de investigación aplicada'
      ],
      timeline: '36 meses'
    },
    {
      id: 'plan-up-002',
      title: 'Plan de Desarrollo Tecnológico UP',
      description: 'Estrategia para modernizar la infraestructura tecnológica de la universidad',
      category: 'Planes Tecnológicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-up-002/view',
      lastUpdated: '2024-01-18',
      alliance: 'UP',
      tags: ['desarrollo tecnológico', 'infraestructura', 'modernización'],
      size: '2.0 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Modernizar laboratorios de computación',
        'Implementar plataforma de aprendizaje virtual',
        'Desarrollar aplicaciones móviles'
      ],
      keyInitiatives: [
        'Renovación de laboratorios',
        'Plataforma LMS avanzada',
        'Desarrollo de apps móviles'
      ],
      successMetrics: [
        '100% de laboratorios modernizados',
        'Plataforma LMS operativa',
        '3 apps móviles funcionales'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-up-003',
      title: 'Plan de Sostenibilidad UP',
      description: 'Estrategia para convertir UP en una universidad sostenible y responsable',
      category: 'Planes de Sostenibilidad',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-up-003/view',
      lastUpdated: '2024-01-25',
      alliance: 'UP',
      tags: ['sostenibilidad', 'responsabilidad social', 'medio ambiente'],
      size: '1.8 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Reducir huella de carbono',
        'Implementar energías renovables',
        'Fomentar cultura sostenible'
      ],
      keyInitiatives: [
        'Auditoría de huella de carbono',
        'Instalación de paneles solares',
        'Programa de concienciación ambiental'
      ],
      successMetrics: [
        '30% reducción de huella de carbono',
        '20% de energía renovable',
        '90% de comunidad consciente'
      ],
      timeline: '24 meses'
    }
  ],
  UCSS: [
    {
      id: 'plan-ucss-001',
      title: 'Plan Estratégico UCSS 2024-2026',
      description: 'Plan estratégico de la Universidad Católica San Pablo con enfoque en investigación',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-ucss-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UCSS',
      tags: ['plan estratégico', 'investigación', '2024-2026'],
      size: '2.1 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Fortalecer investigación en ciencias sociales',
        'Desarrollar programas de doctorado',
        'Establecer alianzas internacionales'
      ],
      keyInitiatives: [
        'Centro de investigación en ciencias sociales',
        'Desarrollo de doctorados',
        'Alianzas con universidades europeas'
      ],
      successMetrics: [
        '10 proyectos de investigación activos',
        '3 programas de doctorado',
        '5 alianzas internacionales'
      ],
      timeline: '24 meses'
    },
    {
      id: 'plan-ucss-002',
      title: 'Plan de Posgrado UCSS',
      description: 'Estrategia para expandir y fortalecer la oferta de posgrado',
      category: 'Planes de Posgrado',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-ucss-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UCSS',
      tags: ['posgrado', 'maestrías', 'doctorados'],
      size: '1.9 MB',
      owner: 'Dr. Elena Vargas',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Expandir oferta de maestrías',
        'Desarrollar programas de doctorado',
        'Implementar modalidades híbridas'
      ],
      keyInitiatives: [
        'Diseño de nuevas maestrías',
        'Desarrollo de doctorados',
        'Plataforma de aprendizaje híbrido'
      ],
      successMetrics: [
        '5 nuevas maestrías',
        '2 programas de doctorado',
        '100% de programas híbridos'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-ucss-003',
      title: 'Plan de Internacionalización UCSS',
      description: 'Estrategia para posicionar UCSS en el contexto internacional',
      category: 'Planes de Internacionalización',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-ucss-003/view',
      lastUpdated: '2024-01-22',
      alliance: 'UCSS',
      tags: ['internacionalización', 'cooperación', 'intercambios'],
      size: '1.7 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Establecer alianzas con universidades europeas',
        'Implementar programas de intercambio',
        'Desarrollar investigación conjunta'
      ],
      keyInitiatives: [
        'Misiones de exploración a Europa',
        'Programa de intercambio estudiantil',
        'Proyectos de investigación conjunta'
      ],
      successMetrics: [
        '10 alianzas con universidades europeas',
        '50 estudiantes en intercambio anual',
        '5 proyectos de investigación conjunta'
      ],
      timeline: '24 meses'
    }
  ],
  EAFIT: [
    {
      id: 'plan-eafit-001',
      title: 'Plan Estratégico EAFIT 2024-2027',
      description: 'Plan estratégico de EAFIT con enfoque en innovación y emprendimiento',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-eafit-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'EAFIT',
      tags: ['plan estratégico', 'innovación', 'emprendimiento', '2024-2027'],
      size: '2.4 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2027',
      strategicObjectives: [
        'Posicionarse como hub de innovación',
        'Desarrollar ecosistema emprendedor',
        'Implementar tecnologías emergentes'
      ],
      keyInitiatives: [
        'Hub de innovación EAFIT',
        'Incubadora de startups',
        'Laboratorio de tecnologías emergentes'
      ],
      successMetrics: [
        'Hub de innovación operativo',
        '20 startups incubadas',
        '10 tecnologías emergentes implementadas'
      ],
      timeline: '36 meses'
    },
    {
      id: 'plan-eafit-002',
      title: 'Plan de Transformación Digital EAFIT',
      description: 'Estrategia para liderar la transformación digital en educación superior',
      category: 'Planes de Transformación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-eafit-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'EAFIT',
      tags: ['transformación digital', 'tecnología', 'educación'],
      size: '2.2 MB',
      owner: 'Lic. Diego Herrera',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Implementar inteligencia artificial en educación',
        'Desarrollar plataformas digitales avanzadas',
        'Crear experiencias de aprendizaje inmersivas'
      ],
      keyInitiatives: [
        'IA para personalización del aprendizaje',
        'Plataforma de realidad virtual',
        'Laboratorio de experiencias inmersivas'
      ],
      successMetrics: [
        'IA implementada en 50% de cursos',
        'Plataforma VR operativa',
        '10 experiencias inmersivas desarrolladas'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-eafit-003',
      title: 'Plan de Sostenibilidad EAFIT',
      description: 'Estrategia para convertir EAFIT en referente de sostenibilidad universitaria',
      category: 'Planes de Sostenibilidad',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-eafit-003/view',
      lastUpdated: '2024-01-18',
      alliance: 'EAFIT',
      tags: ['sostenibilidad', 'medio ambiente', 'responsabilidad'],
      size: '1.9 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Campus 100% sostenible',
        'Implementar economía circular',
        'Fomentar movilidad sostenible'
      ],
      keyInitiatives: [
        'Campus carbono neutral',
        'Sistema de economía circular',
        'Programa de movilidad sostenible'
      ],
      successMetrics: [
        'Campus carbono neutral',
        '80% de residuos reciclados',
        '60% de movilidad sostenible'
      ],
      timeline: '24 meses'
    }
  ],
  UNINORTE: [
    {
      id: 'plan-uninorte-001',
      title: 'Plan Estratégico UNINORTE 2024-2026',
      description: 'Plan estratégico de la Universidad del Norte con enfoque en desarrollo regional',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-uninorte-001/view',
      lastUpdated: '2024-01-10',
      alliance: 'UNINORTE',
      tags: ['plan estratégico', 'desarrollo regional', '2024-2026'],
      size: '2.0 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Fortalecer impacto en desarrollo regional',
        'Implementar programas de extensión',
        'Desarrollar investigación aplicada local'
      ],
      keyInitiatives: [
        'Centro de desarrollo regional',
        'Programas de extensión comunitaria',
        'Investigación aplicada local'
      ],
      successMetrics: [
        'Centro de desarrollo regional operativo',
        '20 programas de extensión activos',
        '15 proyectos de investigación local'
      ],
      timeline: '24 meses'
    },
    {
      id: 'plan-uninorte-002',
      title: 'Plan de Vinculación Social UNINORTE',
      description: 'Estrategia para fortalecer la vinculación con la comunidad local',
      category: 'Planes de Vinculación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-uninorte-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNINORTE',
      tags: ['vinculación social', 'comunidad', 'impacto social'],
      size: '1.8 MB',
      owner: 'Lic. Carmen Jiménez',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Fortalecer programas de servicio comunitario',
        'Desarrollar alianzas con organizaciones locales',
        'Implementar proyectos de impacto social'
      ],
      keyInitiatives: [
        'Programa de servicio comunitario',
        'Alianzas con ONGs locales',
        'Proyectos de impacto social'
      ],
      successMetrics: [
        '1000 horas de servicio comunitario',
        '10 alianzas con organizaciones locales',
        '5 proyectos de impacto social'
      ],
      timeline: '18 meses'
    },
    {
      id: 'plan-uninorte-003',
      title: 'Plan de Sostenibilidad Ambiental UNINORTE',
      description: 'Estrategia para implementar prácticas sostenibles en el campus',
      category: 'Planes de Sostenibilidad',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-uninorte-003/view',
      lastUpdated: '2024-01-20',
      alliance: 'UNINORTE',
      tags: ['sostenibilidad ambiental', 'medio ambiente', 'campus verde'],
      size: '1.7 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Implementar prácticas sostenibles en campus',
        'Reducir consumo de recursos',
        'Fomentar cultura ambiental'
      ],
      keyInitiatives: [
        'Auditoría ambiental del campus',
        'Programa de eficiencia energética',
        'Campaña de concienciación ambiental'
      ],
      successMetrics: [
        '30% reducción de consumo energético',
        '50% de residuos reciclados',
        '90% de comunidad consciente'
      ],
      timeline: '24 meses'
    }
  ],
  UNAB: [
    {
      id: 'plan-unab-001',
      title: 'Plan Estratégico UNAB 2024-2027',
      description: 'Plan estratégico de la Universidad Andrés Bello con enfoque en excelencia académica',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unab-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UNAB',
      tags: ['plan estratégico', 'excelencia académica', '2024-2027'],
      size: '2.3 MB',
      owner: 'Dr. Patricia González',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2027',
      strategicObjectives: [
        'Mantener acreditación de excelencia',
        'Desarrollar programas de investigación',
        'Fortalecer internacionalización'
      ],
      keyInitiatives: [
        'Proceso de reacreditación',
        'Centro de investigación avanzada',
        'Programa de internacionalización'
      ],
      successMetrics: [
        'Reacreditación exitosa',
        '20 proyectos de investigación activos',
        '15% de estudiantes internacionales'
      ],
      timeline: '36 meses'
    },
    {
      id: 'plan-unab-002',
      title: 'Plan de Investigación UNAB',
      description: 'Estrategia para fortalecer la investigación y desarrollo de la universidad',
      category: 'Planes de Investigación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unab-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNAB',
      tags: ['investigación', 'desarrollo', 'ciencia'],
      size: '2.1 MB',
      owner: 'Dr. Marcela Fuentes',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Fortalecer líneas de investigación prioritarias',
        'Desarrollar alianzas de investigación',
        'Implementar programas de doctorado'
      ],
      keyInitiatives: [
        'Líneas de investigación prioritarias',
        'Alianzas con centros de investigación',
        'Programas de doctorado'
      ],
      successMetrics: [
        '5 líneas de investigación fortalecidas',
        '10 alianzas de investigación',
        '3 programas de doctorado'
      ],
      timeline: '24 meses'
    },
    {
      id: 'plan-unab-003',
      title: 'Plan de Innovación Pedagógica UNAB',
      description: 'Estrategia para implementar metodologías de enseñanza innovadoras',
      category: 'Planes de Innovación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-unab-003/view',
      lastUpdated: '2024-01-22',
      alliance: 'UNAB',
      tags: ['innovación pedagógica', 'metodologías', 'enseñanza'],
      size: '1.8 MB',
      owner: 'Lic. Pablo Contreras',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Implementar aprendizaje basado en competencias',
        'Desarrollar tecnologías educativas',
        'Fomentar innovación docente'
      ],
      keyInitiatives: [
        'Programa de competencias',
        'Laboratorio de tecnologías educativas',
        'Programa de innovación docente'
      ],
      successMetrics: [
        '80% de cursos con enfoque por competencias',
        '10 tecnologías educativas implementadas',
        '100% de docentes innovadores'
      ],
      timeline: '18 meses'
    }
  ],
  UDD: [
    {
      id: 'plan-udd-001',
      title: 'Plan Estratégico UDD 2024-2027',
      description: 'Plan estratégico de la Universidad del Desarrollo con enfoque en emprendimiento',
      category: 'Planes Estratégicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-udd-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'UDD',
      tags: ['plan estratégico', 'emprendimiento', 'innovación', '2024-2027'],
      size: '2.4 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2027',
      strategicObjectives: [
        'Posicionarse como universidad emprendedora',
        'Desarrollar ecosistema de innovación',
        'Implementar programas de impacto social'
      ],
      keyInitiatives: [
        'Centro de emprendimiento UDD',
        'Ecosistema de innovación',
        'Programas de impacto social'
      ],
      successMetrics: [
        'Centro de emprendimiento operativo',
        '50 startups desarrolladas',
        '10 programas de impacto social'
      ],
      timeline: '36 meses'
    },
    {
      id: 'plan-udd-002',
      title: 'Plan de Innovación Social UDD',
      description: 'Estrategia para desarrollar soluciones innovadoras a problemas sociales',
      category: 'Planes de Innovación Social',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-udd-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UDD',
      tags: ['innovación social', 'problemas sociales', 'soluciones'],
      size: '2.0 MB',
      owner: 'Lic. Valentina Muñoz',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2026',
      strategicObjectives: [
        'Desarrollar soluciones a problemas sociales',
        'Fomentar emprendimiento social',
        'Crear alianzas con organizaciones sociales'
      ],
      keyInitiatives: [
        'Laboratorio de innovación social',
        'Programa de emprendimiento social',
        'Alianzas con organizaciones sociales'
      ],
      successMetrics: [
        '20 soluciones desarrolladas',
        '30 emprendedores sociales',
        '15 alianzas con organizaciones'
      ],
      timeline: '24 meses'
    },
    {
      id: 'plan-udd-003',
      title: 'Plan de Desarrollo Estudiantil UDD',
      description: 'Estrategia para el desarrollo integral de los estudiantes',
      category: 'Planes de Desarrollo',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/plan-udd-003/view',
      lastUpdated: '2024-01-18',
      alliance: 'UDD',
      tags: ['desarrollo estudiantil', 'formación integral', 'competencias'],
      size: '1.9 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      planningPeriod: '2024-2025',
      strategicObjectives: [
        'Desarrollar competencias transversales',
        'Fomentar liderazgo estudiantil',
        'Implementar programas de bienestar'
      ],
      keyInitiatives: [
        'Programa de competencias transversales',
        'Academia de liderazgo estudiantil',
        'Programa de bienestar integral'
      ],
      successMetrics: [
        '100% de estudiantes con competencias transversales',
        '50 líderes estudiantiles desarrollados',
        '95% de satisfacción en bienestar'
      ],
      timeline: '18 meses'
    }
  ]
};

// ===== MÓDULO GESTIÓN =====
export interface ManagementDocument extends AllianceDocument {
  processType: string;
  responsibleDepartment: string;
  approvalWorkflow: string[];
  complianceRequirements: string[];
  reviewFrequency: string;
}

export const managementData = {
  CENTRAL: [
    {
      id: 'mgmt-cen-001',
      title: 'Procedimiento de Gestión de Calidad Central',
      description: 'Protocolo integral para el control de calidad en todos los procesos centrales',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-cen-001/view',
      lastUpdated: '2024-01-10',
      alliance: 'CENTRAL',
      tags: ['calidad', 'procedimientos', 'control'],
      size: '1.8 MB',
      owner: 'Ing. Patricia López',
      accessLevel: 'view' as const,
      processType: 'Control de Calidad',
      responsibleDepartment: 'Departamento de Calidad',
      approvalWorkflow: [
        'Revisión técnica',
        'Aprobación del gerente',
        'Validación del director'
      ],
      complianceRequirements: [
        'ISO 9001:2015',
        'Estándares internos de calidad',
        'Regulaciones sectoriales'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-cen-002',
      title: 'Procedimiento de Gestión Financiera Central',
      description: 'Protocolo para el manejo de recursos financieros y presupuestarios',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-cen-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'CENTRAL',
      tags: ['finanzas', 'presupuesto', 'recursos'],
      size: '2.1 MB',
      owner: 'CPA Ana Martínez',
      accessLevel: 'view' as const,
      processType: 'Gestión Financiera',
      responsibleDepartment: 'Departamento Financiero',
      approvalWorkflow: [
        'Análisis presupuestario',
        'Aprobación del CFO',
        'Validación del comité ejecutivo'
      ],
      complianceRequirements: [
        'Normas contables internacionales',
        'Regulaciones fiscales',
        'Políticas internas de gastos'
      ],
      reviewFrequency: 'Mensual'
    },
    {
      id: 'mgmt-cen-003',
      title: 'Procedimiento de Gestión de Recursos Humanos Central',
      description: 'Protocolo para el manejo integral del capital humano de la alianza',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-cen-003/view',
      lastUpdated: '2024-01-20',
      alliance: 'CENTRAL',
      tags: ['recursos humanos', 'personal', 'desarrollo'],
      size: '1.9 MB',
      owner: 'Lic. Carlos Ruiz',
      accessLevel: 'view' as const,
      processType: 'Gestión de RRHH',
      responsibleDepartment: 'Departamento de RRHH',
      approvalWorkflow: [
        'Evaluación del candidato',
        'Aprobación del gerente de área',
        'Validación del director de RRHH'
      ],
      complianceRequirements: [
        'Ley del trabajo',
        'Normas de seguridad laboral',
        'Políticas internas de contratación'
      ],
      reviewFrequency: 'Semestral'
    }
  ],
  UNIS: [
    {
      id: 'mgmt-unis-001',
      title: 'Procedimiento de Gestión Académica UNIS',
      description: 'Protocolo para el manejo de procesos académicos y curriculares',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unis-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UNIS',
      tags: ['académico', 'curriculum', 'evaluación'],
      size: '1.7 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      processType: 'Gestión Académica',
      responsibleDepartment: 'Vicerrectoría Académica',
      approvalWorkflow: [
        'Revisión del departamento',
        'Aprobación del decano',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Estándares de acreditación',
        'Normas educativas nacionales',
        'Políticas institucionales'
      ],
      reviewFrequency: 'Anual'
    },
    {
      id: 'mgmt-unis-002',
      title: 'Procedimiento de Gestión de Investigación UNIS',
      description: 'Protocolo para el manejo de proyectos y actividades de investigación',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unis-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UNIS',
      tags: ['investigación', 'proyectos', 'desarrollo'],
      size: '2.0 MB',
      owner: 'Prof. Laura Torres',
      accessLevel: 'view' as const,
      processType: 'Gestión de Investigación',
      responsibleDepartment: 'Vicerrectoría de Investigación',
      approvalWorkflow: [
        'Evaluación científica',
        'Aprobación del comité de investigación',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Normas éticas de investigación',
        'Estándares de publicación',
        'Regulaciones de financiamiento'
      ],
      reviewFrequency: 'Semestral'
    },
    {
      id: 'mgmt-unis-003',
      title: 'Procedimiento de Gestión de Extensión UNIS',
      description: 'Protocolo para el manejo de actividades de extensión y vinculación',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unis-003/view',
      lastUpdated: '2024-01-16',
      alliance: 'UNIS',
      tags: ['extensión', 'vinculación', 'comunidad'],
      size: '1.6 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      processType: 'Gestión de Extensión',
      responsibleDepartment: 'Vicerrectoría de Extensión',
      approvalWorkflow: [
        'Evaluación de impacto',
        'Aprobación del director de extensión',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Normas de responsabilidad social',
        'Estándares de impacto comunitario',
        'Políticas de vinculación'
      ],
      reviewFrequency: 'Trimestral'
    }
  ],
  UP: [
    {
      id: 'mgmt-up-001',
      title: 'Procedimiento de Gestión de Calidad UP',
      description: 'Protocolo para el control y mejora continua de la calidad institucional',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-up-001/view',
      lastUpdated: '2024-01-10',
      alliance: 'UP',
      tags: ['calidad', 'mejora continua', 'estándares'],
      size: '1.9 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      processType: 'Gestión de Calidad',
      responsibleDepartment: 'Departamento de Calidad',
      approvalWorkflow: [
        'Auditoría interna',
        'Aprobación del gerente de calidad',
        'Validación del director general'
      ],
      complianceRequirements: [
        'ISO 9001:2015',
        'Estándares de acreditación',
        'Normas institucionales'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-up-002',
      title: 'Procedimiento de Gestión Tecnológica UP',
      description: 'Protocolo para el manejo de infraestructura y sistemas tecnológicos',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-up-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UP',
      tags: ['tecnología', 'sistemas', 'infraestructura'],
      size: '2.2 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view' as const,
      processType: 'Gestión Tecnológica',
      responsibleDepartment: 'Departamento de TI',
      approvalWorkflow: [
        'Análisis técnico',
        'Aprobación del CTO',
        'Validación del comité tecnológico'
      ],
      complianceRequirements: [
        'Estándares de seguridad informática',
        'Normas de protección de datos',
        'Políticas de uso tecnológico'
      ],
      reviewFrequency: 'Mensual'
    },
    {
      id: 'mgmt-up-003',
      title: 'Procedimiento de Gestión Ambiental UP',
      description: 'Protocolo para el manejo de aspectos ambientales y sostenibilidad',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-up-003/view',
      lastUpdated: '2024-01-20',
      alliance: 'UP',
      tags: ['ambiental', 'sostenibilidad', 'ecología'],
      size: '1.8 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      processType: 'Gestión Ambiental',
      responsibleDepartment: 'Departamento de Sostenibilidad',
      approvalWorkflow: [
        'Evaluación de impacto ambiental',
        'Aprobación del gerente ambiental',
        'Validación del comité de sostenibilidad'
      ],
      complianceRequirements: [
        'ISO 14001:2015',
        'Normas ambientales nacionales',
        'Políticas de sostenibilidad'
      ],
      reviewFrequency: 'Semestral'
    }
  ],
  UCSS: [
    {
      id: 'mgmt-ucss-001',
      title: 'Procedimiento de Gestión de Investigación UCSS',
      description: 'Protocolo para el manejo de proyectos y actividades de investigación',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-ucss-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UCSS',
      tags: ['investigación', 'proyectos', 'desarrollo científico'],
      size: '2.1 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      processType: 'Gestión de Investigación',
      responsibleDepartment: 'Vicerrectoría de Investigación',
      approvalWorkflow: [
        'Evaluación científica',
        'Aprobación del comité de investigación',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Normas éticas de investigación',
        'Estándares de publicación científica',
        'Regulaciones de financiamiento'
      ],
      reviewFrequency: 'Semestral'
    },
    {
      id: 'mgmt-ucss-002',
      title: 'Procedimiento de Gestión de Posgrado UCSS',
      description: 'Protocolo para el manejo de programas de maestría y doctorado',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-ucss-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UCSS',
      tags: ['posgrado', 'maestrías', 'doctorados'],
      size: '1.9 MB',
      owner: 'Dr. Elena Vargas',
      accessLevel: 'view' as const,
      processType: 'Gestión de Posgrado',
      responsibleDepartment: 'Vicerrectoría de Posgrado',
      approvalWorkflow: [
        'Evaluación académica',
        'Aprobación del comité de posgrado',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Estándares de acreditación de posgrado',
        'Normas de calidad académica',
        'Políticas de admisión'
      ],
      reviewFrequency: 'Anual'
    },
    {
      id: 'mgmt-ucss-003',
      title: 'Procedimiento de Gestión de Internacionalización UCSS',
      description: 'Protocolo para el manejo de alianzas y programas internacionales',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-ucss-003/view',
      lastUpdated: '2024-01-16',
      alliance: 'UCSS',
      tags: ['internacionalización', 'alianzas', 'cooperación'],
      size: '1.7 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      processType: 'Gestión de Internacionalización',
      responsibleDepartment: 'Oficina de Relaciones Internacionales',
      approvalWorkflow: [
        'Evaluación de alianza',
        'Aprobación del director de relaciones internacionales',
        'Validación del rector'
      ],
      complianceRequirements: [
        'Normas de cooperación internacional',
        'Estándares de calidad internacional',
        'Políticas de movilidad'
      ],
      reviewFrequency: 'Trimestral'
    }
  ],
  EAFIT: [
    {
      id: 'mgmt-eafit-001',
      title: 'Procedimiento de Gestión de Innovación EAFIT',
      description: 'Protocolo para el manejo de proyectos y procesos de innovación',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-eafit-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'EAFIT',
      tags: ['innovación', 'proyectos', 'desarrollo'],
      size: '2.3 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      processType: 'Gestión de Innovación',
      responsibleDepartment: 'Centro de Innovación',
      approvalWorkflow: [
        'Evaluación de innovación',
        'Aprobación del director de innovación',
        'Validación del comité de innovación'
      ],
      complianceRequirements: [
        'Normas de propiedad intelectual',
        'Estándares de innovación tecnológica',
        'Políticas de transferencia de tecnología'
      ],
      reviewFrequency: 'Mensual'
    },
    {
      id: 'mgmt-eafit-002',
      title: 'Procedimiento de Gestión de Emprendimiento EAFIT',
      description: 'Protocolo para el manejo de programas y proyectos de emprendimiento',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-eafit-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'EAFIT',
      tags: ['emprendimiento', 'startups', 'incubación'],
      size: '2.0 MB',
      owner: 'Lic. Diego Herrera',
      accessLevel: 'view' as const,
      processType: 'Gestión de Emprendimiento',
      responsibleDepartment: 'Centro de Emprendimiento',
      approvalWorkflow: [
        'Evaluación de proyecto',
        'Aprobación del director de emprendimiento',
        'Validación del comité de emprendimiento'
      ],
      complianceRequirements: [
        'Normas de incubación de empresas',
        'Estándares de evaluación de startups',
        'Políticas de financiamiento'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-eafit-003',
      title: 'Procedimiento de Gestión de Transformación Digital EAFIT',
      description: 'Protocolo para el manejo de procesos de transformación digital',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-eafit-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'EAFIT',
      tags: ['transformación digital', 'tecnología', 'digitalización'],
      size: '2.1 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      processType: 'Gestión de Transformación Digital',
      responsibleDepartment: 'Departamento de Transformación Digital',
      approvalWorkflow: [
        'Análisis de impacto',
        'Aprobación del director de transformación digital',
        'Validación del comité ejecutivo'
      ],
      complianceRequirements: [
        'Estándares de seguridad digital',
        'Normas de protección de datos',
        'Políticas de gobernanza digital'
      ],
      reviewFrequency: 'Mensual'
    }
  ],
  UNINORTE: [
    {
      id: 'mgmt-uninorte-001',
      title: 'Procedimiento de Gestión de Desarrollo Regional UNINORTE',
      description: 'Protocolo para el manejo de proyectos de desarrollo regional',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-uninorte-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UNINORTE',
      tags: ['desarrollo regional', 'proyectos', 'comunidad'],
      size: '1.9 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      processType: 'Gestión de Desarrollo Regional',
      responsibleDepartment: 'Centro de Desarrollo Regional',
      approvalWorkflow: [
        'Evaluación de impacto regional',
        'Aprobación del director de desarrollo regional',
        'Validación del comité regional'
      ],
      complianceRequirements: [
        'Normas de desarrollo sostenible',
        'Estándares de impacto social',
        'Políticas de desarrollo regional'
      ],
      reviewFrequency: 'Semestral'
    },
    {
      id: 'mgmt-uninorte-002',
      title: 'Procedimiento de Gestión de Vinculación Social UNINORTE',
      description: 'Protocolo para el manejo de programas de vinculación con la comunidad',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-uninorte-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UNINORTE',
      tags: ['vinculación social', 'comunidad', 'servicio'],
      size: '1.8 MB',
      owner: 'Lic. Carmen Jiménez',
      accessLevel: 'view' as const,
      processType: 'Gestión de Vinculación Social',
      responsibleDepartment: 'Departamento de Vinculación Social',
      approvalWorkflow: [
        'Evaluación de necesidad comunitaria',
        'Aprobación del director de vinculación',
        'Validación del comité social'
      ],
      complianceRequirements: [
        'Normas de responsabilidad social',
        'Estándares de servicio comunitario',
        'Políticas de vinculación'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-uninorte-003',
      title: 'Procedimiento de Gestión Ambiental UNINORTE',
      description: 'Protocolo para el manejo de aspectos ambientales del campus',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-uninorte-003/view',
      lastUpdated: '2024-01-16',
      alliance: 'UNINORTE',
      tags: ['ambiental', 'sostenibilidad', 'campus'],
      size: '1.7 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      processType: 'Gestión Ambiental',
      responsibleDepartment: 'Departamento de Sostenibilidad',
      approvalWorkflow: [
        'Evaluación de impacto ambiental',
        'Aprobación del gerente ambiental',
        'Validación del comité de sostenibilidad'
      ],
      complianceRequirements: [
        'ISO 14001:2015',
        'Normas ambientales nacionales',
        'Políticas de campus verde'
      ],
      reviewFrequency: 'Semestral'
    }
  ],
  UNAB: [
    {
      id: 'mgmt-unab-001',
      title: 'Procedimiento de Gestión de Relaciones Internacionales UNAB',
      description: 'Protocolo para el manejo de alianzas y programas internacionales',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unab-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'UNAB',
      tags: ['relaciones internacionales', 'alianzas', 'cooperación'],
      size: '2.0 MB',
      owner: 'Dr. Patricia González',
      accessLevel: 'view' as const,
      processType: 'Gestión de Relaciones Internacionales',
      responsibleDepartment: 'Oficina de Relaciones Internacionales',
      approvalWorkflow: [
        'Evaluación de alianza',
        'Aprobación del director de relaciones internacionales',
        'Validación del rector'
      ],
      complianceRequirements: [
        'Normas de cooperación internacional',
        'Estándares de calidad internacional',
        'Políticas de movilidad estudiantil'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-unab-002',
      title: 'Procedimiento de Gestión de Excelencia Académica UNAB',
      description: 'Protocolo para el mantenimiento de estándares de excelencia académica',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unab-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'UNAB',
      tags: ['excelencia académica', 'estándares', 'calidad'],
      size: '1.9 MB',
      owner: 'Dr. Marcela Fuentes',
      accessLevel: 'view' as const,
      processType: 'Gestión de Excelencia Académica',
      responsibleDepartment: 'Vicerrectoría Académica',
      approvalWorkflow: [
        'Evaluación de estándares',
        'Aprobación del vicerrector académico',
        'Validación del comité de excelencia'
      ],
      complianceRequirements: [
        'Estándares de acreditación internacional',
        'Normas de calidad académica',
        'Políticas de excelencia'
      ],
      reviewFrequency: 'Anual'
    },
    {
      id: 'mgmt-unab-003',
      title: 'Procedimiento de Gestión de Investigación UNAB',
      description: 'Protocolo para el manejo de proyectos y actividades de investigación',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-unab-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNAB',
      tags: ['investigación', 'proyectos', 'desarrollo científico'],
      size: '2.1 MB',
      owner: 'Lic. Pablo Contreras',
      accessLevel: 'view' as const,
      processType: 'Gestión de Investigación',
      responsibleDepartment: 'Vicerrectoría de Investigación',
      approvalWorkflow: [
        'Evaluación científica',
        'Aprobación del comité de investigación',
        'Validación del vicerrector'
      ],
      complianceRequirements: [
        'Normas éticas de investigación',
        'Estándares de publicación científica',
        'Regulaciones de financiamiento'
      ],
      reviewFrequency: 'Semestral'
    }
  ],
  UDD: [
    {
      id: 'mgmt-udd-001',
      title: 'Procedimiento de Gestión de Emprendimiento UDD',
      description: 'Protocolo para el manejo de programas y proyectos de emprendimiento',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-udd-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'UDD',
      tags: ['emprendimiento', 'startups', 'innovación'],
      size: '2.2 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      processType: 'Gestión de Emprendimiento',
      responsibleDepartment: 'Centro de Emprendimiento',
      approvalWorkflow: [
        'Evaluación de proyecto',
        'Aprobación del director de emprendimiento',
        'Validación del comité de emprendimiento'
      ],
      complianceRequirements: [
        'Normas de incubación de empresas',
        'Estándares de evaluación de startups',
        'Políticas de financiamiento'
      ],
      reviewFrequency: 'Trimestral'
    },
    {
      id: 'mgmt-udd-002',
      title: 'Procedimiento de Gestión de Innovación Social UDD',
      description: 'Protocolo para el manejo de proyectos de innovación social',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-udd-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'UDD',
      tags: ['innovación social', 'problemas sociales', 'soluciones'],
      size: '1.9 MB',
      owner: 'Lic. Valentina Muñoz',
      accessLevel: 'view' as const,
      processType: 'Gestión de Innovación Social',
      responsibleDepartment: 'Centro de Innovación Social',
      approvalWorkflow: [
        'Evaluación de impacto social',
        'Aprobación del director de innovación social',
        'Validación del comité social'
      ],
      complianceRequirements: [
        'Normas de responsabilidad social',
        'Estándares de impacto social',
        'Políticas de innovación social'
      ],
      reviewFrequency: 'Semestral'
    },
    {
      id: 'mgmt-udd-003',
      title: 'Procedimiento de Gestión de Desarrollo Estudiantil UDD',
      description: 'Protocolo para el manejo de programas de desarrollo estudiantil',
      category: 'Procedimientos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/mgmt-udd-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'UDD',
      tags: ['desarrollo estudiantil', 'formación integral', 'competencias'],
      size: '1.8 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      processType: 'Gestión de Desarrollo Estudiantil',
      responsibleDepartment: 'Vicerrectoría de Desarrollo Estudiantil',
      approvalWorkflow: [
        'Evaluación de programa',
        'Aprobación del vicerrector de desarrollo estudiantil',
        'Validación del comité estudiantil'
      ],
      complianceRequirements: [
        'Normas de desarrollo estudiantil',
        'Estándares de formación integral',
        'Políticas de bienestar estudiantil'
      ],
      reviewFrequency: 'Trimestral'
    }
  ]
};

// ===== MÓDULO INICIATIVAS =====
export interface InitiativeDocument extends AllianceDocument {
  initiativeType: string;
  phase: string;
  owner: string;
  stakeholders: string[];
  impactMetrics: string[];
}

export const initiativesData = {
  CENTRAL: [
    {
      id: 'init-cen-001',
      title: 'Hub de Innovación Educativa Central',
      description: 'Centro de innovación para el desarrollo de metodologías educativas avanzadas',
      category: 'Innovación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-cen-001/view',
      lastUpdated: '2024-01-15',
      alliance: 'CENTRAL',
      tags: ['innovación', 'educación', 'metodologías'],
      size: '2.5 MB',
      owner: 'Dr. María González',
      accessLevel: 'view' as const,
      initiativeType: 'Innovación Educativa',
      phase: 'Implementación',
      stakeholders: [
        'Directores académicos',
        'Docentes',
        'Estudiantes',
        'Sector empresarial'
      ],
      impactMetrics: [
        '30% mejora en retención estudiantil',
        '25% incremento en satisfacción docente',
        '40% más proyectos de innovación'
      ]
    },
    {
      id: 'init-cen-002',
      title: 'Programa de Transformación Digital Central',
      description: 'Iniciativa para digitalizar completamente los procesos institucionales',
      category: 'Transformación Digital',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-cen-002/view',
      lastUpdated: '2024-01-20',
      alliance: 'CENTRAL',
      tags: ['transformación digital', 'tecnología', 'procesos'],
      size: '3.2 MB',
      owner: 'Lic. Carlos Ruiz',
      accessLevel: 'view' as const,
      initiativeType: 'Transformación Digital',
      phase: 'Planificación',
      stakeholders: [
        'Equipo de TI',
        'Usuarios finales',
        'Proveedores tecnológicos',
        'Consultores externos'
      ],
      impactMetrics: [
        '50% reducción en tiempo de procesos',
        '80% de procesos digitalizados',
        '90% de satisfacción de usuarios'
      ]
    },
    {
      id: 'init-cen-003',
      title: 'Red de Alianzas Estratégicas Central',
      description: 'Programa para establecer alianzas con instituciones de educación superior globales',
      category: 'Alianzas',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-cen-003/view',
      lastUpdated: '2024-01-25',
      alliance: 'CENTRAL',
      tags: ['alianzas', 'internacionalización', 'cooperación'],
      size: '2.1 MB',
      owner: 'Dr. María González',
      accessLevel: 'view' as const,
      initiativeType: 'Alianzas Estratégicas',
      phase: 'Desarrollo',
      stakeholders: [
        'Directores de relaciones internacionales',
        'Instituciones aliadas',
        'Estudiantes de intercambio',
        'Docentes visitantes'
      ],
      impactMetrics: [
        '15 nuevas alianzas establecidas',
        '200 estudiantes en intercambio anual',
        '50 docentes en movilidad'
      ]
    }
  ],
  UNIS: [
    {
      id: 'init-unis-001',
      title: 'Programa de Acreditación Internacional UNIS',
      description: 'Iniciativa para obtener acreditación internacional de programas académicos',
      category: 'Acreditación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unis-001/view',
      lastUpdated: '2024-01-10',
      alliance: 'UNIS',
      tags: ['acreditación', 'internacional', 'calidad'],
      size: '2.8 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      initiativeType: 'Acreditación',
      phase: 'Evaluación',
      stakeholders: [
        'Comité de acreditación',
        'Agencias evaluadoras',
        'Docentes',
        'Estudiantes'
      ],
      impactMetrics: [
        'Acreditación internacional obtenida',
        'Mejora del 40% en estándares de calidad',
        '25% incremento en matrícula internacional'
      ]
    },
    {
      id: 'init-unis-002',
      title: 'Centro de Investigación Avanzada UNIS',
      description: 'Desarrollo de un centro de investigación de clase mundial',
      category: 'Investigación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unis-002/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNIS',
      tags: ['investigación', 'centro', 'desarrollo científico'],
      size: '3.5 MB',
      owner: 'Prof. Laura Torres',
      accessLevel: 'view' as const,
      initiativeType: 'Infraestructura de Investigación',
      phase: 'Construcción',
      stakeholders: [
        'Investigadores',
        'Estudiantes de posgrado',
        'Sector empresarial',
        'Agencias de financiamiento'
      ],
      impactMetrics: [
        'Centro de investigación operativo',
        '50 proyectos de investigación activos',
        '100 publicaciones científicas anuales'
      ]
    },
    {
      id: 'init-unis-003',
      title: 'Programa de Doble Titulación UNIS',
      description: 'Iniciativa para implementar programas de doble titulación con universidades extranjeras',
      category: 'Programas Académicos',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unis-003/view',
      lastUpdated: '2024-01-20',
      alliance: 'UNIS',
      tags: ['doble titulación', 'internacional', 'programas'],
      size: '2.2 MB',
      owner: 'Dr. Juan Pérez',
      accessLevel: 'view' as const,
      initiativeType: 'Programas Académicos',
      phase: 'Planificación',
      stakeholders: [
        'Universidades aliadas',
        'Estudiantes',
        'Docentes',
        'Coordinadores académicos'
      ],
      impactMetrics: [
        '10 programas de doble titulación',
        '150 estudiantes beneficiados',
        '5 universidades aliadas'
      ]
    }
  ],
  UP: [
    {
      id: 'init-up-001',
      title: 'Sistema de Gestión de Calidad UP',
      description: 'Implementación de un sistema integral de gestión de calidad',
      category: 'Calidad',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-up-001/view',
      lastUpdated: '2024-01-12',
      alliance: 'UP',
      tags: ['calidad', 'sistema', 'gestión'],
      size: '2.6 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      initiativeType: 'Sistema de Calidad',
      phase: 'Implementación',
      stakeholders: [
        'Departamento de calidad',
        'Auditores internos',
        'Usuarios del sistema',
        'Consultores externos'
      ],
      impactMetrics: [
        'Sistema de calidad operativo',
        '100% de procesos certificados',
        'Mejora del 35% en eficiencia'
      ]
    },
    {
      id: 'init-up-002',
      title: 'Plataforma de Aprendizaje Virtual UP',
      description: 'Desarrollo de una plataforma avanzada de aprendizaje virtual',
      category: 'Tecnología Educativa',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-up-002/view',
      lastUpdated: '2024-01-18',
      alliance: 'UP',
      tags: ['plataforma', 'aprendizaje virtual', 'tecnología'],
      size: '3.0 MB',
      owner: 'Dr. Roberto Mendoza',
      accessLevel: 'view' as const,
      initiativeType: 'Plataforma Digital',
      phase: 'Desarrollo',
      stakeholders: [
        'Equipo de desarrollo',
        'Docentes',
        'Estudiantes',
        'Administradores del sistema'
      ],
      impactMetrics: [
        'Plataforma operativa',
        '80% de cursos en modalidad virtual',
        '95% de satisfacción de usuarios'
      ]
    },
    {
      id: 'init-up-003',
      title: 'Programa de Sostenibilidad UP',
      description: 'Iniciativa para convertir UP en una universidad sostenible',
      category: 'Sostenibilidad',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-up-003/view',
      lastUpdated: '2024-01-25',
      alliance: 'UP',
      tags: ['sostenibilidad', 'medio ambiente', 'campus verde'],
      size: '2.4 MB',
      owner: 'Ing. Ana López',
      accessLevel: 'view' as const,
      initiativeType: 'Sostenibilidad',
      phase: 'Planificación',
      stakeholders: [
        'Departamento de sostenibilidad',
        'Comunidad universitaria',
        'Proveedores verdes',
        'Organizaciones ambientales'
      ],
      impactMetrics: [
        '30% reducción de huella de carbono',
        '50% de energía renovable',
        'Campus certificado como verde'
      ]
    }
  ],
  UCSS: [
    {
      id: 'init-ucss-001',
      title: 'Centro de Investigación en Ciencias Sociales UCSS',
      description: 'Desarrollo de un centro especializado en investigación social',
      category: 'Investigación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-ucss-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UCSS',
      tags: ['investigación', 'ciencias sociales', 'centro'],
      size: '2.9 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      initiativeType: 'Infraestructura de Investigación',
      phase: 'Construcción',
      stakeholders: [
        'Investigadores sociales',
        'Estudiantes de posgrado',
        'Organizaciones comunitarias',
        'Agencias de financiamiento'
      ],
      impactMetrics: [
        'Centro de investigación operativo',
        '25 proyectos de investigación social',
        '50 publicaciones en ciencias sociales'
      ]
    },
    {
      id: 'init-ucss-002',
      title: 'Programa de Maestrías UCSS',
      description: 'Desarrollo de nuevas maestrías en áreas estratégicas',
      category: 'Posgrado',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-ucss-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UCSS',
      tags: ['maestrías', 'posgrado', 'programas'],
      size: '2.3 MB',
      owner: 'Dr. Elena Vargas',
      accessLevel: 'view' as const,
      initiativeType: 'Programas Académicos',
      phase: 'Desarrollo',
      stakeholders: [
        'Comité de posgrado',
        'Docentes especializados',
        'Estudiantes potenciales',
        'Sector empresarial'
      ],
      impactMetrics: [
        '5 nuevas maestrías implementadas',
        '200 estudiantes de maestría',
        '90% de empleabilidad de egresados'
      ]
    },
    {
      id: 'init-ucss-003',
      title: 'Alianzas con Universidades Europeas UCSS',
      description: 'Establecimiento de alianzas estratégicas con universidades europeas',
      category: 'Internacionalización',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-ucss-003/view',
      lastUpdated: '2024-01-16',
      alliance: 'UCSS',
      tags: ['alianzas', 'europeas', 'cooperación'],
      size: '2.0 MB',
      owner: 'Dr. Carlos Mendoza',
      accessLevel: 'view' as const,
      initiativeType: 'Alianzas Internacionales',
      phase: 'Negociación',
      stakeholders: [
        'Universidades europeas',
        'Estudiantes de intercambio',
        'Docentes visitantes',
        'Coordinadores de cooperación'
      ],
      impactMetrics: [
        '10 alianzas con universidades europeas',
        '100 estudiantes en intercambio anual',
        '25 proyectos de cooperación'
      ]
    }
  ],
  EAFIT: [
    {
      id: 'init-eafit-001',
      title: 'Hub de Innovación EAFIT',
      description: 'Desarrollo de un centro de innovación de clase mundial',
      category: 'Innovación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-eafit-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'EAFIT',
      tags: ['hub', 'innovación', 'centro'],
      size: '3.8 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      initiativeType: 'Infraestructura de Innovación',
      phase: 'Construcción',
      stakeholders: [
        'Equipo de innovación',
        'Startups',
        'Empresas',
        'Inversionistas'
      ],
      impactMetrics: [
        'Hub de innovación operativo',
        '50 startups incubadas',
        '100 proyectos de innovación'
      ]
    },
    {
      id: 'init-eafit-002',
      title: 'Incubadora de Startups EAFIT',
      description: 'Programa integral de incubación de empresas emergentes',
      category: 'Emprendimiento',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-eafit-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'EAFIT',
      tags: ['incubadora', 'startups', 'emprendimiento'],
      size: '3.2 MB',
      owner: 'Lic. Diego Herrera',
      accessLevel: 'view' as const,
      initiativeType: 'Incubación',
      phase: 'Operación',
      stakeholders: [
        'Emprendedores',
        'Mentores',
        'Inversionistas',
        'Equipo de incubación'
      ],
      impactMetrics: [
        '30 startups incubadas exitosamente',
        '80% de supervivencia empresarial',
        '$2M en inversión captada'
      ]
    },
    {
      id: 'init-eafit-003',
      title: 'Laboratorio de Tecnologías Emergentes EAFIT',
      description: 'Centro para el desarrollo y prueba de tecnologías emergentes',
      category: 'Tecnología',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-eafit-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'EAFIT',
      tags: ['tecnologías emergentes', 'laboratorio', 'desarrollo'],
      size: '2.7 MB',
      owner: 'Dr. Laura Torres',
      accessLevel: 'view' as const,
      initiativeType: 'Laboratorio de Tecnología',
      phase: 'Equipamiento',
      stakeholders: [
        'Investigadores tecnológicos',
        'Estudiantes',
        'Empresas tecnológicas',
        'Proveedores de equipos'
      ],
      impactMetrics: [
        'Laboratorio completamente equipado',
        '15 proyectos de tecnologías emergentes',
        '10 patentes desarrolladas'
      ]
    }
  ],
  UNINORTE: [
    {
      id: 'init-uninorte-001',
      title: 'Centro de Desarrollo Regional UNINORTE',
      description: 'Centro para el desarrollo sostenible de la región',
      category: 'Desarrollo Regional',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-uninorte-001/view',
      lastUpdated: '2024-01-08',
      alliance: 'UNINORTE',
      tags: ['desarrollo regional', 'sostenible', 'centro'],
      size: '2.8 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      initiativeType: 'Centro de Desarrollo',
      phase: 'Construcción',
      stakeholders: [
        'Comunidades locales',
        'Organizaciones gubernamentales',
        'Sector privado',
        'ONGs'
      ],
      impactMetrics: [
        'Centro de desarrollo operativo',
        '20 proyectos regionales implementados',
        'Mejora del 40% en indicadores regionales'
      ]
    },
    {
      id: 'init-uninorte-002',
      title: 'Programa de Servicio Comunitario UNINORTE',
      description: 'Iniciativa para fortalecer el servicio a la comunidad',
      category: 'Servicio Comunitario',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-uninorte-002/view',
      lastUpdated: '2024-01-12',
      alliance: 'UNINORTE',
      tags: ['servicio comunitario', 'comunidad', 'impacto social'],
      size: '2.1 MB',
      owner: 'Lic. Carmen Jiménez',
      accessLevel: 'view' as const,
      initiativeType: 'Servicio Comunitario',
      phase: 'Implementación',
      stakeholders: [
        'Estudiantes',
        'Comunidades beneficiarias',
        'Organizaciones comunitarias',
        'Voluntarios'
      ],
      impactMetrics: [
        '1000 horas de servicio comunitario',
        '500 personas beneficiadas',
        '15 comunidades atendidas'
      ]
    },
    {
      id: 'init-uninorte-003',
      title: 'Proyectos de Impacto Social UNINORTE',
      description: 'Desarrollo de proyectos con alto impacto social',
      category: 'Impacto Social',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-uninorte-003/view',
      lastUpdated: '2024-01-16',
      alliance: 'UNINORTE',
      tags: ['impacto social', 'proyectos', 'comunidad'],
      size: '2.3 MB',
      owner: 'Dr. Roberto Silva',
      accessLevel: 'view' as const,
      initiativeType: 'Proyectos Sociales',
      phase: 'Desarrollo',
      stakeholders: [
        'Comunidades objetivo',
        'Organizaciones sociales',
        'Estudiantes',
        'Docentes'
      ],
      impactMetrics: [
        '10 proyectos de impacto social',
        '1000 personas beneficiadas',
        'Mejora del 30% en indicadores sociales'
      ]
    }
  ],
  UNAB: [
    {
      id: 'init-unab-001',
      title: 'Estrategia de Internacionalización UNAB',
      description: 'Plan integral para posicionar UNAB internacionalmente',
      category: 'Internacionalización',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unab-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'UNAB',
      tags: ['internacionalización', 'estrategia', 'posicionamiento'],
      size: '3.1 MB',
      owner: 'Dr. Patricia González',
      accessLevel: 'view' as const,
      initiativeType: 'Estrategia Internacional',
      phase: 'Implementación',
      stakeholders: [
        'Equipo de relaciones internacionales',
        'Universidades aliadas',
        'Estudiantes internacionales',
        'Docentes visitantes'
      ],
      impactMetrics: [
        '15% de estudiantes internacionales',
        '20 alianzas internacionales',
        '100 estudiantes en intercambio anual'
      ]
    },
    {
      id: 'init-unab-002',
      title: 'Centro de Investigación Avanzada UNAB',
      description: 'Desarrollo de un centro de investigación de excelencia',
      category: 'Investigación',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unab-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'UNAB',
      tags: ['investigación', 'centro', 'excelencia'],
      size: '3.4 MB',
      owner: 'Dr. Marcela Fuentes',
      accessLevel: 'view' as const,
      initiativeType: 'Infraestructura de Investigación',
      phase: 'Construcción',
      stakeholders: [
        'Investigadores',
        'Estudiantes de posgrado',
        'Agencias de financiamiento',
        'Sector empresarial'
      ],
      impactMetrics: [
        'Centro de investigación operativo',
        '30 proyectos de investigación activos',
        '75 publicaciones científicas anuales'
      ]
    },
    {
      id: 'init-unab-003',
      title: 'Programas de Doctorado UNAB',
      description: 'Desarrollo de programas de doctorado en áreas estratégicas',
      category: 'Posgrado',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-unab-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'UNAB',
      tags: ['doctorado', 'posgrado', 'programas'],
      size: '2.5 MB',
      owner: 'Lic. Pablo Contreras',
      accessLevel: 'view' as const,
      initiativeType: 'Programas Académicos',
      phase: 'Desarrollo',
      stakeholders: [
        'Comité de posgrado',
        'Docentes investigadores',
        'Estudiantes potenciales',
        'Sector académico'
      ],
      impactMetrics: [
        '3 programas de doctorado implementados',
        '50 estudiantes de doctorado',
        '95% de titulación exitosa'
      ]
    }
  ],
  UDD: [
    {
      id: 'init-udd-001',
      title: 'Centro de Emprendimiento UDD',
      description: 'Desarrollo de un centro integral de emprendimiento',
      category: 'Emprendimiento',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-udd-001/view',
      lastUpdated: '2024-01-05',
      alliance: 'UDD',
      tags: ['centro', 'emprendimiento', 'startups'],
      size: '3.3 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      initiativeType: 'Centro de Emprendimiento',
      phase: 'Construcción',
      stakeholders: [
        'Emprendedores',
        'Mentores',
        'Inversionistas',
        'Equipo del centro'
      ],
      impactMetrics: [
        'Centro de emprendimiento operativo',
        '40 startups desarrolladas',
        '$1.5M en inversión captada'
      ]
    },
    {
      id: 'init-udd-002',
      title: 'Laboratorio de Innovación Social UDD',
      description: 'Centro para el desarrollo de soluciones a problemas sociales',
      category: 'Innovación Social',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-udd-002/view',
      lastUpdated: '2024-01-10',
      alliance: 'UDD',
      tags: ['innovación social', 'laboratorio', 'problemas sociales'],
      size: '2.8 MB',
      owner: 'Lic. Valentina Muñoz',
      accessLevel: 'view' as const,
      initiativeType: 'Laboratorio de Innovación Social',
      phase: 'Equipamiento',
      stakeholders: [
        'Innovadores sociales',
        'Comunidades beneficiarias',
        'Organizaciones sociales',
        'Estudiantes'
      ],
      impactMetrics: [
        'Laboratorio operativo',
        '20 soluciones desarrolladas',
        '30 emprendedores sociales formados'
      ]
    },
    {
      id: 'init-udd-003',
      title: 'Programa de Competencias Transversales UDD',
      description: 'Iniciativa para desarrollar competencias clave en los estudiantes',
      category: 'Desarrollo Estudiantil',
      type: 'document' as const,
      url: 'https://drive.google.com/file/d/init-udd-003/view',
      lastUpdated: '2024-01-15',
      alliance: 'UDD',
      tags: ['competencias', 'desarrollo', 'estudiantes'],
      size: '2.2 MB',
      owner: 'Dr. Miguel Herrera',
      accessLevel: 'view' as const,
      initiativeType: 'Programa de Desarrollo',
      phase: 'Implementación',
      stakeholders: [
        'Estudiantes',
        'Docentes',
        'Sector empresarial',
        'Coordinadores del programa'
      ],
      impactMetrics: [
        '100% de estudiantes con competencias transversales',
        'Mejora del 40% en empleabilidad',
        '95% de satisfacción estudiantil'
      ]
    }
  ]
};

// Funciones utilitarias para obtener datos filtrados
export const getGovernanceDataByAlliance = (allianceName: string | null): GovernanceDocument[] => {
  if (!allianceName) {
    return Object.values(governanceData).flat();
  }
  return governanceData[allianceName as keyof typeof governanceData] || [];
};

export const getPlanningDataByAlliance = (allianceName: string | null): PlanningDocument[] => {
  if (!allianceName) {
    return Object.values(planningData).flat();
  }
  return planningData[allianceName as keyof typeof planningData] || [];
};

export const getManagementDataByAlliance = (allianceName: string | null): ManagementDocument[] => {
  if (!allianceName) {
    return Object.values(managementData).flat();
  }
  return managementData[allianceName as keyof typeof managementData] || [];
};

export const getInitiativesDataByAlliance = (allianceName: string | null): InitiativeDocument[] => {
  if (!allianceName) {
    return Object.values(initiativesData).flat();
  }
  return initiativesData[allianceName as keyof typeof initiativesData] || [];
};
