export class Creature {
  name: string;
  ac: number;
  hp: number;
  toHit: number;
  damage: [{
    numberOfDice: number;
    valueOfDice: number;
    modifier: number;
  }];
  spells: [{
    spellName: string,
    spellDescription: string
  }];
  notes: string;
}
