import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TreeSelectModule } from 'primeng/treeselect';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import { DictionaryService } from '../../services/dictionary.service';
import { Word } from '../../models/models';

// import { teamsStaticList } from '../statick-data/teams';
import { Team } from '../../models/team';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ButtonModule, RouterLink, TreeSelectModule, ListboxModule, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  protected teamsService = inject(TeamsService);
  protected dictionaryService = inject(DictionaryService);
 
  // teamsStaticList: Team[] = this.teamsService.teamsStaticList;
  // selectedTeam: Team[] = [];


  get selectedTeamModel(): Team[] {
    return this.teamsService.teamList();
  }

  set selectedTeamModel(value: Team[]) {
    this.teamsService.teamList.set(value);
  }

  get selectedDictionary(): Word[] {
    return this.dictionaryService.selectedDictionary();
  }

  set selectedDictionary(value: Word[]) {
    this.dictionaryService.selectedDictionary.set(value);
  }

}

