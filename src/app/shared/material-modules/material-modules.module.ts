import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModulesModule { }
