import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnkoriskComponent } from './onkorisk.component';

describe('OnkoriskComponent', () => {
  let component: OnkoriskComponent;
  let fixture: ComponentFixture<OnkoriskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnkoriskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnkoriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
