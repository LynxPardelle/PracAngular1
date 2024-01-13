import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  // Componentes
  declarations: [
    AppComponent,
    AlumnosComponent
  ],
  // Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Servicios y proveedores
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
