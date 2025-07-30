import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-end-game-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './end-game-page.component.html',
  styleUrl: './end-game-page.component.scss'
})
export class EndGamePageComponent {

}
