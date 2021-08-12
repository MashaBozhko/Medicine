import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicStaffComponent } from './clinic-staff.component';

describe('ClinicStaffComponent', () => {
  let component: ClinicStaffComponent;
  let fixture: ComponentFixture<ClinicStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
