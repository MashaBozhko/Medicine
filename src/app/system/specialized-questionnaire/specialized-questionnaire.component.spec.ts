import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedQuestionnaireComponent } from './specialized-questionnaire.component';

describe('SpecializedQuestionnaireComponent', () => {
  let component: SpecializedQuestionnaireComponent;
  let fixture: ComponentFixture<SpecializedQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
