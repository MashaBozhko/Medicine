import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoGeneraltestComponent } from './step-two-generaltest.component';

describe('StepTwoGeneraltestComponent', () => {
  let component: StepTwoGeneraltestComponent;
  let fixture: ComponentFixture<StepTwoGeneraltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoGeneraltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoGeneraltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
