import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/modulo-proveedor/modelo/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public dataProveedor: Proveedor;

  constructor() { }
}
