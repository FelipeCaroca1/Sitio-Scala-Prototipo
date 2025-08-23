/**
 * Tipos para el hook useResponsive
 */
export interface ResponsiveBreakpoints {
  /** Extra small devices (phones, 640px and down) */
  xs: boolean;
  /** Small devices (landscape phones, 641px and up) */
  sm: boolean;
  /** Medium devices (tablets, 769px and up) */
  md: boolean;
  /** Large devices (desktops, 1025px and up) */
  lg: boolean;
  /** Extra large devices (large desktops, 1281px and up) */
  xl: boolean;
  /** 2X large devices (larger desktops, 1537px and up) */
  '2xl': boolean;
}

export interface ResponsiveHookReturn extends ResponsiveBreakpoints {
  /** Indica si es un dispositivo móvil (xs o sm) */
  isMobile: boolean;
  /** Indica si es una tablet (md) */
  isTablet: boolean;
  /** Indica si es desktop (lg o superior) */
  isDesktop: boolean;
  /** Indica si es un dispositivo móvil muy estrecho (iPhone SE, Galaxy Fold, etc.) */
  isVerySmallMobile: boolean;
  /** Ancho actual de la ventana */
  width: number;
  /** Alto actual de la ventana */
  height: number;
}
