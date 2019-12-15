import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProviderService } from 'src/app/modulo-core/utilidades/provider.service';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Proveedor } from '../../modelo/proveedor.model';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidadorUtil } from 'src/app/modulo-core/utilidades/validador-util';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss']
})
export class RegistroProveedorComponent implements OnInit, OnDestroy {

  private subscriptionServices: Subscription[] = [];

  proveedor: Proveedor;
  esActualizarProveedor = false;
  cargando = false;

  form = new FormGroup({
    formNombre: new FormControl('', [Validators.required, ValidadorUtil.validadorEspacios(true), Validators.minLength(5)]),
    formTelefono: new FormControl('', [Validators.required, ValidadorUtil.validadorNumerosEnteros(true),
                                                  Validators.minLength(7),Validators.maxLength(7), Validators.max(9999999)]),
    formDireccion: new FormControl('', [Validators.required, ValidadorUtil.validadorEspacios(true)]),
  });

  constructor(private providerService: ProviderService, 
              private proveedorService: ProveedorService, 
              private location: Location) { }

  ngOnInit() {
    this.proveedor = this.providerService.dataProveedor;
    console.log([this.proveedor])
    if (this.proveedor && this.proveedor.id) {
      this.esActualizarProveedor = true;
      this.cargarDatosProveedor();
    } else {
      this.proveedor = new Proveedor();
    }
  }

  ngOnDestroy() {
    this.subscriptionServices.forEach(subscription => subscription.unsubscribe());
  }

  private cargarDatosProveedor() {

  }

  private modificarDatosProveedor() {

  }
  
  enviar() {

  }

  atras() {
    this.location.back();
  }
}
