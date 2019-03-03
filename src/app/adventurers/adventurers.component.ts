import { Component, OnInit } from '@angular/core';
import { Adventurer } from '../adventurers/adventurer';
import { AdventurerService } from '../services/adventurer-service/adventurer.service';

@Component({
  selector: 'app-adventurers',
  templateUrl: './adventurers.component.html',
  styleUrls: ['./adventurers.component.css']
})
export class AdventurersComponent implements OnInit {
  adventurers: Adventurer[];
  selectedAdventurer: Adventurer;

  constructor(private adventurerService: AdventurerService) { }

  onSelect(adventurer: Adventurer): void {
    this.selectedAdventurer = adventurer;
  }

  getAdventurers(): void {
    this.adventurerService.getAdventurers()
      .subscribe(adventurers => this.adventurers = adventurers);
  }

  ngOnInit() {
    this.getAdventurers();
  }

}
