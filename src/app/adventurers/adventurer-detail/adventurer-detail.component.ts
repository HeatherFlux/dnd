import { Component, OnInit, Input } from '@angular/core';
import { Adventurer } from '../adventurer';

@Component({
  selector: 'app-adventurer-detail',
  templateUrl: './adventurer-detail.component.html',
  styleUrls: ['./adventurer-detail.component.css']
})
export class AdventurerDetailComponent implements OnInit {
  @Input() adventurer: Adventurer;

  constructor() { }

  ngOnInit() {
  }
}
