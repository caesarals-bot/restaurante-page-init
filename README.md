# Resto Base - Aplicación Web de Restaurante

## 📋 Descripción del Proyecto

**Resto Base** es una aplicación web moderna y completamente funcional para restaurantes. Incluye páginas principales, menú interactivo, sistema de navegación responsivo y componentes reutilizables. Construida con React, TypeScript y Tailwind CSS.

## 🌟 Características Principales

### **✅ Funcionalidades Implementadas**
- **Página de Inicio** - Hero section con llamadas a la acción
- **Página de Menú** - Menú interactivo con modal de detalles
- **Página Nosotros** - Historia del restaurante y equipo
- **Página de Contacto** - Formulario funcional e información de contacto
- **Navegación Responsiva** - Menú hamburguesa funcional en móviles
- **Componentes Reutilizables** - Header, Cards, Buttons
- **Diseño Responsivo** - Optimizado para móviles, tablets y desktop

### **🎨 Experiencia de Usuario**
- **Menú Interactivo** - Cards clickeables con modal de detalles
- **Navegación Móvil** - Menú hamburguesa con animaciones suaves
- **Imágenes Optimizadas** - Integración con Unsplash para imágenes de alta calidad
- **Animaciones** - Transiciones suaves y efectos hover
- **Esquema de Colores** - Verde corporativo consistente en toda la aplicación

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
resto-base/
├── public/                 # Archivos estáticos públicos
│   └── vite.svg           # Logo de Vite
├── src/                   # Código fuente principal
│   ├── components/        # Componentes reutilizables
│   │   ├── navigation/    # Componentes de navegación
│   │   │   └── Navbar.tsx # Barra de navegación con menú móvil
│   │   └── ui/           # Componentes de UI (shadcn/ui)
│   │       ├── button.tsx # Componente Button
│   │       ├── card.tsx   # Componente Card
│   │       └── ...        # Otros componentes UI
│   ├── lib/              # Utilidades y helpers
│   │   └── utils.ts      # Funciones utilitarias
│   ├── restaurant/       # Módulo del restaurante
│   │   ├── components/   # Componentes específicos
│   │   │   └── Header.tsx # Header reutilizable
│   │   ├── layouts/      # Layouts del restaurante
│   │   │   └── RestaurantLayout.tsx # Layout principal
│   │   └── pages/        # Páginas del restaurante
│   │       ├── home/     # Página de inicio
│   │       ├── menu/     # Página de menú
│   │       ├── about/    # Página nosotros
│   │       └── contact/  # Página de contacto
│   ├── app.router.tsx    # Configuración de rutas
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
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

## 📱 Páginas y Funcionalidades

### **🏠 Página de Inicio (HomePage)**
- Hero section con fondo verde gradient
- Botones de acción: "Ver Menú" y "Reservar Mesa"
- Secciones de bienvenida y llamadas a la acción

### **🍽️ Página de Menú (MenuPage)**
- Grid responsivo de platos (1-3 columnas según dispositivo)
- Cards interactivas con imágenes de Unsplash
- Modal con detalles completos del plato
- Precios y descripciones detalladas
- Menú con 6 platos españoles auténticos

### **👥 Página Nosotros (AboutPage)**
- Historia del restaurante desde 1985
- Sección de valores y filosofía
- Presentación del equipo (Chef, Sommelier, Manager)
- Estadísticas del restaurante
- Imágenes profesionales del interior

### **📞 Página de Contacto (ContactPage)**
- Formulario de contacto funcional con validación
- Información de contacto (dirección, teléfono, email, horarios)
- Sección para futura integración de Google Maps
- Estados de carga y confirmación

### **🧭 Navegación (Navbar)**
- Logo y nombre del restaurante
- Enlaces: Inicio, Menú, Nosotros, Contacto
- Botones de acción: Reservar, Admin
- **Menú móvil funcional** con hamburguesa animada
- Cierre automático al navegar

## 🎨 Sistema de Diseño

### **Esquema de Colores**
- **Verde corporativo**: `from-green-600 to-green-800`
- **Botones primarios**: Fondo blanco con texto verde
- **Botones secundarios**: Transparente con borde blanco
- **Hover effects**: Transiciones suaves en todos los elementos

### **Componentes Reutilizables**
- **Header**: Componente configurable para todas las páginas
- **MenuItemCard**: Card interactiva para elementos del menú
- **Button**: Múltiples variantes y tamaños
- **Card**: Sistema de tarjetas consistente

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px (1 columna, menú hamburguesa)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3 columnas, navegación completa)

### **Características Móviles**
- Menú hamburguesa funcional con animaciones
- Cards optimizadas para touch
- Imágenes responsivas con diferentes tamaños
- Botones de tamaño adecuado para dedos

## 🔧 Configuración Técnica

### **TypeScript**
- Configuración modular con referencias de proyecto
- Paths aliases configurados (`@/components`, `@/lib`)
- Tipos estrictos habilitados

### **Vite**
- Plugin React con SWC para compilación rápida
- Plugin de Tailwind CSS integrado
- Resolución de aliases configurada

### **ESLint**
- Configuración moderna con flat config
- Reglas específicas para React y TypeScript

## 🚧 Próximas Mejoras Sugeridas

1. **Backend Integration** - Conectar con API para datos dinámicos
2. **Sistema de Reservas** - Funcionalidad completa de reservas
3. **Panel de Administración** - Gestión de menú y pedidos
4. **Carrito de Compras** - Sistema de pedidos online
5. **Autenticación** - Login para usuarios y admin
6. **Base de Datos** - Persistencia de datos
7. **Pagos Online** - Integración con pasarelas de pago
8. **Notificaciones** - Sistema de alertas y confirmaciones

## 📄 Licencia

Proyecto privado - Versión 1.0.0
