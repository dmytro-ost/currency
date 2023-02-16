import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModulesModule
  ],
  exports: [
    RouterModule,
    MaterialModulesModule,
    NotFoundComponent
  ]
})
export class SharedModule { }
