import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoRecordComponent } from './step-two-record.component';

describe('StepTwoRecordComponent', () => {
  let component: StepTwoRecordComponent;
  let fixture: ComponentFixture<StepTwoRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
