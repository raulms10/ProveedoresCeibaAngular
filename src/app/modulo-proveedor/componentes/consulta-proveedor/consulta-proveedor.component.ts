import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proveedor } from '../../modelo/proveedor.model';
import { Subscription } from 'rxjs';
import { Constantes } from 'src/app/modulo-core/utilidades/constantes';
import { ProveedorService } from '../../servicios/proveedor.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-proveedor',
  templateUrl: './consulta-proveedor.component.html',
  styleUrls: ['./consulta-proveedor.component.scss']
})
export class ConsultaProveedorComponent implements OnInit, OnDestroy {
  
  private subscriptionServices: Subscription[] = [];

  cargando: boolean = true;
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService, 
              private snackBar: MatSnackBar, 
              private router: Router) { }

  quemarDatoDePrueba() {
    let p: Proveedor = new Proveedor();
    p.direccion = 'Cl 80BB # 55 ';
    p.nombre = 'Cristian Andrés Cardona Campo';
    p.telefono = 304234324;
    p.fechaRegistro = new Date();
    p.id = 1;
    this.proveedores.push(p);
    p = new Proveedor();
    p.direccion = 'Cl 79 # 55 ';
    p.nombre = 'María Melissa Montes Marchena';
    p.telefono = 2165079;
    p.fechaRegistro = new Date();
    p.id = 1;
    this.proveedores.push(p);
  }
              
  ngOnInit() {
    this.subscriptionServices.push(this.proveedorService.obtenerProveedores().subscribe(
      (result) => {
        // if (result.ok) {
        //   if (result.dato && result.dato.length > 0) {
        //     this.proveedores = result.dato;
        //   } else {
        //     this.abrirSnackBar(Constantes.SIN_INFO);
        //   }
        if (result) {
          this.proveedores = result;
        } else {
          this.abrirSnackBar(Constantes.SIN_INFO);
        }
        this.cargando = false;
      },
      (error) => {
        console.log(error);
        // this.quemarDatoDePrueba();  // Esta línea se debe comentar
        this.abrirSnackBar(Constantes.HA_OCURRIDO_UN_ERROR);
        this.cargando = false;
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptionServices.forEach(subscription => subscription.unsubscribe());
  }

  private abrirSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
    });
  }

  nuevoProveeder() {
    this.router.navigate([Constantes.RUTA_REGISTRO_PROVEEDOR]);
  }
}
