import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroProveedorComponent } from './componentes/registro-proveedor/registro-proveedor.component';
import { ConsultaProveedorComponent } from './componentes/consulta-proveedor/consulta-proveedor.component';

const routes: Routes = [
  { path: 'registro', component: RegistroProveedorComponent },
  { path: 'consulta', component: ConsultaProveedorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloProveedorRoutingModule { }
