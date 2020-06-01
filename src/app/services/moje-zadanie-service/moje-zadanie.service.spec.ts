import { TestBed } from '@angular/core/testing';

import { MojeZadanieService } from './moje-zadanie.service';

describe('MojeZadanieService', () => {
  let service: MojeZadanieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MojeZadanieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
