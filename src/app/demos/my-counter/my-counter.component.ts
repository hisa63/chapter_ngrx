import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { decrement, increment, reset } from './counter.actions'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  public count$: Observable<number>

  // constructor(private store: Store<{ count: number }>) {
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count')
  }

  public increment() {
    this.store.dispatch(increment())
  }

  public decrement() {
    this.store.dispatch(decrement())
  }

  public reset() {
    this.store.dispatch(reset())
  }
}
