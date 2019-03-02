import { Creature } from './creature';

export const CREATURES: Creature[] = [
    {
        name: 'Bugbear',
        ac: 14,
        hp: 37,
        toHit: 6,
        damage: [{
            numberOfDice: 2,
            valueOfDice: 8,
            modifier: 6
        }],
        spells: [{
            spellName: 'Fireball',
            spellDescription: 'Where\'d it get that'
        }],
        notes: 'It\'s a bug no its a BugBear'
    },
    {
        name: 'Bugbear Cleric',
        ac: 16,
        hp: 27,
        toHit: 6,
        damage: [{
            numberOfDice: 2,
            valueOfDice: 8,
            modifier: 6
        }],
        spells: [{
            spellName: 'Cure Wounds',
            spellDescription: 'Heals for 1d8 + 4'
        }],
        notes: 'This little bugbear\'s porridge was just right'
    },
    {
        name: 'Bugbear Captain',
        ac: 18,
        hp: 57,
        toHit: 6,
        damage: [{
            numberOfDice: 2,
            valueOfDice: 8,
            modifier: 6
        }],
        spells: [{
            spellName: 'Howl',
            spellDescription: 'Scream into the air and make your followers stronger . . .'
        }],
        notes: 'That is captain BugBear to you.'
    }
];
