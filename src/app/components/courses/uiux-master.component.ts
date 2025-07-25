import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-uiux-master',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header del curso UI/UX Design Master -->
    <section class="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8 md:py-12">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Información del curso -->
          <div class="lg:col-span-2">
            <nav class="mb-4">
              <a routerLink="/cursos" class="text-orange-200 hover:text-white transition-colors text-sm">
                ← Volver a Cursos
              </a>
            </nav>
            <div class="mb-4">
              <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Diseño
              </span>
            </div>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              UI/UX Design Master
            </h1>
            <p class="text-lg md:text-xl mb-6 text-gray-100">
              Crea interfaces de usuario atractivas y experiencias digitales memorables con las mejores prácticas de UI/UX.
            </p>
            <div class="flex flex-wrap items-center gap-4 mb-6">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                  <span class="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <p class="font-medium">María López</p>
                  <p class="text-sm text-orange-100">Instructora</p>
                </div>
              </div>
              <div class="flex items-center text-sm">
                <span class="text-yellow-300 mr-1">⭐</span>
                <span class="font-medium">4.7</span>
                <span class="text-orange-100 ml-1">(9,500 estudiantes)</span>
              </div>
              <div class="flex items-center text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>20 horas</span>
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
                <div class="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  $99
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
                  <svg class="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Acceso de por vida</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Certificado de finalización</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Acceso en dispositivos móviles</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Diseñar interfaces atractivas y funcionales</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Aplicar principios de usabilidad y accesibilidad</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Crear prototipos interactivos</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Testear y mejorar la experiencia de usuario</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Utilizar herramientas de diseño profesional</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Desarrollar portafolio de proyectos UI/UX</span>
                </div>
              </div>
            </div>
            <!-- Requisitos -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requisitos</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Interés en el diseño digital</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Computadora con acceso a internet</span>
                </li>
                <li class="flex items-start">
                  <span class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">Ganas de aprender y crear</span>
                </li>
              </ul>
            </div>
            <!-- Contenido del curso -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contenido del curso</h2>
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Fundamentos de UI/UX</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Introducción al diseño UI/UX</span>
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
                        <span class="text-gray-700 dark:text-gray-300">Principios de usabilidad</span>
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
                        <span class="text-gray-700 dark:text-gray-300">Accesibilidad en el diseño</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">25 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Prototipado y Herramientas</h3>
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <div class="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-700 dark:text-gray-300">Herramientas de prototipado</span>
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
                        <span class="text-gray-700 dark:text-gray-300">Creación de prototipos interactivos</span>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span class="mr-2">40 min</span>
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">video</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Instructora -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre la instructora</h2>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div class="flex items-start">
                  <div class="w-16 h-16 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">María López</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Experta en experiencia de usuario y diseño instruccional. Ha liderado proyectos de diseño digital para empresas internacionales y startups.</p>
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
                  <span class="text-gray-900 dark:text-white font-medium">20 horas</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Estudiantes:</span>
                  <span class="text-gray-900 dark:text-white font-medium">9,500</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Valoración:</span>
                  <span class="text-gray-900 dark:text-white font-medium">4.7 ⭐</span>
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
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">React.js Completo</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">$89</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded mr-3"></div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">Marketing en Redes Sociales</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm">$79</p>
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
export class UiuxMasterComponent {} 