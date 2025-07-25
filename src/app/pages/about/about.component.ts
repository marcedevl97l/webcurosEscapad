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
          Conoce más sobre nuestra misión, visión y el equipo que hace posible
          tu aprendizaje
        </p>
      </div>
    </section>

    <!-- Misión y Visión -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            class="bg-gradient-to-br from-primary-100 dark:from-primary-900/30 to-purple-100 dark:to-purple-900/30 p-8 rounded-2xl"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Visión
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Ser la plataforma líder en educación en línea, reconocida por la
              excelencia académica, la innovación tecnológica y el impacto
              positivo en la transformación de carreras profesionales.
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-primary-100 dark:from-primary-900/30 to-purple-100 dark:to-purple-900/30 p-8 rounded-2xl"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Misión
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Ser la plataforma líder en educación en línea, reconocida por la
              excelencia académica, la innovación tecnológica y el impacto
              positivo en la transformación de carreras profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <!-- Logo de fondo difuminado valores -->
      <img
        src="assets/images/logoescapad.svg"
        alt="Logo Escapad difuminado"
        class="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] opacity-10 blur-[2px] z-0"
        aria-hidden="true"
      />
      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Nuestros Valores
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo y relación con los
            estudiantes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i
                class="fas fa-award text-primary-600 dark:text-primary-400 text-3xl"
              ></i>
            </div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              Excelencia
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Nos esforzamos por ofrecer la mejor calidad en todos nuestros
              cursos y servicios.
            </p>
          </div>

          <div class="card text-center">
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i
                class="fas fa-users text-primary-600 dark:text-primary-400 text-3xl"
              ></i>
            </div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              Comunidad
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Fomentamos una comunidad de aprendizaje colaborativo y de apoyo
              mutuo.
            </p>
          </div>

          <div class="card text-center">
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i
                class="fas fa-lightbulb text-primary-600 dark:text-primary-400 text-3xl"
              ></i>
            </div>
            <h3
              class="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              Innovación
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Constantemente innovamos en metodologías y tecnologías de
              aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Nuestro Equipo
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible tu
            aprendizaje
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
            >
              <img
                src="assets/images/logoescapad.svg"
                alt="Logo marca de agua"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 opacity-10 pointer-events-none select-none"
                aria-hidden="true"
              />
              <span class="text-white text-3xl font-bold relative z-10"
                >CR</span
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Carlos Rodríguez
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">
              CEO & Fundador
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Más de 15 años de experiencia en educación y tecnología.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
            >
              <img
                src="assets/images/logoescapad.svg"
                alt="Logo marca de agua"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 opacity-10 pointer-events-none select-none"
                aria-hidden="true"
              />
              <span class="text-white text-3xl font-bold relative z-10"
                >AG</span
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Ana García
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">
              Directora Académica
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Especialista en metodologías de aprendizaje digital.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
            >
              <img
                src="assets/images/logoescapad.svg"
                alt="Logo marca de agua"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 opacity-10 pointer-events-none select-none"
                aria-hidden="true"
              />
              <span class="text-white text-3xl font-bold relative z-10"
                >ML</span
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              María López
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">
              Directora de Diseño
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Experta en experiencia de usuario y diseño instruccional.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
            >
              <img
                src="assets/images/logoescapad.svg"
                alt="Logo marca de agua"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 opacity-10 pointer-events-none select-none"
                aria-hidden="true"
              />
              <span class="text-white text-3xl font-bold relative z-10"
                >RS</span
              >
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Roberto Silva
            </h3>
            <p class="text-primary-600 dark:text-primary-400 mb-2">CTO</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Líder en desarrollo de plataformas educativas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas -->
    <section
      class="py-20 bg-primary-600 dark:bg-primary-700 text-white relative overflow-hidden"
    >
      <!-- Logo de fondo difuminado estadísticas -->
      <img
        src="assets/images/logoescapad.svg"
        alt="Logo Escapad difuminado"
        class="pointer-events-none select-none absolute right-8 bottom-8 w-[300px] md:w-[400px] opacity-10 blur-[2px] z-0"
        aria-hidden="true"
      />
      <div class="container-custom relative z-10">
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
  `,
})
export class AboutComponent {}
