# Resto Base - Base para Páginas Web de Restaurantes

## 📋 Descripción del Proyecto

**Resto Base** es una base de código moderna y escalable para crear páginas web de restaurantes con menú. El proyecto está construido con las últimas tecnologías de desarrollo web y está diseñado para ser fácilmente personalizable y extensible.

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
resto-base/
├── public/                 # Archivos estáticos públicos
│   └── vite.svg           # Logo de Vite
├── src/                   # Código fuente principal
│   ├── admin/             # Módulo de administración
│   │   ├── layouts/       # Layouts para admin (vacío)
│   │   └── page/          # Páginas de admin (vacío)
│   ├── components/        # Componentes reutilizables
│   │   └── ui/           # Componentes de UI (shadcn/ui)
│   │       └── button.tsx # Componente Button
│   ├── lib/              # Utilidades y helpers
│   │   └── utils.ts      # Funciones utilitarias
│   ├── restaurant/       # Módulo del restaurante
│   │   ├── components/   # Componentes específicos (vacío)
│   │   ├── layouts/      # Layouts del restaurante (vacío)
│   │   └── pages/        # Páginas del restaurante (vacío)
│   ├── routes/           # Configuración de rutas (vacío)
│   ├── RestoBase.tsx     # Componente principal
│   ├── main.tsx          # Punto de entrada de la aplicación
│   ├── index.css         # Estilos globales y variables CSS
│   └── vite-env.d.ts     # Definiciones de tipos para Vite
├── components.json       # Configuración de shadcn/ui
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración TypeScript
├── vite.config.ts        # Configuración de Vite
└── README.md            # Documentación del proyecto
```

## 🛠️ Stack Tecnológico

### **Frontend Framework**
- **React 19.1.1** - Biblioteca principal para la interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 7.1.2** - Build tool y servidor de desarrollo

### **Styling & UI**
- **Tailwind CSS 4.1.12** - Framework de CSS utilitario
- **shadcn/ui** - Sistema de componentes moderno
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React 0.539.0** - Biblioteca de iconos

### **Routing**
- **React Router 7.8.1** - Navegación y enrutamiento

### **Utilidades de Desarrollo**
- **Class Variance Authority** - Gestión de variantes de clases CSS
- **clsx & tailwind-merge** - Utilidades para combinar clases CSS
- **ESLint** - Linting de código
- **tw-animate-css** - Animaciones con Tailwind

## 🎨 Sistema de Diseño

### **Configuración de shadcn/ui**
- **Estilo**: New York
- **Colores base**: Slate
- **Variables CSS**: Habilitadas
- **Biblioteca de iconos**: Lucide
- **Soporte RSC**: Deshabilitado

### **Aliases de Importación**
```typescript
"@/components" → src/components
"@/lib" → src/lib
"@/utils" → src/lib/utils
"@/ui" → src/components/ui
"@/hooks" → src/hooks
```

## 📦 Dependencias Principales

### **Producción**
```json
{
  "@radix-ui/react-slot": "^1.2.3",
  "@tailwindcss/vite": "^4.1.12",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.539.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.8.1",
  "tailwind-merge": "^3.3.1",
  "tailwindcss": "^4.1.12"
}
```

### **Desarrollo**
```json
{
  "@types/react": "^19.1.10",
  "@types/react-dom": "^19.1.7",
  "@vitejs/plugin-react-swc": "^4.0.0",
  "eslint": "^9.33.0",
  "typescript": "~5.8.3",
  "vite": "^7.1.2"
}
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción

# Linting
npm run lint         # Ejecuta ESLint para revisar el código

# Vista previa
npm run preview      # Vista previa de la build de producción
```

## 🏃‍♂️ Cómo Empezar

### **Prerrequisitos**
- Node.js (versión 18 o superior)
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd resto-base

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎯 Estado Actual del Proyecto

### **✅ Implementado**
- Configuración base de React + TypeScript + Vite
- Sistema de componentes con shadcn/ui
- Configuración de Tailwind CSS con variables personalizadas
- Estructura modular para admin y restaurant
- Componente Button funcional
- Utilidades para manejo de clases CSS
- Configuración de ESLint y TypeScript

### **🚧 Pendiente de Desarrollo**
- Componentes específicos del restaurante (menú, productos, etc.)
- Páginas principales (inicio, menú, contacto, etc.)
- Sistema de enrutamiento
- Layouts responsivos
- Componentes de administración
- Integración con backend/API
- Sistema de autenticación
- Gestión de estado global

## 🎨 Características de Diseño

### **Tema de Colores**
El proyecto utiliza un sistema de variables CSS personalizado con soporte para modo oscuro:
- Colores primarios y secundarios configurables
- Variables de radio de borde personalizables
- Sistema de colores semánticos (destructive, muted, accent, etc.)

### **Componentes UI**
- **Button**: Componente con múltiples variantes (default, destructive, outline, secondary, ghost, link)
- Sistema de tamaños (sm, default, lg, icon)
- Soporte para iconos y estados de carga
- Accesibilidad integrada

## 🔧 Configuración Técnica

### **TypeScript**
- Configuración modular con referencias de proyecto
- Paths aliases configurados
- Tipos estrictos habilitados

### **Vite**
- Plugin React con SWC para compilación rápida
- Plugin de Tailwind CSS integrado
- Resolución de aliases configurada

### **ESLint**
- Configuración moderna con flat config
- Reglas específicas para React y TypeScript
- Plugins para React Hooks y React Refresh

## 📝 Próximos Pasos Recomendados

1. **Desarrollar componentes del menú** (MenuCard, MenuItem, CategoryFilter)
2. **Crear layouts principales** (Header, Footer, Navigation)
3. **Implementar páginas core** (Home, Menu, About, Contact)
4. **Configurar React Router** para navegación
5. **Desarrollar panel de administración** para gestión de menú
6. **Integrar sistema de backend** para datos dinámicos
7. **Implementar responsive design** para móviles
8. **Añadir animaciones y transiciones**

## 📄 Licencia

Proyecto privado - Versión 0.0.0
