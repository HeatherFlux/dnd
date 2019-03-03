import { Component, OnInit } from '@angular/core';
import { Adventurer } from '../adventurers/adventurer';
import { AdventurerService } from '../services/adventurer-service/adventurer.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  adventurers: Adventurer[];

  constructor(private adventurerService: AdventurerService) { }

  getAdventurers(): void {
    this.adventurerService.getAdventurers()
    .subscribe(adventurers => this.adventurers = this.adventurers);
  }

  ngOnInit() {
    this.getAdventurers();
  }

}
