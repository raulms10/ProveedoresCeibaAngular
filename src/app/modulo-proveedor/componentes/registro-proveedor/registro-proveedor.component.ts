import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProviderService } from 'src/app/modulo-core/utilidades/provider.service';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Proveedor } from '../../modelo/proveedor.model';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidadorUtil } from 'src/app/modulo-core/utilidades/validador-util';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Constantes } from 'src/app/modulo-core/utilidades/constantes';
import { Router } from '@angular/router';

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
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  form = new FormGroup({
    formNombre: new FormControl('', [Validators.required, ValidadorUtil.validadorEspacios(true), Validators.minLength(5), ValidadorUtil.validadorPalindromo(true)]),
    formTelefono: new FormControl('', [Validators.required, ValidadorUtil.validadorNumerosEnteros(true),
    Validators.minLength(7), Validators.maxLength(7), Validators.max(9999999)]),
    formDireccion: new FormControl('', [Validators.required, ValidadorUtil.validadorEspacios(true),
    ValidadorUtil.validadorIniciaCon(true, 'CL'), ValidadorUtil.validadorCantVocales(true, 3)]),
  });

  constructor(private providerService: ProviderService,
    private proveedorService: ProveedorService,
    private location: Location,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.proveedor = this.providerService.dataProveedor;
    if (this.proveedor && this.proveedor.id) {
      this.esActualizarProveedor = true;
      this.cargarDatosProveedor();
    } else {
      this.proveedor = new Proveedor();
    }
    this.providerService.dataProveedor = undefined;
  }

  ngOnDestroy() {
    this.subscriptionServices.forEach(subscription => subscription.unsubscribe());
  }

  private cargarDatosProveedor() {
    this.form.controls['formNombre'].setValue(this.proveedor.nombre);
    this.form.controls['formTelefono'].setValue(this.proveedor.telefono);
    this.form.controls['formDireccion'].setValue(this.proveedor.direccion);
  }

  private modificarDatosProveedor() {
    this.proveedor.nombre = this.form.get('formNombre').value;
    this.proveedor.telefono = this.form.get('formTelefono').value;
    this.proveedor.direccion = this.form.get('formDireccion').value;
    this.proveedor.fechaRegistro = this.proveedor.fechaRegistro ? this.proveedor.fechaRegistro : new Date();// ValidadorUtil.getFormatoFecha(this.proveedor.fechaRegistro ? this.proveedor.fechaRegistro : new Date())
  }

  esValido

  enviar() {
    if (this.form.valid) {
      this.cargando = true;
      this.modificarDatosProveedor();
      if (this.esActualizarProveedor) {
        this.actualizarProveedor();
      } else {
        if (!ValidadorUtil.esDiaSemanaPermitido()) {
          this.abrirSnackBar(Constantes.NO_DIAS_PERMITIDO);
          this.cargando = false;
          return;
        }
        this.registrarProveedor();
      }
    } else {
      this.abrirSnackBar(Constantes.CAMPOS_INVALIDOS);
    }
  }

  private actualizarProveedor() {
    this.subscriptionServices.push(this.proveedorService.actualizarProveedor(this.proveedor).subscribe(
      (result) => {
        this.procesarResultado(result);
      },
      (error) => {
        console.log(error);
        this.abrirSnackBar(Constantes.HA_OCURRIDO_UN_ERROR);
        this.cargando = false;
      }
    ));
  }

  private registrarProveedor() {
    this.subscriptionServices.push(this.proveedorService.registrarProveedor(this.proveedor).subscribe(
      (result) => {
        this.procesarResultado(result);
      },
      (error) => {
        console.log(error);
        this.abrirSnackBar(Constantes.HA_OCURRIDO_UN_ERROR);
        this.cargando = false;
      }
    ));
  }

  procesarResultado(result) {
    this.snackBarRef = this.abrirSnackBar(result.mensaje);
    if (result.ok) {
      this.snackBarRef.afterDismissed().subscribe(() => {
        this.router.navigate([Constantes.RUTA_CONSULTAR_PROVEEDOR]);
      });
    }
    this.cargando = false;
  }

  atras() {
    this.location.back();
  }

  private abrirSnackBar(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'OK', {
      duration: 5000,
    });
  }
}
