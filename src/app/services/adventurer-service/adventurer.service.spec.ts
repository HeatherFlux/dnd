import { TestBed, inject } from '@angular/core/testing';

import { AdventurerService } from './adventurer.service';

describe('AdventurerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdventurerService]
    });
  });

  it('should be created', inject([AdventurerService], (service: AdventurerService) => {
    expect(service).toBeTruthy();
  }));
});
