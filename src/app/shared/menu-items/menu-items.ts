import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'tacos', name: 'Tacos', type: 'link', icon: 'av_timer' },
  { state: 'pais', type: 'link', name: 'Paises', icon: 'crop_7_5' },
  { state: 'estado', type: 'link', name: 'Estados', icon: 'view_comfy' },
  { state: 'ciudad', type: 'link', name: 'Ciudades', icon: 'view_list' },
  { state: 'municipio', type: 'link', name: 'Municipios', icon: 'view_headline' },
  { state: 'cp', type: 'link', name: 'Codigos Postales', icon: 'tab' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
