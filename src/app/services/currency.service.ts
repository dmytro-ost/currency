import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, share, tap } from 'rxjs';
import { Course, RawCourse } from '../models/course.model';
import { map } from 'rxjs/internal/operators/map';
import { CurrencyAdapter } from '../adapters/currency.adapter';
import config from 'src/config';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly apiUrl: string = config.apiUrl;

  currentValue: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(
    private readonly http: HttpClient,
    private readonly currencyApadter: CurrencyAdapter,
    private readonly spinnerService: SpinnerService
  ) { }

  public getCourses(): Observable<Course[]> {
    this.spinnerService.show();
    return this.http.get<RawCourse[]>(this.apiUrl)
      .pipe(
        share(),
        map(rawCourse => this.currencyApadter.adapt(rawCourse)),
        tap(() => this.spinnerService.hide())
      );
  }

  public setValue(value: number) {
    this.currentValue.next(value);
  }

  public getValue(): Observable<number> {
    return this.currentValue;
  }

}
