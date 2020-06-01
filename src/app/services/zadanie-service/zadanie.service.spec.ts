import { TestBed } from '@angular/core/testing';

import { ZadanieService } from './zadanie.service';

describe('ZadanieService', () => {
  let service: ZadanieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZadanieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
