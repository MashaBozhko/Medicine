import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInstitutionComponent } from './about-institution.component';

describe('AboutInstitutionComponent', () => {
  let component: AboutInstitutionComponent;
  let fixture: ComponentFixture<AboutInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
