import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-end-game-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './end-game-page.component.html',
  styleUrl: './end-game-page.component.scss'
})
export class EndGamePageComponent {
  gameDataService = inject(GameDataService);
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

}
