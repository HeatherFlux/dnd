import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CombatComponent } from './combat/combat.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '/', pathMatch: 'full', redirectTo: '', component: MainComponent },
  { path: 'combat', component: CombatComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
