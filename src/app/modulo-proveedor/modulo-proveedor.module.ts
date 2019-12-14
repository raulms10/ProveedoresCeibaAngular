import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatButtonModule, MatTooltipModule, MatMenuModule,
         MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ModuloProveedorRoutingModule } from './modulo-proveedor-routing.module';
import { RegistroProveedorComponent } from './componentes/registro-proveedor/registro-proveedor.component';
import { ConsultaProveedorComponent } from './componentes/consulta-proveedor/consulta-proveedor.component';

@NgModule({
  declarations: [RegistroProveedorComponent, ConsultaProveedorComponent],
  imports: [
    CommonModule,
    ModuloProveedorRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [RegistroProveedorComponent, ConsultaProveedorComponent, 
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatMenuModule,
    BrowserModule,
    FormsModule, BrowserAnimationsModule]
})
export class ModuloProveedorModule { }
