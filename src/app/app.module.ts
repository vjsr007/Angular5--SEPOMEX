import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SpinnerComponent } from './shared/spinner.component';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.routing';
import { AppHeaderComponent } from './layouts/header/header.component';
import { AppSidebarComponent } from './layouts/sidebar/sidebar.component';
import { PaisComponent } from './components/pais/pais.component';
import { NonfoundComponent } from './components/nonfound/nonfound.component';
import { PaisService } from './services/pais.service';
import { PrimengModule } from './primeng.module';
import { TacosModule } from './components/tacos/tacos.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    PaisComponent,
    NonfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, MaterialModule, SharedModule, PrimengModule, TacosModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
