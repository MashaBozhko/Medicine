import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCallComponent } from './house-call.component';

describe('HouseCallComponent', () => {
  let component: HouseCallComponent;
  let fixture: ComponentFixture<HouseCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
