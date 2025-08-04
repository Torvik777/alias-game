import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start-round-page',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './start-round-page.component.html',
  styleUrl: './start-round-page.component.scss'
})
export class StartRoundPageComponent {

}
