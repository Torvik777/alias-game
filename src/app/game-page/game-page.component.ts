import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

}
