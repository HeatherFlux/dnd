import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdventurersComponent } from './adventurers/adventurers.component';
import { FormsModule } from '@angular/forms';
import { AdventurerDetailComponent } from './adventurers/adventurer-detail/adventurer-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './/app-routing.module';
import { CombatComponent } from './combat/combat.component';
import { MainComponent } from './main/main.component';
import { DiceComponent } from './combat/dice/dice.component';
import { DiceRollerComponent } from './combat/dice/dice-roller/dice-roller.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdventurersComponent,
    AdventurerDetailComponent,
    ScheduleComponent,
    CombatComponent,
    MainComponent,
    DiceComponent,
    DiceRollerComponent,
    AboutComponent
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
