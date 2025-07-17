import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {
  title = 'EduCursos - Instituto de Educación en Línea';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // El servicio de tema se inicializa automáticamente en su constructor
    // Esto asegura que el tema se cargue correctamente al iniciar la aplicación
  }
}
