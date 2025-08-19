import { Component, inject } from '@angular/core';
import { GameLogickControlService } from '../../services/game-logick-control.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-win-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './win-page.component.html',
  styleUrl: './win-page.component.scss'
})
export class WinPageComponent {
  protected gameLogickControlService = inject(GameLogickControlService);
}
