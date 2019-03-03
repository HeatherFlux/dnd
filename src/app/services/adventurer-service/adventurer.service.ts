import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adventurer } from '../../adventurers/adventurer';
import { ADVENTURERS } from '../../adventurers/mock-adventurer';

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {

  constructor() { }

  getAdventurers(): Observable<Adventurer[]> {
    return of(ADVENTURERS);
  }
}
