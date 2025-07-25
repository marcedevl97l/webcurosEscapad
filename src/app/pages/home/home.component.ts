import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section Reformado -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Imagen de fondo con overlay -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/85 to-indigo-900/90 z-10"
        ></div>
        <img
          src="assets/images/estudiantes.jpg"
          alt="Estudiantes aprendiendo"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Contenido principal -->
      <div class="container-custom text-center px-4 relative z-20">
        <!-- Badge animado -->
        <div
          class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in-up"
        >
          <span
            class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
          ></span>
          +15,000 estudiantes ya confían en nosotros
        </div>

        <!-- Título principal con animación -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200 text-white drop-shadow-lg"
        >
          Transforma tu futuro con
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300 block sm:inline animate-gradient-x"
          >
            educación de calidad
          </span>
        </h1>

        <!-- Descripción mejorada -->
        <p
          class="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-gray-100 leading-relaxed animate-fade-in-up animation-delay-400"
        >
          Accede a cursos profesionales diseñados por expertos de la industria.
          <span class="font-semibold text-yellow-300">Aprende a tu ritmo</span>,
          desde cualquier lugar, y obtén las habilidades que necesitas para
          destacar en el mercado laboral actual.
        </p>

        <!-- Características destacadas -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto animate-fade-in-up animation-delay-600"
        >
          <div class="flex items-center justify-center space-x-3 text-white">
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <span class="text-sm md:text-base">Aprendizaje 24/7</span>
          </div>
          <div class="flex items-center justify-center space-x-3 text-white">
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <span class="text-sm md:text-base">Certificados oficiales</span>
          </div>
          <div class="flex items-center justify-center space-x-3 text-white">
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span class="text-sm md:text-base">Comunidad activa</span>
          </div>
        </div>

        <!-- Botones de acción -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fade-in-up animation-delay-800"
        >
          <a
            routerLink="/cursos"
            class="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span class="relative z-10">Explorar Cursos</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </a>
          <a
            routerLink="/nosotros"
            class="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
          >
            <span class="flex items-center justify-center space-x-2">
              <span>Conoce Más</span>
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="mt-8 animate-fade-in-up animation-delay-1000">
          <div
            class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto animate-bounce"
          >
            <div
              class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas -->
    <section
      class="py-12 md:py-16 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div class="container-custom px-4 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div class="animate-fade-in-up animation-delay-100">
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              15,000+
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Estudiantes Activos
            </div>
          </div>
          <div class="animate-fade-in-up animation-delay-200">
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              200+
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Cursos Disponibles
            </div>
          </div>
          <div class="animate-fade-in-up animation-delay-300">
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              95%
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Tasa de Satisfacción
            </div>
          </div>
          <div class="animate-fade-in-up animation-delay-400">
            <div
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              50+
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Instructores Expertos
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Características -->
    <section
      class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <!-- Logo de fondo difuminado -->
      <img
        src="assets/images/logoescapad.svg"
        alt="Logo Escapad difuminado"
        class="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[650px] opacity-10 blur-[2px] z-0"
        aria-hidden="true"
      />
      <div class="container-custom px-4 relative z-10">
        <div class="text-center mb-12 md:mb-16">
          <h2
            class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            ¿Por qué elegir Escapad?
          </h2>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Ofrecemos una experiencia de aprendizaje única diseñada para tu
            éxito
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            class="card text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
            >
              <svg
                class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white"
            >
              Contenido de Calidad
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Cursos desarrollados por expertos en la industria con contenido
              actualizado y relevante.
            </p>
          </div>

          <div
            class="card text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
            >
              <svg
                class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white"
            >
              Aprendizaje Flexible
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Estudia a tu propio ritmo, 24/7. Accede al contenido desde
              cualquier dispositivo.
            </p>
          </div>

          <div
            class="card text-center md:col-span-2 lg:col-span-1 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
            >
              <svg
                class="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white"
            >
              Certificados Reconocidos
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Obtén certificados profesionales que respaldan tus conocimientos y
              habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cursos Destacados -->
    <section class="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div class="container-custom px-4">
        <div class="text-center mb-12 md:mb-16">
          <h2
            class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Cursos Destacados
          </h2>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Descubre nuestros cursos más populares y comienza tu viaje de
            aprendizaje
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            class="course-card hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="h-40 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600"
            ></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span
                  class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium"
                  >Desarrollo Web</span
                >
                <span
                  class="text-xs md:text-sm text-gray-500 dark:text-gray-400"
                  >4.8 ⭐</span
                >
              </div>
              <h3
                class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white"
              >
                React.js Completo
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base"
              >
                Aprende React.js desde cero hasta crear aplicaciones web
                modernas y escalables.
              </p>
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <span
                  class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400"
                  >$89</span
                >
                <a
                  routerLink="/cursos/react"
                  class="btn-primary text-sm md:text-base"
                  >Ver Curso</a
                >
              </div>
            </div>
          </div>

          <div
            class="course-card hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="h-40 md:h-48 bg-gradient-to-br from-green-500 to-teal-600"
            ></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span
                  class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium"
                  >Marketing Digital</span
                >
                <span
                  class="text-xs md:text-sm text-gray-500 dark:text-gray-400"
                  >4.9 ⭐</span
                >
              </div>
              <h3
                class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white"
              >
                Marketing en Redes Sociales
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base"
              >
                Domina las estrategias de marketing digital para hacer crecer tu
                negocio.
              </p>
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <span
                  class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400"
                  >$79</span
                >
                <a
                  routerLink="/cursos/marketing"
                  class="btn-primary text-sm md:text-base"
                  >Ver Curso</a
                >
              </div>
            </div>
          </div>

          <div
            class="course-card md:col-span-2 lg:col-span-1 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="h-40 md:h-48 bg-gradient-to-br from-orange-500 to-red-600"
            ></div>
            <div class="p-4 md:p-6">
              <div class="flex items-center justify-between mb-2">
                <span
                  class="text-xs md:text-sm text-primary-600 dark:text-primary-400 font-medium"
                  >Diseño</span
                >
                <span
                  class="text-xs md:text-sm text-gray-500 dark:text-gray-400"
                  >4.7 ⭐</span
                >
              </div>
              <h3
                class="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white"
              >
                UI/UX Design Master
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base"
              >
                Crea interfaces de usuario atractivas y experiencias digitales
                memorables.
              </p>
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <span
                  class="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400"
                  >$99</span
                >
                <a
                  routerLink="/cursos/design"
                  class="btn-primary text-sm md:text-base"
                  >Ver Curso</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8 md:mt-12">
          <a
            routerLink="/cursos"
            class="btn-outline text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
          >
            Ver Todos los Cursos
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 md:py-20 bg-primary-600 dark:bg-primary-700 text-white relative overflow-hidden"
    >
      <!-- Logo de fondo difuminado para CTA -->
      <img
        src="assets/images/logoescapad.svg"
        alt="Logo Escapad difuminado"
        class="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[500px] opacity-10 blur-sm z-0"
        aria-hidden="true"
      />
      <div class="container-custom text-center px-4 relative z-10">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          ¿Listo para comenzar tu aprendizaje?
        </h2>
        <p class="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Únete a miles de estudiantes que ya están transformando sus carreras
          con Escapad
        </p>
        <a
          routerLink="/registro"
          class="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors"
        >
          Comenzar Ahora
        </a>
      </div>
    </section>

    <!-- Botón flotante de WhatsApp -->
    <a
      href="https://wa.me/34612345678?text=Hola,%20me%20interesa%20saber%20más%20sobre%20los%20cursos%20de%20Escapad"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fab fa-whatsapp text-2xl"></i>
    </a>
  `,
  styles: [
    `
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
      }

      .animation-delay-100 {
        animation-delay: 0.1s;
      }
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
      .animation-delay-800 {
        animation-delay: 0.8s;
      }
      .animation-delay-1000 {
        animation-delay: 1s;
      }

      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradientX 3s ease infinite;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes gradientX {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    `,
  ],
})
export class HomeComponent {}
