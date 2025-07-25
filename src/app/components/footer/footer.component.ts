import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer
      class="bg-gray-900 dark:bg-black text-white transition-all duration-300"
    >
      <div class="container-custom py-8 md:py-12 px-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <!-- Información del instituto -->
          <div class="col-span-1 md:col-span-2 lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div
                class="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-lg">E</span>
              </div>
              <span class="text-lg md:text-xl font-bold">Escapad</span>
            </div>
            <p
              class="text-gray-300 dark:text-gray-400 mb-4 max-w-md text-sm md:text-base"
            >
              Somos un instituto líder en educación en línea, comprometido con
              brindar cursos de alta calidad que transformen tu futuro
              profesional.
            </p>
            <div class="flex space-x-3 md:space-x-4">
              <a
                href="#"
                class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter w-5 h-5 md:w-6 md:h-6"></i>
              </a>
              <a
                href="#"
                class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f w-5 h-5 md:w-6 md:h-6"></i>
              </a>
              <a
                href="#"
                class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram w-5 h-5 md:w-6 md:h-6"></i>
              </a>
            </div>
          </div>

          <!-- Enlaces rápidos -->
          <div>
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Enlaces Rápidos
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  routerLink="/cursos"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Todos los Cursos</a
                >
              </li>
              <li>
                <a
                  routerLink="/nosotros"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Sobre Nosotros</a
                >
              </li>
              <li>
                <a
                  routerLink="/contacto"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Contacto</a
                >
              </li>
              <li>
                <a
                  routerLink="/blog"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Blog</a
                >
              </li>
            </ul>
          </div>

          <!-- Soporte -->
          <div>
            <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Soporte
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Centro de Ayuda</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Términos y Condiciones</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >Política de Privacidad</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border-t border-gray-800 dark:border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center"
        >
          <p class="text-gray-400 dark:text-gray-500 text-sm md:text-base">
            © 2025 Escapad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
