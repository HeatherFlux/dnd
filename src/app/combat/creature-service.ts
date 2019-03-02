import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Creature } from './creature';
import { CREATURES } from './mock-creature';

@Injectable({
    providedIn: 'root'
})
export class CreatureService {

    constructor() { }

    getCreatures(): Observable<Creature[]> {
        return of(CREATURES);
    }
}
