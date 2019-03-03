import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerDetailComponent } from './adventurer-detail.component';

describe('AdventurerDetailComponent', () => {
  let component: AdventurerDetailComponent;
  let fixture: ComponentFixture<AdventurerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
