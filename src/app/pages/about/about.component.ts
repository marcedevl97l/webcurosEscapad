import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header -->
    <section class="bg-primary-600 dark:bg-primary-700 text-white py-16">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Conoce más sobre nuestra misión, visión y el equipo que hace posible tu aprendizaje
        </p>
      </div>
    </section>

    <!-- Misión y Visión -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div class="bg-gradient-to-br from-primary-100 dark:from-primary-900/30 to-purple-100 dark:to-purple-900/30 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Visión</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Ser la plataforma líder en educación en línea, reconocida por la excelencia académica, 
              la innovación tecnológica y el impacto positivo en la transformación de carreras profesionales.
            </p>
          </div>
          <div class="bg-gradient-to-br from-primary-100 dark:from-primary-900/30 to-purple-100 dark:to-purple-900/30 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Misión</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Ser la plataforma líder en educación en línea, reconocida por la excelencia académica, 
              la innovación tecnológica y el impacto positivo en la transformación de carreras profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Valores</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo y relación con los estudiantes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Excelencia</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Nos esforzamos por ofrecer la mejor calidad en todos nuestros cursos y servicios.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Comunidad</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Fomentamos una comunidad de aprendizaje colaborativo y de apoyo mutuo.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Innovación</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Constantemente innovamos en metodologías y tecnologías de aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Equipo</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible tu aprendizaje
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-3xl font-bold">CR</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Carlos Rodríguez</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">CEO & Fundador</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Más de 15 años de experiencia en educación y tecnología.
            </p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-3xl font-bold">AG</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Ana García</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">Directora Académica</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Especialista en metodologías de aprendizaje digital.
            </p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-3xl font-bold">ML</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">María López</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">Directora de Diseño</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Experta en experiencia de usuario y diseño instruccional.
            </p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-3xl font-bold">RS</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Roberto Silva</h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">CTO</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Líder en desarrollo de plataformas educativas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas -->
    <section class="py-20 bg-primary-600 dark:bg-primary-700 text-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">5+</div>
            <div class="text-lg">Años de Experiencia</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div class="text-lg">Instructores Expertos</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <div class="text-lg">Cursos Disponibles</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div class="text-lg">Estudiantes Satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {} 