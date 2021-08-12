import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCRComponent } from './pcr.component';

describe('PCRComponent', () => {
  let component: PCRComponent;
  let fixture: ComponentFixture<PCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
