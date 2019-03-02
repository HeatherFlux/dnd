import { Component, OnInit } from '@angular/core';
import { Creature } from './creature';
import { CreatureService } from './creature-service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  creatures: Creature[];

  constructor(private creatureService: CreatureService) { }

  getCreatures(): void {
    this.creatureService.getCreatures()
      .subscribe(creatures => this.creatures = creatures);
  }

  ngOnInit() {
    this.getCreatures();
  }

}
