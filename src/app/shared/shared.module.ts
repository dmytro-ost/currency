import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MaterialModulesModule,
    NotFoundComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SpinnerComponent,
  ]
})
export class SharedModule { }
