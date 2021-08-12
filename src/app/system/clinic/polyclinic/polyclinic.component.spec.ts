import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyclinicComponent } from './polyclinic.component';

describe('PolyclinicComponent', () => {
  let component: PolyclinicComponent;
  let fixture: ComponentFixture<PolyclinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolyclinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
