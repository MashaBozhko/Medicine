import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVaccinationComponent } from './my-vaccination.component';

describe('MyVaccinationComponent', () => {
  let component: MyVaccinationComponent;
  let fixture: ComponentFixture<MyVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
