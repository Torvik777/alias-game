import { Routes } from '@angular/router';
import { StartGamePageComponent } from './components/start-game-page/start-game-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { EndGamePageComponent } from './components/end-game-page/end-game-page.component';
import { SettingComponent } from './components/setting-page/setting.component';
import { StartRoundPageComponent } from './components/start-round-page/start-round-page.component';


export const routes: Routes = [
{ path: '', component: StartGamePageComponent },
{ path: 'game', component: GamePageComponent },
{ path: 'gameEnd', component: EndGamePageComponent },
{ path: 'setting', component: SettingComponent },
{ path: 'start-new-round', component: StartRoundPageComponent },


];
