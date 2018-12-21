import { Routes } from '@angular/router';
import { TacosCrudComponent } from './crud/tacos.crud.component';

export const tacosRoutes: Routes = [
  { path: 'tacos/editar/:id', component: TacosCrudComponent },
  { path: 'tacos/agregar', component: TacosCrudComponent }
];
