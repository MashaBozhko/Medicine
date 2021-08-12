import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanResortCardComponent } from './san-resort-card.component';

describe('SanResortCardComponent', () => {
  let component: SanResortCardComponent;
  let fixture: ComponentFixture<SanResortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanResortCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanResortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
