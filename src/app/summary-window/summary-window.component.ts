import { Component, Input, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { NgrxService } from '../services/ngrx.service'

@Component({
  selector: 'app-summary-window',
  templateUrl: './summary-window.component.html',
  styleUrls: ['./summary-window.component.scss'],
})
export class SummaryWindowComponent implements OnInit {
  @Input() summaryType!: string

  public init$!: Observable<boolean>

  constructor(private ngrxService: NgrxService) {}

  ngOnInit(): void {
    this.init$ =
      this.summaryType === 'PEOPLE'
        ? this.ngrxService.peopleInitializer
        : this.summaryType === 'HOURS'
        ? this.ngrxService.hoursInitializer
        : this.ngrxService.numberInitializer

    this.init$.subscribe((e) => console.log(e))
  }
}
