import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { GameLogickControlService } from '../../services/game-logick-control.service';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-start-game-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './start-game-page.component.html',
  styleUrl: './start-game-page.component.scss'
})
export class StartGamePageComponent {
  gameLogickControlService = inject(GameLogickControlService);
  storageService = inject(StorageService);

  
}
