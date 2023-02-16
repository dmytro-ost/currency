import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';



@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule
  ]
})
export class CurrencyConverterModule { }
