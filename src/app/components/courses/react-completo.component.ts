import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-react-completo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header del curso React.js Completo -->
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
                Desarrollo Web
              </span>
            </div>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              React.js Completo: De Principiante a Experto
            </h1>
            <p class="text-lg md:text-xl mb-6 text-gray-100">
              Este curso completo te llevará desde los fundamentos básicos de React.js hasta técnicas avanzadas de desarrollo. Aprenderás a crear aplicaciones web modernas, manejar estado, routing, y las mejores prácticas de la industria.
            </p>
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span class="text-white font-bold text-sm">C</span>
                </div>
                <div>
                  <p class="font-medium">Carlos Rodríguez</p>
                  <p class="text-sm text-gray-200">Instructor</p>
                </div>
              </div>
              <div class="flex items-center text-sm">
                <span class="text-yellow-300 mr-1">⭐</span>
                <span class="font-medium">4.8</span>
                <span class="text-gray-300 ml-1">(15,420 estudiantes)</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>25 horas</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Intermedio</span>
              </div>
            </div>
          </div>
          <!-- Card de compra -->
          <div class="lg:col-span-1">
            <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg dark:shadow-gray-900/30 p-6 sticky top-24">
              <div class="text-center mb-6">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  $89
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
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Entender los fundamentos de React.js y JSX</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Crear componentes reutilizables y funcionales</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Manejar estado y props efectivamente</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Implementar routing con React Router</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Integrar APIs y manejar datos externos</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Optimizar el rendimiento de aplicaciones React</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Desplegar aplicaciones en producción</span>
                </div>
              </div>
            </div>
            <!-- Requisitos -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requisitos</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Conocimientos básicos de HTML, CSS y JavaScript</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Comprensión de conceptos de programación</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Computadora con acceso a internet</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Editor de código (VS Code recomendado)</span>
                </li>
              </ul>
            </div>
            <!-- Contenido del curso -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contenido del curso</h2>
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Fundamentos de React</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Introducción a React</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">15 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Configuración del entorno</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">20 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">JSX y componentes</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">25 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Props y estado</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">30 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Quiz: Fundamentos</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">10 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">quiz</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Componentes Avanzados</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Hooks personalizados</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">35 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Context API</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">40 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Renderizado condicional</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">25 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Listas y keys</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">20 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Routing y Navegación</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Configuración de React Router</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">30 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Navegación programática</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">25 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Rutas protegidas</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">35 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
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
                    <span class="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Carlos Rodríguez</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Carlos Rodríguez es un desarrollador senior con más de 8 años de experiencia en desarrollo web. Ha trabajado en empresas como Google y Facebook, y ha ayudado a más de 50,000 estudiantes a aprender React.js.</p>
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
                  <span class="text-gray-900 dark:text-white font-medium">Español</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Nivel:</span>
                  <span class="text-gray-900 dark:text-white font-medium">Intermedio</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Duración:</span>
                  <span class="text-gray-900 dark:text-white font-medium">25 horas</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Estudiantes:</span>
                  <span class="text-gray-900 dark:text-white font-medium">15,420</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Valoración:</span>
                  <span class="text-gray-900 dark:text-white font-medium">4.8 ⭐</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Última actualización:</span>
                  <span class="text-gray-900 dark:text-white font-medium">Diciembre 2024</span>
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
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">$94</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Vue.js Completo</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">$84</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Node.js Backend</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">$89</p>
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
export class ReactCompletoComponent {} 