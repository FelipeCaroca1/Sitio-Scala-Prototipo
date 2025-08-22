# 🚀 **Scala Learning - Prototipo de Sitio Web**

> **⚠️ IMPORTANTE: Este es un prototipo interno del equipo de desarrollo, NO un producto final para el cliente.**

## 📋 **Contexto del Proyecto**

### **Problemática Identificada**
Como equipo multidisciplinario, enfrentamos una **limitación crítica de acceso al contenido real** del cliente:

- **Datos Centralizados**: Toda la información está dispersa en Google Drive y Power BI
- **Acceso Restringido**: El cliente maneja exclusivamente estas herramientas
- **Falta de Contexto**: No podemos interactuar directamente con la data real para entender las necesidades
- **Validación Limitada**: Difícil aterrizar conceptos sin una base tangible para iterar

### **Propósito del Prototipo**
Este prototipo es una **herramienta interna de exploración y validación** que nos permite:

✅ **Explorar conceptos** de organización y navegación de información  
✅ **Validar flujos de usuario** con una interfaz tangible  
✅ **Iterar rápidamente** sobre ideas de diseño y UX  
✅ **Comunicar mejor** con el cliente usando ejemplos visuales  
✅ **Identificar requerimientos** técnicos y funcionales reales  

## 🎯 **Estado Actual: MVP Funcional**

### **Módulos Implementados**
- ✅ **NUESTRA ALIANZA**: Página principal con documentos y contactos
- ✅ **GOBERNANZA**: Gestión de comités y actas estratégicas
- ✅ **PLANEACIÓN**: Planificación financiera y estratégica
- ✅ **GESTIÓN**: Tableros de control y métricas operativas
- ✅ **INICIATIVAS**: Planes de acción estratégicos
- 🔄 **CHAT IA**: Placeholder para futuras funcionalidades
- 🔄 **GALERÍA**: Placeholder para contenido multimedia

### **Funcionalidades Core**
- 🔍 **Búsqueda Inteligente**: Sistema de búsqueda por palabras clave
- 🎯 **Selector de Alianzas**: Filtrado global por alianza (Central, UNIS, UP, UCSS, EAFIT, Uninorte, UNAB, UDD)
- 📱 **Responsive Design**: Adaptación a diferentes dispositivos
- 🎨 **Brand Guidelines**: Implementación de la identidad visual Scala Learning

## 🏗️ **Arquitectura Técnica**

### **Stack Tecnológico**
```
Frontend: React 18 + TypeScript + Vite
Styling: Tailwind CSS + useResponsive Hook
Routing: React Router DOM v6
State Management: React Context API
Build Tool: Vite + ESLint
```

### **Estructura del Proyecto**
```
src/
├── components/          # Componentes reutilizables
│   ├── Navigation/     # Barra de navegación principal
│   ├── AllianceSelector/ # Selector global de alianzas
│   ├── SmartSearch/    # Sistema de búsqueda inteligente
│   └── FloatingSearch/ # Botón de búsqueda flotante
├── pages/              # Páginas principales del sitio
├── hooks/              # Hooks personalizados
│   ├── useResponsive/  # Gestión de responsividad
│   ├── useFilteredData/ # Filtrado por alianza
│   └── useSmartSearch/ # Lógica de búsqueda
├── context/            # Contextos de React
│   ├── AllianceContext/ # Estado global de alianza seleccionada
│   └── LoadingContext/ # Estados de carga globales
├── mocks/              # Datos simulados para desarrollo
└── utils/              # Utilidades y helpers
```

### **Patrones de Diseño Implementados**
- **Componentes Funcionales**: Hooks modernos de React
- **Context API**: Estado global sin librerías externas
- **Custom Hooks**: Lógica reutilizable y testeable
- **Responsive Design**: Sin media queries, usando hooks personalizados
- **Error Boundaries**: Manejo robusto de errores

## 📊 **Datos Mock y Simulación**

### **Estructura de Datos**
- **Alianzas**: 8 alianzas principales con datos específicos
- **Documentos**: Simulación de archivos de Google Drive
- **Contactos**: Directorio de personas por alianza
- **Proyectos**: Iniciativas y métricas de seguimiento

### **Filtrado Inteligente**
- **Selector Global**: Cambio de alianza afecta todo el contenido
- **Búsqueda Cross-Module**: Búsqueda en todos los módulos simultáneamente
- **Relevancia**: Sistema de scoring para resultados de búsqueda

## 🚧 **Próximos Pasos para el Equipo**

