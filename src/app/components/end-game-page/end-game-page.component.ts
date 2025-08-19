import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GameDataService } from '../../services/game-data.service';
import { MessageModule } from 'primeng/message';
import { TeamsService } from '../../services/teams.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { GameLogickControlService } from '../../services/game-logick-control.service';



@Component({
  selector: 'app-end-game-page',
  standalone: true,
  imports: [ButtonModule, RouterLink, MessageModule],
  templateUrl: './end-game-page.component.html',
  styleUrl: './end-game-page.component.scss'
})
export class EndGamePageComponent {
  protected gameDataService = inject(GameDataService);
  protected teamsService = inject(TeamsService);
  protected router = inject(Router);
  protected storageService = inject(StorageService);
  protected gameLogickControlService = inject(GameLogickControlService);
  lastWord = this.gameDataService.currentWord();
  needToChooseLastWord = signal<boolean>(true);
  ngOnInit() {
    // this.gameDataService.nextWord();

  }
  addLastWord(wasGuesed: boolean ) {
    this.gameDataService.addWordToRezult(this.lastWord, wasGuesed);
    this.needToChooseLastWord.set(false) ;
    this.gameDataService.nextWord();
  }

  goToNextRound() {
    this.teamsService.setNextTeam();
    if (this.teamsService.activeTeamIndex() == 0) {
      this.gameLogickControlService.checkGameStatus();
    }
    this.saveRoundData();
    this.navigateToNextRound();
  }
  

  private saveRoundData() {
    this.storageService.save('guessedWords', this.gameDataService.guessedWords());
    this.storageService.save('notGuessedWords', this.gameDataService.notGuessedWords());
    this.storageService.save('selectedTeams', this.teamsService.teamList());
    this.storageService.save('currentTeam', this.teamsService.activeTeam());
  }

  private navigateToNextRound() {
    if (this.gameLogickControlService.gameIsEnd() == true) {
      this.router.navigate(['/win-page']);
    }else {
      this.router.navigate(['/start-new-round'])
    }
  }

}
