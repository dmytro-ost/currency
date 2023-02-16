import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  courses$ = this.currency.getCourses();

  constructor(private readonly currency: CurrencyService) { }

  ngOnInit(): void {
  }

}
