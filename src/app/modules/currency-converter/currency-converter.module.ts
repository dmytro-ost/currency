import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';


@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyFormComponent,
    CurrencyHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CurrencyConverterRoutingModule,
  ]
})
export class CurrencyConverterModule { }
