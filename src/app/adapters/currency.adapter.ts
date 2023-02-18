import { Injectable } from '@angular/core';
import { Course, RawCourse } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CurrencyAdapter {
    public adapt(source: RawCourse[]): Course[] {
        const courses = source.map(rawCourse => ({
            id: rawCourse.r030,
            name: rawCourse.txt,
            rate: rawCourse.rate,
            code: rawCourse.cc
        }));

        courses.unshift({
            id: 980,
            name: "Українська гривня",
            rate: 1,
            code: "UAH"
        });

        return courses;
    }
}
