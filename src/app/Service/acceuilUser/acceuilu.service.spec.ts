import { TestBed } from '@angular/core/testing';

import { AcceuiluService } from './acceuilu.service';

describe('AcceuiluService', () => {
  let service: AcceuiluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuiluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
