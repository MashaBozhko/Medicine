import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHospitalsComponent } from './my-hospitals.component';

describe('MyHospitalsComponent', () => {
  let component: MyHospitalsComponent;
  let fixture: ComponentFixture<MyHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
