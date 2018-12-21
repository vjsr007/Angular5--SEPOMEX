import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  exports: [
    InputTextModule,
    FieldsetModule,
    ButtonModule,
    TableModule,
    ScrollPanelModule,
    PanelModule,
    BreadcrumbModule,
    PanelMenuModule
  ]
})
export class PrimengModule { }
