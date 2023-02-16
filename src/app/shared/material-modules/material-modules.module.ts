import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModulesModule { }
