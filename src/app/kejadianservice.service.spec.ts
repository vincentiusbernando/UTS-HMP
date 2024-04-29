import { TestBed } from '@angular/core/testing';

import { KejadianserviceService } from './kejadianservice.service';

describe('KejadianserviceService', () => {
  let service: KejadianserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KejadianserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
