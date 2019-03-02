export class Creature {
  name: string;
  ac: number;
  hp: number;
  toHit: number;
  damage: Damage[];
  spells: Spells[];
  notes: string;
}

export class Damage {
  constructor(numberOfDice: number, valueOfDice: number, modifier: number) { }
}

export class Spells {
  constructor(spellName: string, spellDescription: string) { }
}
