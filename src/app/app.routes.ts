import { Routes } from '@angular/router';
import { InternosComponent } from './pages/internos/internos.component';
import { InternoFormComponent } from './pages/interno-form/interno-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'internos/nuevo', pathMatch: 'full' },
  { path: 'internos', component: InternosComponent },
  { path: 'internos/nuevo', component: InternoFormComponent },
  { path: 'internos/editar/:id', component: InternoFormComponent },
];
