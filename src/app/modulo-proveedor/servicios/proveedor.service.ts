import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta } from 'src/app/modulo-core/modelo/respuesta.model';
import { Constantes } from 'src/app/modulo-core/utilidades/constantes';
import { Proveedor } from '../modelo/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  urlConsultarProveedores = environment.urlServicios + Constantes.URL_CONSULTAR_PROVEEDORES;
  urlRegistrarProveedor = environment.urlServicios + Constantes.URL_REGISTRO_PROVEEDOR;
  urlActualizarProveedor = environment.urlServicios + Constantes.URL_REGISTRO_PROVEEDOR;

  constructor(private httpClient: HttpClient) { }

  obtenerProveedores(): Observable<Respuesta> {
    return this.httpClient.get<Respuesta>(this.urlConsultarProveedores);
  }

  actualizarProveedor(proveedor: Proveedor): Observable<Respuesta> {
    return this.httpClient.put<Respuesta>(this.urlActualizarProveedor, proveedor, {});
  }

  registrarProveedor(proveedor: Proveedor): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(this.urlRegistrarProveedor, proveedor, {});
  }
}
