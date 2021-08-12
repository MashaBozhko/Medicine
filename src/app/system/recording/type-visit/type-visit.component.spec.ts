import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVisitComponent } from './type-visit.component';

describe('TypeVisitComponent', () => {
  let component: TypeVisitComponent;
  let fixture: ComponentFixture<TypeVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
