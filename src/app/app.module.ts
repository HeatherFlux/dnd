import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdventurersComponent } from './adventurers/adventurers.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './/app-routing.module'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    AdventurersComponent,
    HeroDetailComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
