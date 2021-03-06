import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  @Input() die: any;
  damageTotal: string;
  damageAverage: any;

  constructor() { }

  rollDice(die) {
    const multiplier = die.numberOfDice * die.valueOfDice;
    this.damageTotal = Math.floor((Math.random() * multiplier) + die.numberOfDice + die.modifier).toString();
  }

  ngOnInit() {
    this.damageTotal = '0';
    this.damageAverage = Math.floor(((this.die.numberOfDice * this.die.valueOfDice) + this.die.numberOfDice) / 2) + this.die.modifier;
  }

}
