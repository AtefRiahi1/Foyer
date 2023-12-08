import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlocsComponent } from './list-blocs.component';

describe('ListBlocsComponent', () => {
  let component: ListBlocsComponent;
  let fixture: ComponentFixture<ListBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
