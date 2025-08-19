import { Component, inject,signal, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { TreeSelectModule } from 'primeng/treeselect';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import { DictionaryService } from '../../services/dictionary.service';
import { Word } from '../../models/models';
import { SliderModule } from 'primeng/slider';
import { TimerService } from '../../services/timer.service';
import { GameLogickControlService } from '../../services/game-logick-control.service';
import { MessageModule } from 'primeng/message';
import { StorageService } from '../../services/storage.service';

// import { teamsStaticList } from '../statick-data/teams';
import { Team } from '../../models/team';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ButtonModule, RouterLink, TreeSelectModule, ListboxModule, FormsModule, SliderModule, MessageModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  protected teamsService = inject(TeamsService);
  protected dictionaryService = inject(DictionaryService);
  protected timerService = inject(TimerService);
  protected gameLogickControlService = inject(GameLogickControlService);
  protected router = inject(Router);
  protected storageService = inject(StorageService);
  
  userPressedButton = signal<boolean>(false);

  isSettingsValid = computed(() => {
    if (this.userPressedButton()) {
      return this.selectedTeams.length > 1
    }
    return true;
  }) ;
  // value = 120;
  // words = 20;
 
  // teamsStaticList: Team[] = this.teamsService.teamsStaticList;
  // selectedTeam: Team[] = [];


  get selectedTeams(): Team[] {
    return this.teamsService.teamList();
  }

  set selectedTeams(value: Team[]) {
    this.teamsService.teamList.set(value);
    this.storageService.save<Team[]>('selectedTeams', this.teamsService.teamList())
  }

  get selectedDictionary(): string {
    return this.dictionaryService.selectedDictionary();
  }

  set selectedDictionary(value: string) {
    if (value == null) {
      const lastValue = this.dictionaryService.selectedDictionary();
        this.dictionaryService.selectedDictionary.set(value);
          setTimeout(() => {
          this.dictionaryService.selectedDictionary.set(lastValue);
      }, 10);
    } else {
      this.dictionaryService.selectedDictionary.set(value);
      
      this.storageService.save<string>('selectedDictionary', this.dictionaryService.selectedDictionary())
    }

  }

  get defaultSeconds(): number{
     return this.timerService.defaultSeconds(); 
  }

  set defaultSeconds(value: number) {
    this.timerService.defaultSeconds.set(value); 
    this.storageService.save<number>('defaultSeconds', this.timerService.defaultSeconds())
  }

  get wordsNeededToWin(): number{
     return this.gameLogickControlService.wordsNeededToWin(); 
  }

  set wordsNeededToWin(value: number) {
    this.gameLogickControlService.wordsNeededToWin.set(value); 
    this.storageService.save<number>('wordsNeededToWin', this.gameLogickControlService.wordsNeededToWin());
  }

  // Зараз тільки 1 можлива потенційно помилка
  // якщо кількість можливих варіантів помилок збільшиться 
  // то варто переписати метод на отримання конкретнтого коду помилки
  
  goToGame() {
    this.userPressedButton.set(true);
    // this.validateSettings();
    // console.log(this.isSettingsValid());
    if (this.isSettingsValid()) {
      this.router.navigate(['/start-new-round']);
    }
  }

  // validateSettings() {
  //   console.log(this.selectedTeams.length > 1);
  //   if (this.selectedTeams.length > 1) {
  //     this.isSettingsValid.set(true);
  //   }
  //   this.isSettingsValid.set(false);
  // }
  

}

