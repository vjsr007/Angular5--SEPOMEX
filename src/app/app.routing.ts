import { PaisComponent } from './components/pais/pais.component';
import { Routes } from '@angular/router';
import { TacosComponent } from './components/tacos/tacos.component';
import { NonfoundComponent } from './components/nonfound/nonfound.component';

export const appRoutes: Routes = [
  { path: '', component: TacosComponent },
  { path: 'tacos', component: TacosComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'nonfound', component: NonfoundComponent },
  { path: '**', redirectTo: 'nonfound' }
];
