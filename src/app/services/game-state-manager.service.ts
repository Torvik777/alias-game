import { inject, Injectable } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { GameDataService } from './game-data.service';
import { GameLogickControlService } from './game-logick-control.service';
import { StorageService } from './storage.service';
import { TeamsService } from './teams.service';
import { TimerService } from './timer.service';


@Injectable({
  providedIn: 'root'
})
export class GameStateManagerService {
  protected dictionaryService = inject(DictionaryService);
  protected gameDataService = inject(GameDataService);
  protected gameLogickControlService = inject(GameLogickControlService);
  protected storageService = inject(StorageService);
  protected teamsService = inject(TeamsService);
  protected timerService = inject(TimerService);

  constructor() { 

  }

  private checkServiceStatus<T>(service: T, serviceName: string) {
    if (this.storageService.has(serviceName)) {
      
    }
  };



}
