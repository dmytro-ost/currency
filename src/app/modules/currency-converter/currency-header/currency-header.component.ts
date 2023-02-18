import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { Unsubscribe } from 'src/app/shared/decorators/unsubscribe.decorator';
import { untilDestroyed } from 'src/app/shared/helpers/until-destoyed.func';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribe()
export class CurrencyHeaderComponent implements OnInit {

  @Input() public courses$!: Observable<Course[]>;
  courses: { [key: string]: number; } = {};

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getRates();
  }

  private getRates() {
    this.courses$
      .pipe(
        untilDestroyed(this),
        tap(
          course => {
            this.courses = course.reduce((result, course) => {
              return Object.assign(result, { [course.code]: course.rate })
            }, {});
            this.changeDetectorRef.markForCheck();
          }
        ))
      .subscribe();
  }

}
