import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';

const MENUITEMS: MenuItem[] = [
  {
    label: 'Catálogos', icon: 'av_timer', expanded: true,
    items: [
      { label: 'Tacos', icon: 'av_timer', routerLink: 'tacos' },
      { label: 'Paises', icon: 'crop_7_5', routerLink: 'pais'  },
      { label: 'Estados', icon: 'view_comfy', routerLink: 'estado'  },
      { label: 'Ciudades', icon: 'view_list', routerLink: 'ciudad'  },
      { label: 'Municipios', icon: 'view_headline', routerLink: 'municipio'  },
      { label: 'Codigos Postales', icon: 'tab', routerLink: 'codpost'  },
  ]
  },
  {
    label: 'Ventas', icon: 'av_timer',
    items: [
      { label: 'Punto de Venta', icon: 'av_timer', routerLink: 'puntoventa' },
      { label: 'Facturación', icon: 'crop_7_5', routerLink: 'facturacion'  }
  ]
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): MenuItem[] {
    return MENUITEMS;
  }
}
