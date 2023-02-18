import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';
import { combineLatest } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { Unsubscribe } from 'src/app/shared/decorators/unsubscribe.decorator';
import { untilDestroyed } from 'src/app/shared/helpers/until-destoyed.func';


@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribe()
export class CurrencyFormComponent implements OnInit {

  @Input() public courseCode!: string;
  @Input() public courses$!: Observable<Course[]>;

  formCurrency!: FormGroup;
  courses!: Course[];
  course!: Course;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formCurrency = this.formBuilder.group({
      currencyAmmountCtrl: [],
      currencySelectCtrl: [],
    });

    combineLatest([
      this.courses$,
      this.currencyService.getValue()
    ])
      .pipe(untilDestroyed(this), take(1))
      .subscribe(([courses, value]) => {
        this.courses = courses;
        this.course = this.getCourseByCode(this.courseCode);
        this.formCurrency.get('currencySelectCtrl')?.setValue(this.course, { emitEvent: false });
        this.formCurrency.get('currencyAmmountCtrl')?.setValue(value / this.course.rate, { emitEvent: false });

        this.currencyService.currentValue
          .pipe(untilDestroyed(this))
          .subscribe(
            value => {
              if (!this.formCurrency.get('currencyAmmountCtrl')?.dirty) {
                this.formCurrency.get('currencyAmmountCtrl')?.patchValue(value / this.course.rate, { emitEvent: false });
              } else {
                this.formCurrency.markAsPristine();
                this.formCurrency.markAsUntouched();
              }
            }
          );
      });

    this.formCurrency.get('currencySelectCtrl')?.valueChanges
      .pipe(
        untilDestroyed(this),
        tap(() => {
          this.course = this.formCurrency.get('currencySelectCtrl')?.value;
          this.courseCode = this.course.code;

          if (this.formCurrency.get('currencySelectCtrl')?.dirty) {
            this.formCurrency.markAsPristine();
            this.formCurrency.markAsUntouched();
            this.currencyService.setValue(this.formCurrency.get('currencyAmmountCtrl')?.value * this.course.rate);
          }
        }))
      .subscribe();

    this.formCurrency.get('currencyAmmountCtrl')?.valueChanges
      .pipe(
        untilDestroyed(this),
        tap(() => {
          const val = this.formCurrency.get('currencyAmmountCtrl')?.value * this.course.rate;
          this.currencyService.setValue(val)
        })
      )
      .subscribe();

  }

  private getCourseByCode(code: string): Course {
    return this.courses.filter(course => course.code.toLowerCase() === code.toLowerCase())[0];
  }

}
