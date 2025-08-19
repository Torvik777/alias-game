import { Injectable, signal, inject } from '@angular/core';
import { Team } from '../models/team';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root'
})
export class GameLogickControlService {
  protected teamsService = inject(TeamsService);

  public isActiveGame = signal<boolean>(false);
  public wordsNeededToWin = signal<number>(20);

  public gameIsEnd = signal<boolean>(false);
  public isDraw = signal<boolean>(false);
  public winningTeams = signal<Team[]>([]);

  public checkGameStatus() {
    this.checkWinStatus();
  }

  // цю перевірку варто робити тільки коли відадує остання команда зві списку щоб перебдачити нічью
  private checkWinStatus() {
    
    this.teamsService.teamList().forEach(team => {
      if (team.score >= this.wordsNeededToWin()) {
        this.gameIsEnd.set(true);
        this.isActiveGame.set(false);
        this.winningTeams.update(() => {
          return [...this.winningTeams(), team];
        })
      } 
    });

    this.checkDrawStatus();
  }
  private checkDrawStatus() {
    if (this.winningTeams().length > 1) {
      this.isDraw.set(true);
    }
    
  }

  constructor() { }
}
