import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternosComponent } from './pages/internos/internos.component';
import { InternoFormComponent } from './pages/interno-form/interno-form.component';

const routes: Routes = [
  { path: '', component: InternosComponent },
  { path: 'nuevo', component: InternoFormComponent },
  { path: 'editar/:id', component: InternoFormComponent }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}
