import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-12 md:py-20">
      <div class="container-custom text-center px-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Transforma tu futuro con
          <span class="text-yellow-300 block sm:inline">educación de calidad</span>
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
          Accede a cursos profesionales en línea diseñados para impulsar tu carrera. 
          Aprende a tu ritmo, desde cualquier lugar.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a routerLink="/cursos" class="btn-primary text-lg px-6 md:px-8 py-3 md:py-4">
            Explorar Cursos
          </a>
          <a routerLink="/nosotros" class="btn-outline text-lg px-6 md:px-8 py-3 md:py-4 border-white text-white hover:bg-white hover:text-gray-900">
            Conoce Más
          </a>
        </div>
      </div>
    </section>

    <!-- Estadísticas -->
    <section class="py-12 md:py-16 bg-white dark:bg-gray-800">
      <div class="container-custom px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div>
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10,000+</div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">Estudiantes Activos</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">200+</div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">Cursos Disponibles</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">95%</div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">Tasa de Satisfacción</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">Instructores Expertos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Características -->
    <section class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-custom px-4">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por qué elegir SC?
          </h2>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ofrecemos una experiencia de aprendizaje única diseñada para tu éxito
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="card text-center">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white">Contenido de Calidad</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Cursos desarrollados por expertos en la industria con contenido actualizado y relevante.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white">Aprendizaje Flexible</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Estudia a tu propio ritmo, 24/7. Accede al contenido desde cualquier dispositivo.
            </p>
          </div>

          <div class="card text-center md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white">Certificados Reconocidos</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Obtén certificados profesionales que respaldan tus conocimientos y habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cursos Destacados -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div class="container-custom px-4">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cursos Destacados
          </h2>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre nuestros cursos más populares y comienza tu viaje de aprendizaje
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="course-card">
            <div class="h-40 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium">Desarrollo Web</span>
                <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">4.8 ⭐</span>
              </div>
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">React.js Completo</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                Aprende React.js desde cero hasta crear aplicaciones web modernas y escalables.
              </p>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">\$89</span>
                <a routerLink="/cursos/react" class="btn-primary text-sm md:text-base">Ver Curso</a>
              </div>
            </div>
          </div>

          <div class="course-card">
            <div class="h-40 md:h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium">Marketing Digital</span>
                <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">4.9 ⭐</span>
              </div>
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Marketing en Redes Sociales</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                Domina las estrategias de marketing digital para hacer crecer tu negocio.
              </p>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">\$79</span>
                <a routerLink="/cursos/marketing" class="btn-primary text-sm md:text-base">Ver Curso</a>
              </div>
            </div>
          </div>

          <div class="course-card md:col-span-2 lg:col-span-1">
            <div class="h-40 md:h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium">Diseño</span>
                <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">4.7 ⭐</span>
              </div>
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">UI/UX Design Master</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                Crea interfaces de usuario atractivas y experiencias digitales memorables.
              </p>
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">\$99</span>
                <a routerLink="/cursos/design" class="btn-primary text-sm md:text-base">Ver Curso</a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8 md:mt-12">
          <a routerLink="/cursos" class="btn-outline text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            Ver Todos los Cursos
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-primary-600 dark:bg-primary-700 text-white">
      <div class="container-custom text-center px-4">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          ¿Listo para comenzar tu aprendizaje?
        </h2>
        <p class="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Únete a miles de estudiantes que ya están transformando sus carreras con EduCursos
        </p>
        <a routerLink="/registro" class="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors">
          Comenzar Ahora
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {} 