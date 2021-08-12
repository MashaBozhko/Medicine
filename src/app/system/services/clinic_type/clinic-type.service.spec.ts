import { TestBed } from '@angular/core/testing';

import { ClinicTypeService } from './clinic-type.service';

describe('ClinicTypeService', () => {
  let service: ClinicTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
