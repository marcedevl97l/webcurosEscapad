import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header
      class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300"
    >
      <div class="container-custom">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2">
              <div
                class="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-lg">E</span>
              </div>
              <span
                class="text-lg md:text-xl font-bold text-gray-900 dark:text-white"
                >Escapad</span
              >
            </a>
          </div>

          <!-- Navegación Desktop -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a
              routerLink="/"
              routerLinkActive="text-primary-600 dark:text-primary-400"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >Inicio</a
            >
            <a
              routerLink="/cursos"
              routerLinkActive="text-primary-600 dark:text-primary-400"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >Cursos</a
            >
            <a
              routerLink="/nosotros"
              routerLinkActive="text-primary-600 dark:text-primary-400"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >Nosotros</a
            >
            <a
              routerLink="/contacto"
              routerLinkActive="text-primary-600 dark:text-primary-400"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >Contacto</a
            >
          </nav>

          <!-- Botones de acción Desktop -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Botón de cambio de tema -->
            <button
              (click)="toggleTheme()"
              class="theme-toggle theme-icon"
              [attr.aria-label]="
                themeService.getCurrentTheme() === 'light'
                  ? 'Cambiar a tema oscuro'
                  : 'Cambiar a tema claro'
              "
            >
              <!-- Icono de sol (tema claro) -->
              <svg
                *ngIf="themeService.getCurrentTheme() === 'light'"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
              <!-- Icono de luna (tema oscuro) -->
              <svg
                *ngIf="themeService.getCurrentTheme() === 'dark'"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>

            <a
              routerLink="/login"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >Iniciar Sesión</a
            >
            <a routerLink="/registro" class="btn-primary">Registrarse</a>
          </div>

          <!-- Menú móvil -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              *ngIf="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              *ngIf="mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Menú móvil desplegable -->
        <div
          *ngIf="mobileMenuOpen"
          class="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 animate-fade-in bg-white dark:bg-gray-900"
        >
          <nav class="flex flex-col space-y-4">
            <a
              routerLink="/"
              routerLinkActive="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
            >
              Inicio
            </a>
            <a
              routerLink="/cursos"
              routerLinkActive="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
            >
              Cursos
            </a>
            <a
              routerLink="/nosotros"
              routerLinkActive="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
            >
              Nosotros
            </a>
            <a
              routerLink="/contacto"
              routerLinkActive="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-colors"
            >
              Contacto
            </a>
          </nav>

          <!-- Botones de acción móviles -->
          <div
            class="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <!-- Botón de cambio de tema móvil -->

            <a
              routerLink="/login"
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              routerLink="/registro"
              (click)="closeMobileMenu()"
              class="btn-primary text-center"
            >
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
