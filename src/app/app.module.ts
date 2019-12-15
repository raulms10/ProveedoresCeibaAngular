import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloProveedorModule } from './modulo-proveedor/modulo-proveedor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuloCoreModule } from './modulo-core/modulo-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloProveedorModule,
    ModuloCoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
