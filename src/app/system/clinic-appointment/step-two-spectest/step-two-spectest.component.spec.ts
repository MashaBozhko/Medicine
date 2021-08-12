import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoSpectestComponent } from './step-two-spectest.component';

describe('StepTwoSpectestComponent', () => {
  let component: StepTwoSpectestComponent;
  let fixture: ComponentFixture<StepTwoSpectestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoSpectestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoSpectestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
