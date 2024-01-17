import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { IsAdultPipe } from './pipes/is-adult.pipe';
import { MoneyMaskPipe } from './pipes/money-mask.pipe';
import { Title20Directive } from './directives/title20.directive';

@NgModule({
  // Componentes
  declarations: [AppComponent, AlumnosComponent, FullNamePipe, IsAdultPipe, MoneyMaskPipe, Title20Directive],
  // Modulos
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],

  // Servicios y proveedores
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
