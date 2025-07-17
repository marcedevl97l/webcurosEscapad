import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Header -->
    <section class="bg-primary-600 dark:bg-primary-700 text-white py-12 md:py-16">
      <div class="container-custom text-center px-4">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contáctanos</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
        </p>
      </div>
    </section>

    <!-- Información de contacto y formulario -->
    <section class="py-12 md:py-20 bg-white dark:bg-gray-800">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Información de contacto -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">Información de Contacto</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">Dirección</h3>
                  <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Av. Principal 123, Oficina 456<br>
                    Ciudad de México, CDMX 12345<br>
                    México
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">Teléfono</h3>
                  <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    +52 (55) 1234-5678<br>
                    +52 (55) 8765-4321
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    info&#64;educursos.com<br>
                    soporte&#64;educursos.com
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">Horarios de Atención</h3>
                  <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br>
                    Sábados: 9:00 AM - 2:00 PM<br>
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <!-- Redes sociales -->
            <div class="mt-8">
              <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-4">Síguenos en Redes Sociales</h3>
              <div class="flex space-x-3 md:space-x-4">
                <a href="#" class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors">
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors">
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors">
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="card">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un Mensaje</h2>
            
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="firstName" class="form-label">Nombre</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    [(ngModel)]="formData.firstName"
                    required
                    class="form-input">
                </div>
                <div>
                  <label for="lastName" class="form-label">Apellido</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    [(ngModel)]="formData.lastName"
                    required
                    class="form-input">
                </div>
              </div>

              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="form-input">
              </div>

              <div class="mb-4">
                <label for="subject" class="form-label">Asunto</label>
                <select 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="form-input">
                  <option value="">Selecciona un asunto</option>
                  <option value="general">Consulta General</option>
                  <option value="courses">Información de Cursos</option>
                  <option value="technical">Soporte Técnico</option>
                  <option value="billing">Facturación</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="form-label">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="form-input resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."></textarea>
              </div>

              <button 
                type="submit" 
                class="btn-primary w-full"
                [disabled]="!contactForm.form.valid || isSubmitting">
                <span *ngIf="!isSubmitting">Enviar Mensaje</span>
                <span *ngIf="isSubmitting">Enviando...</span>
              </button>
            </form>

            <div *ngIf="submitMessage" class="mt-4 p-4 rounded-lg" [class]="submitMessage.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'">
              {{ submitMessage.text }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section class="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-custom px-4">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Ubicación</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Visítanos en nuestras oficinas para una atención personalizada
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 overflow-hidden">
          <div class="h-64 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p class="text-gray-600 dark:text-gray-400">Mapa interactivo</p>
              <p class="text-sm text-gray-500 dark:text-gray-500">Av. Principal 123, Ciudad de México</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage: { type: 'success' | 'error', text: string } | null = null;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = null;

    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitMessage = {
        type: 'success',
        text: '¡Gracias por tu mensaje! Te responderemos en las próximas 24 horas.'
      };

      // Limpiar formulario
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      };

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.submitMessage = null;
      }, 5000);
    }, 2000);
  }
} 