import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniversiteFrontComponent } from './list-universite-front.component';

describe('ListUniversiteFrontComponent', () => {
  let component: ListUniversiteFrontComponent;
  let fixture: ComponentFixture<ListUniversiteFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUniversiteFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUniversiteFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
