import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent {

  currencies = ['UAH', 'USD', 'EUR', 'GBP'];
  courses$ = this.currencyService.getCourses();

  constructor(
    private readonly currencyService: CurrencyService
  ) { }

}
