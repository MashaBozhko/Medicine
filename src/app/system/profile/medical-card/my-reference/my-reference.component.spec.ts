import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReferenceComponent } from './my-reference.component';

describe('MyReferenceComponent', () => {
  let component: MyReferenceComponent;
  let fixture: ComponentFixture<MyReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
