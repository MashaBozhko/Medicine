import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDischargeComponent } from './my-discharge.component';

describe('MyDischargeComponent', () => {
  let component: MyDischargeComponent;
  let fixture: ComponentFixture<MyDischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDischargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
