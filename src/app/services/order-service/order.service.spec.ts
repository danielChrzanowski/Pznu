import { TestBed } from '@angular/core/testing';

import { OrderService as ZadanieService } from './order.service';

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
