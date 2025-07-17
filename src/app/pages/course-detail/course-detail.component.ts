import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

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
  longDescription: string;
  objectives: string[];
  requirements: string[];
  curriculum: {
    section: string;
    lessons: {
      title: string;
      duration: string;
      type: 'video' | 'text' | 'quiz';
    }[];
  }[];
  instructorBio: string;
  instructorImage: string;
  certificate: boolean;
  lifetimeAccess: boolean;
  language: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header del curso -->
    <section class="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-8 md:py-12">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Información del curso -->
          <div class="lg:col-span-2">
            <nav class="mb-4">
              <a routerLink="/cursos" class="text-primary-200 hover:text-white transition-colors text-sm">
                ← Volver a Cursos
              </a>
            </nav>
            
            <div class="mb-4">
              <span class="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ course?.category }}
              </span>
            </div>
            
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {{ course?.title }}
            </h1>
            
            <p class="text-lg md:text-xl mb-6 text-gray-100">
              {{ course?.longDescription }}
            </p>
            
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span class="text-white font-bold text-sm">{{ course?.instructor?.charAt(0) }}</span>
                </div>
                <div>
                  <p class="font-medium">{{ course?.instructor }}</p>
                  <p class="text-sm text-gray-200">Instructor</p>
                </div>
              </div>
              
              <div class="flex items-center text-sm">
                <span class="text-yellow-300 mr-1">⭐</span>
                <span class="font-medium">{{ course?.rating }}</span>
                <span class="text-gray-300 ml-1">({{ course?.students }} estudiantes)</span>
              </div>
              
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ course?.duration }}</span>
              </div>
              
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ course?.level }}</span>
              </div>
            </div>
          </div>
          
          <!-- Card de compra -->
          <div class="lg:col-span-1">
            <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg dark:shadow-gray-900/30 p-6 sticky top-24">
              <div class="text-center mb-6">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  \${{ course?.price }}
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Precio único</p>
              </div>
              
              <button class="w-full btn-primary mb-4 text-lg py-4">
                Comprar Ahora
              </button>
              
              <button class="w-full btn-outline mb-6">
                Agregar al Carrito
              </button>
              
              <div class="space-y-3 text-sm">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Acceso de por vida</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Certificado de finalización</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Acceso en dispositivos móviles</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Garantía de 30 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido principal -->
    <section class="py-8 md:py-12 bg-white dark:bg-gray-900">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contenido del curso -->
          <div class="lg:col-span-2">
            <!-- Lo que aprenderás -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lo que aprenderás</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div *ngFor="let objective of course?.objectives" class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ objective }}</span>
                </div>
              </div>
            </div>

            <!-- Requisitos -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requisitos</h2>
              <ul class="space-y-2">
                <li *ngFor="let requirement of course?.requirements" class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">{{ requirement }}</span>
                </li>
              </ul>
            </div>

            <!-- Contenido del curso -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contenido del curso</h2>
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div *ngFor="let section of course?.curriculum; let i = index" class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">{{ section.section }}</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div *ngFor="let lesson of section.lessons" class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">{{ lesson.title }}</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">{{ lesson.duration }}</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{{ lesson.type }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Instructor -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre el instructor</h2>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white font-bold text-lg">{{ course?.instructor?.charAt(0) }}</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ course?.instructor }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{{ course?.instructorBio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Información adicional -->
            <div class="card mb-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Información del curso</h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Idioma:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.language }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Nivel:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.level }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Duración:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.duration }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Estudiantes:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.students?.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Valoración:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.rating }} ⭐</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Última actualización:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{ course?.lastUpdated }}</span>
                </div>
              </div>
            </div>

            <!-- Cursos relacionados -->
            <div class="card">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cursos relacionados</h3>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Angular Avanzado</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">\$94</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Vue.js Completo</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">\$84</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Node.js Backend</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">\$89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  courseId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

//001 fix this problem on the scroll to active new page

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadCourse();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadCourse() {
    // Simulación de carga de datos del curso
    const coursesData: { [key: string]: Course } = {
      'react-completo': {
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
        description: 'Aprende React.js desde cero hasta crear aplicaciones web modernas y escalables.',
        longDescription: 'Este curso completo te llevará desde los fundamentos básicos de React.js hasta técnicas avanzadas de desarrollo. Aprenderás a crear aplicaciones web modernas, manejar estado, routing, y las mejores prácticas de la industria.',
        objectives: [
          'Entender los fundamentos de React.js y JSX',
          'Crear componentes reutilizables y funcionales',
          'Manejar estado y props efectivamente',
          'Implementar routing con React Router',
          'Integrar APIs y manejar datos externos',
          'Optimizar el rendimiento de aplicaciones React',
          'Desplegar aplicaciones en producción'
        ],
        requirements: [
          'Conocimientos básicos de HTML, CSS y JavaScript',
          'Comprensión de conceptos de programación',
          'Computadora con acceso a internet',
          'Editor de código (VS Code recomendado)'
        ],
        curriculum: [
          {
            section: 'Fundamentos de React',
            lessons: [
              { title: 'Introducción a React', duration: '15 min', type: 'video' },
              { title: 'Configuración del entorno', duration: '20 min', type: 'video' },
              { title: 'JSX y componentes', duration: '25 min', type: 'video' },
              { title: 'Props y estado', duration: '30 min', type: 'video' },
              { title: 'Quiz: Fundamentos', duration: '10 min', type: 'quiz' }
            ]
          },
          {
            section: 'Componentes Avanzados',
            lessons: [
              { title: 'Hooks personalizados', duration: '35 min', type: 'video' },
              { title: 'Context API', duration: '40 min', type: 'video' },
              { title: 'Renderizado condicional', duration: '25 min', type: 'video' },
              { title: 'Listas y keys', duration: '20 min', type: 'video' }
            ]
          },
          {
            section: 'Routing y Navegación',
            lessons: [
              { title: 'Configuración de React Router', duration: '30 min', type: 'video' },
              { title: 'Navegación programática', duration: '25 min', type: 'video' },
              { title: 'Rutas protegidas', duration: '35 min', type: 'video' }
            ]
          }
        ],
        instructorBio: 'Carlos Rodríguez es un desarrollador senior con más de 8 años de experiencia en desarrollo web. Ha trabajado en empresas como Google y Facebook, y ha ayudado a más de 50,000 estudiantes a aprender React.js.',
        instructorImage: 'carlos-rodriguez.jpg',
        certificate: true,
        lifetimeAccess: true,
        language: 'Español',
        lastUpdated: 'Diciembre 2024'
      }
    };

    this.course = coursesData[this.courseId];
    
    if (!this.course) {
      this.router.navigate(['/cursos']);
    }
  }
} 