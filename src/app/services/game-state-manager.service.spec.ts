import { TestBed } from '@angular/core/testing';

import { GameStateManagerService } from './game-state-manager.service';

describe('GameStateManagerService', () => {
  let service: GameStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
