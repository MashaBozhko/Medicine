import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnalyzesComponent } from './my-analyzes.component';

describe('MyAnalyzesComponent', () => {
  let component: MyAnalyzesComponent;
  let fixture: ComponentFixture<MyAnalyzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnalyzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnalyzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
