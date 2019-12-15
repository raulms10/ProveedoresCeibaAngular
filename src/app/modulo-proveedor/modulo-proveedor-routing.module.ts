import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroProveedorComponent } from './componentes/registro-proveedor/registro-proveedor.component';
import { ConsultaProveedorComponent } from './componentes/consulta-proveedor/consulta-proveedor.component';
import { Constantes } from '../modulo-core/utilidades/constantes';

const routes: Routes = [
  { path: Constantes.RUTA_REGISTRO_PROVEEDOR, component: RegistroProveedorComponent },
  { path: Constantes.RUTA_CONSULTAR_PROVEEDOR, component: ConsultaProveedorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloProveedorRoutingModule { }
