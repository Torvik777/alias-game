import { Injectable, signal } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class ComandsServiceService {
  teamList = signal<Team[]>([])

  constructor() {
  }
  
  addNewTeam(newTeam: Team) {

    this.teamList.set([...this.teamList(), newTeam]);
  }
}
