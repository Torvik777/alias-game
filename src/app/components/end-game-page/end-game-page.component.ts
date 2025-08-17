import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GameDataService } from '../../services/game-data.service';
import { MessageModule } from 'primeng/message';
import { TeamsService } from '../../services/teams.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';



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
    this.teamsService.setTeamScore(this.gameDataService.guessedWords().length);
    this.storageService.save('guessedWords', this.gameDataService.guessedWords());
    this.storageService.save('notGuessedWords', this.gameDataService.notGuessedWords());
    this.teamsService.setNextTeam();
    this.router.navigate(['/start-new-round'])
  }

}