### **Fase 1: Validación de Conceptos**
- [ ] **Presentar al Cliente**: Usar prototipo para validar dirección
- [ ] **Recopilar Feedback**: Identificar necesidades reales y prioridades
- [ ] **Refinar Requerimientos**: Aterrizar especificaciones técnicas

### **Fase 2: Arquitectura del Producto Final**
- [ ] **Diseño de Base de Datos**: Estructura para datos reales
- [ ] **API Design**: Endpoints para integración con sistemas existentes
- [ ] **Autenticación**: Sistema de permisos y acceso controlado

### **Fase 3: Desarrollo del Producto Final**
- [ ] **Migración de Datos**: Integración con Google Drive y Power BI
- [ ] **Testing Real**: Validación con usuarios finales
- [ ] **Deployment**: Implementación en producción

## ⚠️ **Consideraciones Importantes**

### **Para el Equipo de Desarrollo**
- 🔒 **Datos Simulados**: Todo el contenido es mock, NO datos reales
- 🎭 **Interfaz de Prueba**: La UI puede cambiar significativamente
- 📈 **Iteración Continua**: Este prototipo evolucionará con el feedback
- 🎯 **Enfoque en UX**: Priorizar experiencia de usuario sobre funcionalidad

### **Para Presentaciones al Cliente**
- 💡 **Demostrar Conceptos**: Usar para explicar flujos y navegación
- 🔄 **Solicitar Feedback**: Enfocarse en funcionalidad, no en diseño final
- 📋 **Validar Requerimientos**: Confirmar necesidades y prioridades
- 🚫 **NO Prometer Funcionalidades**: Aclarar que es un prototipo

### **Limitaciones del Prototipo**
- ❌ **Sin Integración Real**: No conecta con Google Drive o Power BI
- ❌ **Sin Autenticación**: No hay control de acceso o permisos
- ❌ **Sin Persistencia**: Los datos se resetean al recargar
- ❌ **Sin Backend**: Solo frontend estático con datos mock

## 🛠️ **Desarrollo Local**

### **Requisitos**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

### **Instalación**
```bash
# Clonar repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Linting
npm run lint
```

### **Scripts Disponibles**
- `npm run dev`: Servidor de desarrollo (localhost:5173)
- `npm run build`: Build de producción
- `npm run preview`: Preview del build
- `npm run lint`: Verificación de código

## 📚 **Documentación Adicional**

### **Componentes Principales**
- **Navigation**: Sistema de navegación principal
- **AllianceSelector**: Selector global de alianzas
- **SmartSearch**: Búsqueda inteligente integrada
- **FloatingSearch**: Búsqueda rápida flotante

### **Hooks Personalizados**
- **useResponsive**: Gestión de responsividad sin media queries
- **useFilteredData**: Filtrado de contenido por alianza
- **useSmartSearch**: Lógica de búsqueda inteligente

## 🤝 **Contribución del Equipo**

### **Guidelines de Desarrollo**
- ✅ **Componentes Funcionales**: Usar hooks, no clases
- ✅ **TypeScript**: Tipado estricto para todos los componentes
- ✅ **Tailwind CSS**: Estilos utilitarios, no CSS personalizado
- ✅ **Responsive Design**: Usar hook useResponsive, no media queries
- ✅ **JSDoc**: Documentación mínima en componentes complejos

### **Estructura de Commits**
```
feat: nueva funcionalidad
fix: corrección de bugs
refactor: refactorización de código
docs: documentación
style: cambios de estilo
test: tests
```

## 📞 **Contacto y Soporte**

### **Equipo de Desarrollo**
- **Tech Lead**: [Nombre]
- **Frontend Developers**: [Nombres]
- **UX/UI Designers**: [Nombres]
- **Product Owner**: [Nombre]

### **Repositorio**
- **URL**: [LINK_DEL_REPO]
- **Branch Principal**: `main`
- **Branches de Desarrollo**: `feature/[nombre-feature]`

---

## 🎯 **Resumen Ejecutivo**

Este prototipo es una **herramienta estratégica interna** que nos permite:

1. **Explorar y validar** conceptos de UX/UI con el cliente
2. **Identificar requerimientos** técnicos reales
3. **Iterar rápidamente** sobre ideas y flujos
4. **Comunicar mejor** la visión del producto final
5. **Preparar al equipo** para el desarrollo del producto real

**Recordatorio**: Este NO es el producto final. Es una base de trabajo que evolucionará según el feedback del cliente y las necesidades reales del proyecto.

---

*Última actualización: [FECHA]*
*Versión del Prototipo: MVP v1.0*
*Estado: En desarrollo activo*
