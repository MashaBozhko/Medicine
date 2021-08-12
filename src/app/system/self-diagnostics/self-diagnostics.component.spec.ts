import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDiagnosticsComponent } from './self-diagnostics.component';

describe('SelfDiagnosticsComponent', () => {
  let component: SelfDiagnosticsComponent;
  let fixture: ComponentFixture<SelfDiagnosticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfDiagnosticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
