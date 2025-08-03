import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

import { teamsStaticList } from '../statick-data/teams';
import { Team } from '../models/team';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  teamsStaticList: Team[] = teamsStaticList;
}
