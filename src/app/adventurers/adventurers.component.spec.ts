import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurersComponent } from './adventurers.component';

describe('AdventurersComponent', () => {
  let component: AdventurersComponent;
  let fixture: ComponentFixture<AdventurersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
