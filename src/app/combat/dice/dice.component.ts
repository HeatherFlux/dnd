import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  @Input() dice: any;
  damageTotal: string;

  constructor() { }

  rollDice(dice, damageTotal) {
    let damage = 0;
    for (const die of dice) {
      const multiplier = die.numberOfDice * die.valueOfDice;
      damage = Math.floor((Math.random() * multiplier) + die.numberOfDice + die.modifier);
    }
    this.damageTotal = damage.toString();
  }

  ngOnInit() {
    this.damageTotal = '';
  }

}
