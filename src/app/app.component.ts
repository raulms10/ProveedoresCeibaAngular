import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProveedoresCeibaAngular';
  
  constructor (private router: Router) {}

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
