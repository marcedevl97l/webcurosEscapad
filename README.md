# EduCursos - Instituto de Educación en Línea

Una plataforma web moderna para un instituto de educación en línea que vende cursos profesionales. Desarrollada con Angular 17 y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Modo Oscuro**: Tema oscuro/claro con transiciones suaves y persistencia
- **Navegación Intuitiva**: Header y footer consistentes en todas las páginas
- **Páginas Principales**:
  - **Inicio**: Hero section, estadísticas, características y cursos destacados
  - **Cursos**: Catálogo completo con filtros y búsqueda
  - **Detalles de Curso**: Información detallada con curriculum y instructor
  - **Nosotros**: Información del instituto, misión, visión y equipo
  - **Contacto**: Formulario de contacto e información de ubicación

## 🛠️ Tecnologías Utilizadas

- **Angular 17**: Framework principal con componentes standalone
- **Tailwind CSS**: Framework de CSS para diseño responsive
- **TypeScript**: Tipado estático para mejor desarrollo
- **HTML5 & CSS3**: Estructura y estilos modernos

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   │   └── header.component.ts
│   │   └── footer/
│   │       └── footer.component.ts
│   ├── pages/
│   │   ├── home/
│   │   │   └── home.component.ts
│   │   ├── courses/
│   │   │   └── courses.component.ts
│   │   ├── course-detail/
│   │   │   └── course-detail.component.ts
│   │   ├── about/
│   │   │   └── about.component.ts
│   │   └── contact/
│   │       └── contact.component.ts
│   ├── services/
│   │   └── theme.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.css
└── index.html
```

## 🎨 Diseño y UX

### Modo Oscuro 🌙
- **Cambio de Tema**: Botón en el header para alternar entre tema claro y oscuro
- **Persistencia**: El tema seleccionado se guarda en localStorage
- **Transiciones Suaves**: Animaciones de 200-300ms para cambios de tema
- **Detección Automática**: Respeta las preferencias del sistema operativo
- **Iconos Dinámicos**: Sol para modo claro, luna para modo oscuro

### Paleta de Colores
- **Primary**: Azul (#2563eb) - Color principal del instituto
- **Secondary**: Gris (#64748b) - Color secundario
- **Background**: Gris claro (#f9fafb) / Gris oscuro (#111827) - Fondos según tema
- **Text**: Gris oscuro (#111827) / Gris claro (#f9fafb) - Texto según tema

### Componentes Reutilizables
- **Botones**: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card`, `.course-card`
- **Formularios**: `.form-input`, `.form-label`
- **Contenedores**: `.container-custom`
- **Tema**: `.theme-toggle`, `.theme-icon`

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd escapadweb
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

### Comandos Disponibles

- `npm start` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run test` - Ejecutar pruebas
- `npm run lint` - Verificar código con ESLint

## 📱 Páginas y Funcionalidades

### 🏠 Página de Inicio
- Hero section con llamada a la acción
- Estadísticas del instituto
- Características principales
- Cursos destacados
- Sección CTA final

### 📚 Página de Cursos
- Header informativo
- Filtros por categoría y nivel
- Ordenamiento por popularidad y precio
- Grid de cursos con información detallada
- Paginación

### 📖 Detalles de Curso
- Información completa del curso
- Curriculum detallado
- Perfil del instructor
- Opciones de compra
- Cursos relacionados

### 👥 Página Nosotros
- Información de misión y visión
- Valores corporativos
- Equipo directivo
- Estadísticas del instituto

### 📞 Página de Contacto
- Información de contacto completa
- Formulario de contacto funcional
- Redes sociales
- Ubicación (placeholder para mapa)

## 🎯 Características Técnicas

### Sistema de Temas
- **ThemeService**: Servicio Angular para manejo de temas
- **localStorage**: Persistencia de preferencias del usuario
- **CSS Classes**: Utilización de clases `dark:` de Tailwind
- **Transiciones**: Animaciones suaves entre temas

### Componentes Standalone
Todos los componentes utilizan la nueva arquitectura standalone de Angular 17, lo que mejora la modularidad y el rendimiento.

### Diseño Responsivo
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Utiliza CSS Grid y Flexbox de Tailwind

### Optimización de Rendimiento
- Lazy loading de componentes
- Optimización de imágenes
- Minificación de CSS y JS en producción

## 🔧 Configuración de Tailwind

El proyecto incluye una configuración personalizada de Tailwind CSS con:
- **Modo Oscuro**: `darkMode: 'class'` habilitado
- Colores personalizados para la marca
- Fuente Inter de Google Fonts
- Utilidades personalizadas para componentes
- Transiciones suaves para cambios de tema

## 📈 Próximas Mejoras

- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Sistema de pagos
- [ ] Chat en vivo
- [ ] Integración con mapas
- [ ] Blog del instituto
- [ ] Sistema de reseñas
- [ ] Certificados digitales
- [ ] Más opciones de personalización de tema

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@educursos.com
- **Teléfono**: +52 (55) 1234-5678
- **Sitio Web**: www.educursos.com

---

Desarrollado con ❤️ para la educación en línea
