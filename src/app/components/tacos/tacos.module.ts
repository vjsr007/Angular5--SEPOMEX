import { TacosComponent } from './tacos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'app/primeng.module';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TacosService } from 'app/services/tacos.service';
import { RouterModule } from '@angular/router';
import { tacosRoutes } from './tacos.routing';
import { TacosCrudComponent } from './crud/tacos.crud.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule,
    HttpClientModule, MaterialModule, SharedModule,
    PrimengModule, RouterModule.forRoot(tacosRoutes)
  ],
  declarations: [
    TacosComponent, TacosCrudComponent
  ],
  providers: [TacosService ],
  bootstrap: [TacosComponent]
})
export class TacosModule {}
