import { TestBed } from '@angular/core/testing';

import { GameLogickControlService } from './game-logick-control.service';

describe('GameLogickControlService', () => {
  let service: GameLogickControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLogickControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
