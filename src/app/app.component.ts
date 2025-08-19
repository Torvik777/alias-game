import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EndGamePageComponent } from "./components/end-game-page/end-game-page.component";
import { WinPageComponent } from "./components/win-page/win-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EndGamePageComponent, WinPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alias-game';
}
