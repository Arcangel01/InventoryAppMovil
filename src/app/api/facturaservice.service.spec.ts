import { TestBed } from '@angular/core/testing';

import { FacturaserviceService } from './facturaservice.service';

describe('FacturaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaserviceService = TestBed.get(FacturaserviceService);
    expect(service).toBeTruthy();
  });
});
