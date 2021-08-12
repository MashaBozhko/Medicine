import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTestComponent } from './specific-test.component';

describe('SpecificTestComponent', () => {
  let component: SpecificTestComponent;
  let fixture: ComponentFixture<SpecificTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
