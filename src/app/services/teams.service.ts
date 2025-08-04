import { Injectable, signal } from '@angular/core';
import { teamsStaticList } from '../statick-data/teams';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  readonly teamsStaticList = teamsStaticList;
  teamList = signal<Team[]>([]);
  

  constructor() {
  }
}
