import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import {
  delay,
  filter,
  map,
  share,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs/operators'

@Injectable()
export class NgrxService {
  public peopleInitializer: Observable<boolean>
  public hoursInitializer: Observable<boolean>
  public numberInitializer: Observable<boolean>

  constructor() {
    this.peopleInitializer = of(true).pipe(startWith(false))
    this.hoursInitializer = of(true).pipe(delay(3000), startWith(false))
    this.numberInitializer = of(true).pipe(delay(6000), startWith(false))
  }
}
