import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationBLocChambreComponent } from './affectation-bloc-chambre.component';

describe('AffectationBLocChambreComponent', () => {
  let component: AffectationBLocChambreComponent;
  let fixture: ComponentFixture<AffectationBLocChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationBLocChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationBLocChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
