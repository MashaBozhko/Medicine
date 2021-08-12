import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCovidComponent } from './test-covid.component';

describe('TestCovidComponent', () => {
  let component: TestCovidComponent;
  let fixture: ComponentFixture<TestCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
