import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantControlComponent } from './etudiant-control.component';

describe('EtudiantControlComponent', () => {
  let component: EtudiantControlComponent;
  let fixture: ComponentFixture<EtudiantControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
