import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-start-game-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './start-game-page.component.html',
  styleUrl: './start-game-page.component.scss'
})
export class StartGamePageComponent {

}
