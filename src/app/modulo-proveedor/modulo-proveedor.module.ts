import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloProveedorRoutingModule } from './modulo-proveedor-routing.module';
import { RegistroProveedorComponent } from './componentes/registro-proveedor/registro-proveedor.component';
import { ConsultaProveedorComponent } from './componentes/consulta-proveedor/consulta-proveedor.component';
import { TablaProveedoresComponent } from './componentes/tabla-proveedores/tabla-proveedores.component';
import { ModuloCoreModule } from '../modulo-core/modulo-core.module';
import { ProveedorService } from './servicios/proveedor.service';

@NgModule({
  declarations: [RegistroProveedorComponent, ConsultaProveedorComponent, TablaProveedoresComponent],
  imports: [
    CommonModule,
    ModuloProveedorRoutingModule,
    ModuloCoreModule
  ],
  providers: [ProveedorService],
  exports: [RegistroProveedorComponent, ConsultaProveedorComponent, TablaProveedoresComponent]
})
export class ModuloProveedorModule { }
