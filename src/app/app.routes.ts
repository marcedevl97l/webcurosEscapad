import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { ReactCompletoComponent } from './components/courses/react-completo.component';
import { MarketingAvanzadoComponent } from './components/courses/marketing-avanzado.component';
import { UiuxMasterComponent } from './components/courses/uiux-master.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'cursos/:id', component: CourseDetailComponent },
  { path: 'curso/react-completo', component: ReactCompletoComponent },
  { path: 'curso/marketing-avanzado', component: MarketingAvanzadoComponent },
  { path: 'curso/uiux-master', component: UiuxMasterComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
