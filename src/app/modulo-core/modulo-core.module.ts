import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatInputModule, MatButtonModule, MatTooltipModule, MatMenuModule,
  MatFormFieldModule, 
  MatTableModule,
  MatPaginatorModule,
  MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ModuloCoreRoutingModule } from './modulo-core-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './utilidades/provider.service';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ModuloCoreRoutingModule
  ],
  providers: [ProviderService],
  exports: [SpinnerComponent, MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule]
})
export class ModuloCoreModule { }
