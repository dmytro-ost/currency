import { Injectable } from '@angular/core';
import { Course, RawCourse } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CurrencyAdapter {
    public adapt(source: RawCourse[]): Course[] {
        return source.map(rawCourse => Object.assign({}, {
            id: rawCourse.r030,
            name: rawCourse.txt,
            rate: rawCourse.rate,
            code: rawCourse.cc
        }));
    }
}
