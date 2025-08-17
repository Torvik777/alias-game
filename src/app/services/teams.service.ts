import { computed, Injectable, signal } from '@angular/core';
import { teamsStaticList } from '../statick-data/teams';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  readonly teamsStaticList = teamsStaticList;

  activeTeamIndex = signal<number>(0);
  teamList = signal<Team[]>([]);
  activeTeam = computed<Team>(() => {
    return this.teamList()[this.activeTeamIndex()]
  })

setTeamScore(roundScore: number) {
  this.teamList.update((teamList) => {
    return teamList.map((team, index) => {
      if (index === this.activeTeamIndex()) {
        return {
          ...team,
          score: team.score + roundScore,
        };
      }
      return team;
    });
  });
}


  setNextTeam() {
    console.log('setNextTeam');
    console.log(this.activeTeam().name);
    console.log(this.activeTeamIndex());
    console.log((this.activeTeamIndex() + 1) > this.teamList().length);
    if ((this.activeTeamIndex() + 1) < this.teamList().length) {
      this.activeTeamIndex.set(this.activeTeamIndex() + 1);
    } else {
      this.activeTeamIndex.set(0);
    }
    console.log(this.activeTeamIndex());
    console.log(this.activeTeam().name);
  }

 
}
