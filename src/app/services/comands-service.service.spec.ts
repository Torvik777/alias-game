import { TestBed } from '@angular/core/testing';

import { ComandsServiceService } from './comands-service.service';

describe('UsersServiceService', () => {
  let service: ComandsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComandsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
