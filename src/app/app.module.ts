import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { StoreModule } from '@ngrx/store'
import { counterReducer } from './demos/my-counter/counter.reducer'
import { MyCounterComponent } from './demos/my-counter/my-counter.component'
import { SummaryWindowComponent } from './summary-window/summary-window.component'

import { NgrxService } from './services/ngrx.service'
import { UserComponent } from './demos/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    SummaryWindowComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [NgrxService],
  bootstrap: [AppComponent],
})
export class AppModule {}
