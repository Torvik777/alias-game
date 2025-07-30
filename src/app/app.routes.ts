import { Routes } from '@angular/router';
import { StartGamePageComponent } from './start-game-page/start-game-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { EndGamePageComponent } from './end-game-page/end-game-page.component';

export const routes: Routes = [
{ path: '', component: StartGamePageComponent },
{ path: 'game', component: GamePageComponent },
{ path: 'gameEnd', component: EndGamePageComponent }


];
