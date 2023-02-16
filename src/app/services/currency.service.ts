import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, RawCourse } from '../models/course.model';
import { map } from 'rxjs/internal/operators/map';
import { CurrencyAdapter } from '../adapters/currency.adapter';
import config from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly apiUrl: string = config.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly currencyApadter: CurrencyAdapter
  ) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get<RawCourse[]>(this.apiUrl)
      .pipe(
        map(rawCourse => this.currencyApadter.adapt(rawCourse))
      );
  }

}
