import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  duration: string;
  level: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Header de la página -->
    <section class="bg-primary-600 dark:bg-primary-700 text-white py-12 md:py-16">
      <div class="container-custom text-center px-4">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Nuestros Cursos</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Explora nuestra amplia selección de cursos profesionales diseñados para impulsar tu futuro
        </p>
      </div>
    </section>

    <!-- Filtros y búsqueda -->
    <section class="py-6 md:py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div class="container-custom px-4">
        <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div class="flex flex-wrap gap-2 w-full lg:w-auto">
            <button 
              *ngFor="let category of categories" 
              (click)="selectCategory(category)"
              [class]="selectedCategory === category ? 'bg-primary-600 dark:bg-primary-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
              class="px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors text-sm md:text-base">
              {{ category }}
            </button>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <select 
              [(ngModel)]="selectedLevel" 
              (change)="filterCourses()"
              class="form-input w-full sm:w-auto text-sm md:text-base">
              <option value="">Todos los niveles</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            
            <select 
              [(ngModel)]="sortBy" 
              (change)="filterCourses()"
              class="form-input w-full sm:w-auto text-sm md:text-base">
              <option value="popular">Más Populares</option>
              <option value="newest">Más Recientes</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Lista de cursos -->
    <section class="py-8 md:py-12 bg-white dark:bg-gray-800">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div 
            *ngFor="let course of filteredCourses" 
            class="course-card">
            <div class="h-40 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div class="absolute top-3 md:top-4 right-3 md:right-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs md:text-sm font-medium">
                {{ course.level }}
              </div>
            </div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium">{{ course.category }}</span>
                <div class="flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  <span>{{ course.rating }} ⭐</span>
                  <span class="ml-1 md:ml-2">({{ course.students }})</span>
                </div>
              </div>
              
              <h3 class="text-base md:text-lg lg:text-xl font-semibold mb-2 line-clamp-2 text-gray-900 dark:text-white">{{ course.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base line-clamp-3">{{ course.description }}</p>
              
              <div class="flex items-center justify-between mb-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                <span class="truncate">{{ course.instructor }}</span>
                <span class="ml-2">{{ course.duration }}</span>
              </div>
              
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span class="text-lg md:text-xl lg:text-2xl font-bold text-primary-600 dark:text-primary-400">\${{ course.price }}</span>
                <a [routerLink]="['/cursos', course.id]" class="btn-primary text-sm md:text-base">
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Paginación -->
        <div class="flex justify-center mt-8 md:mt-12">
          <nav class="flex items-center space-x-1 md:space-x-2">
            <button class="px-2 md:px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm md:text-base">Anterior</button>
            <button class="px-2 md:px-3 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded text-sm md:text-base">1</button>
            <button class="px-2 md:px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm md:text-base">2</button>
            <button class="px-2 md:px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm md:text-base">3</button>
            <button class="px-2 md:px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm md:text-base">Siguiente</button>
          </nav>
        </div>
      </div>
    </section>
  `
})
export class CoursesComponent {
  categories = ['Todos', 'Desarrollo Web', 'Marketing Digital', 'Diseño', 'Negocios', 'Tecnología'];
  selectedCategory = 'Todos';
  selectedLevel = '';
  sortBy = 'popular';
  
  courses: Course[] = [
    {
      id: 'react-completo',
      title: 'React.js Completo: De Principiante a Experto',
      category: 'Desarrollo Web',
      instructor: 'Carlos Rodríguez',
      rating: 4.8,
      students: 15420,
      price: 89,
      duration: '25 horas',
      level: 'Intermedio',
      image: 'react',
      description: 'Aprende React.js desde cero hasta crear aplicaciones web modernas y escalables con las mejores prácticas.'
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Avanzado',
      category: 'Marketing Digital',
      instructor: 'Ana García',
      rating: 4.9,
      students: 8920,
      price: 79,
      duration: '18 horas',
      level: 'Avanzado',
      image: 'marketing',
      description: 'Domina las estrategias de marketing digital para hacer crecer tu negocio en el mundo digital.'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Master',
      category: 'Diseño',
      instructor: 'María López',
      rating: 4.7,
      students: 12340,
      price: 99,
      duration: '30 horas',
      level: 'Principiante',
      image: 'design',
      description: 'Crea interfaces de usuario atractivas y experiencias digitales memorables.'
    },
    {
      id: 'python-data',
      title: 'Python para Ciencia de Datos',
      category: 'Tecnología',
      instructor: 'Dr. Juan Pérez',
      rating: 4.6,
      students: 6780,
      price: 69,
      duration: '22 horas',
      level: 'Intermedio',
      image: 'python',
      description: 'Aprende Python y sus librerías para análisis de datos y machine learning.'
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento Digital',
      category: 'Negocios',
      instructor: 'Sofía Martínez',
      rating: 4.5,
      students: 4560,
      price: 59,
      duration: '15 horas',
      level: 'Principiante',
      image: 'business',
      description: 'Convierte tu idea en un negocio digital exitoso con estrategias probadas.'
    },
    {
      id: 'angular-avanzado',
      title: 'Angular Avanzado',
      category: 'Desarrollo Web',
      instructor: 'Luis Fernández',
      rating: 4.4,
      students: 3450,
      price: 94,
      duration: '28 horas',
      level: 'Avanzado',
      image: 'angular',
      description: 'Domina Angular con patrones avanzados, testing y optimización de rendimiento.'
    },
    {
      id: 'seo-completo',
      title: 'SEO Completo para 2024',
      category: 'Marketing Digital',
      instructor: 'Carmen Ruiz',
      rating: 4.3,
      students: 5670,
      price: 64,
      duration: '20 horas',
      level: 'Intermedio',
      image: 'seo',
      description: 'Aprende las técnicas más actuales de SEO para posicionar tu sitio web en los primeros resultados.'
    },
    {
      id: 'figma-master',
      title: 'Figma Master: Diseño de Interfaces',
      category: 'Diseño',
      instructor: 'Roberto Silva',
      rating: 4.2,
      students: 7890,
      price: 74,
      duration: '16 horas',
      level: 'Principiante',
      image: 'figma',
      description: 'Domina Figma para crear diseños profesionales y prototipos interactivos.'
    },
    {
      id: 'analytics-google',
      title: 'Google Analytics 4',
      category: 'Marketing Digital',
      instructor: 'Patricia Morales',
      rating: 4.1,
      students: 2340,
      price: 49,
      duration: '12 horas',
      level: 'Principiante',
      image: 'analytics',
      description: 'Aprende a usar Google Analytics 4 para medir y optimizar el rendimiento de tu sitio web.'
    }
  ];

  filteredCourses = this.courses;

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterCourses();
  }

  filterCourses() {
    let filtered = this.courses;

    // Filtrar por categoría
    if (this.selectedCategory !== 'Todos') {
      filtered = filtered.filter(course => course.category === this.selectedCategory);
    }

    // Filtrar por nivel
    if (this.selectedLevel) {
      filtered = filtered.filter(course => course.level === this.selectedLevel);
    }

    // Ordenar
    switch (this.sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.students - a.students);
        break;
      case 'newest':
        // Simular orden por fecha (en un caso real tendrías una fecha)
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    this.filteredCourses = filtered;
  }
} 