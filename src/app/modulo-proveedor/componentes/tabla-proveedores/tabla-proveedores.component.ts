import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Proveedor } from '../../modelo/proveedor.model';
import { Constantes } from 'src/app/modulo-core/utilidades/constantes';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/modulo-core/utilidades/provider.service';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.scss']
})
export class TablaProveedoresComponent implements OnInit {

  columnasMostrar: string[];
  dataSource: MatTableDataSource<Proveedor>;
  @Input() proveedores: Proveedor[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private providerService: ProviderService) { }

  ngOnInit() {
    this.inizializarDatasource();
  }

  private inizializarDatasource() {
    this.dataSource = new MatTableDataSource(this.proveedores);
    this.dataSource.paginator ? this.dataSource.paginator.firstPage()
        : this.dataSource.paginator = this.paginator;
    this.actualizarColumnas();
  }

  private actualizarColumnas() {
    this.columnasMostrar = ['nombre', 'telefono', 'direccion', 'telefono',
                               'fecha_registro', 'acciones'];
  }

  editarProveedor(row: Proveedor) {
    this.providerService.dataProveedor = row;
    this.router.navigate([Constantes.RUTA_REGISTRO_PROVEEDOR]);
  }

}
