import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Header -->
    <section
      class="bg-primary-600 dark:bg-primary-700 text-white py-12 md:py-16"
    >
      <div class="container-custom text-center px-4">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Contáctanos
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje y
          te responderemos pronto.
        </p>
      </div>
    </section>

    <!-- Información de contacto y formulario -->
    <section class="py-12 md:py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      <!-- Logo de fondo difuminado formulario centrado y grande -->
      <img src="assets/images/logoescapad.svg" alt="Logo Escapad difuminado" class="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] opacity-10 blur-[2px] z-0" aria-hidden="true" />
      <div class="container-custom px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Información de contacto -->
          <div>
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8"
            >
              Información de Contacto
            </h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i
                    class="fas fa-map-marker-alt text-primary-600 dark:text-primary-400 text-lg md:text-xl"
                  ></i>
                </div>
                <div>
                  <h3
                    class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Dirección
                  </h3>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300"
                  >
                    Av. Principal 123, Oficina 456<br />
                    Ciudad de México, CDMX 12345<br />
                    México
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i
                    class="fas fa-phone-alt text-primary-600 dark:text-primary-400 text-lg md:text-xl"
                  ></i>
                </div>
                <div>
                  <h3
                    class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Teléfono
                  </h3>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300"
                  >
                    +52 (55) 1234-5678<br />
                    +52 (55) 8765-4321
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i
                    class="fas fa-envelope text-primary-600 dark:text-primary-400 text-lg md:text-xl"
                  ></i>
                </div>
                <div>
                  <h3
                    class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Email
                  </h3>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300"
                  >
                    info&#64;educursos.com<br />
                    soporte&#64;educursos.com
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 md:space-x-4">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i
                    class="fas fa-clock text-primary-600 dark:text-primary-400 text-lg md:text-xl"
                  ></i>
                </div>
                <div>
                  <h3
                    class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Horarios de Atención
                  </h3>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300"
                  >
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                    Sábados: 9:00 AM - 2:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <!-- Redes sociales -->
            <div class="mt-8">
              <h3
                class="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-4"
              >
                Síguenos en Redes Sociales
              </h3>
              <div class="flex space-x-3 md:space-x-4">
                <a
                  href="#"
                  class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="w-9 h-9 md:w-10 md:h-10 bg-primary-600 dark:bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="card">
            <h2
              class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Envíanos un Mensaje
            </h2>

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
                    class="form-input"
                  />
                </div>
                <div>
                  <label for="lastName" class="form-label">Apellido</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    [(ngModel)]="formData.lastName"
                    required
                    class="form-input"
                  />
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
                  class="form-input"
                />
              </div>

              <div class="mb-4">
                <label for="subject" class="form-label">Asunto</label>
                <select
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="form-input"
                >
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
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn-primary w-full"
                [disabled]="!contactForm.form.valid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Enviar Mensaje</span>
                <span *ngIf="isSubmitting">Enviando...</span>
              </button>
            </form>

            <div
              *ngIf="submitMessage"
              class="mt-4 p-4 rounded-lg"
              [class]="
                submitMessage.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
              "
            >
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
          <h2
            class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Nuestra Ubicación
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Visítanos en nuestras oficinas para una atención personalizada
          </p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps?q=Av.+Principal+123,+Ciudad+de+México&output=embed"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación Escapad"
          ></iframe>
        </div>
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
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitMessage: { type: 'success' | 'error'; text: string } | null = null;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = null;

    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitMessage = {
        type: 'success',
        text: '¡Gracias por tu mensaje! Te responderemos en las próximas 24 horas.',
      };

      // Limpiar formulario
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      };

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.submitMessage = null;
      }, 5000);
    }, 2000);
  }
}
