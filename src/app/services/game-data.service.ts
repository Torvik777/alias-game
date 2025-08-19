import { DictionaryService } from './dictionary.service';
import { testData } from '../statick-data/wordsData';
import { computed, effect, inject, Injectable } from '@angular/core';
import { Word } from '../models/models';
import { signal } from '@angular/core';
import { dictionaryes } from '../statick-data/dictionary-select';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  protected storageService = inject(StorageService);
  protected dictionaryService = inject(DictionaryService)

  // todo тут зробити параметр який ми передаємо для визначення словника
  // private wordsCardsList = dictionaryes['5000 Oxford'];
  private wordsCardsList = computed<Word[]>(() => {
    return dictionaryes[this.dictionaryService.selectedDictionary()]
  });
  private shuffleCardsList = computed(() => {
    let shuffledArray = [...this.wordsCardsList()]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  });
  
  private wordCounter = signal<number>(0);
  public currentWord = computed<Word>(() => {
    console.log(this.shuffleCardsList());
    console.log(this.shuffleCardsList()[this.wordCounter()]);
    return this.shuffleCardsList()[this.wordCounter()];
  });
  public guessedWords = signal<Word[]>([]);
  public notGuessedWords = signal<Word[]>([]);

  constructor() {
    // effect(() => {
    //       console.log(this.wordsCardsList());
    //       this.shuffleArray(this.wordsCardsList());
    // })

   }
  nextWord() {
    this.wordCounter.set(this.wordCounter() + 1);     
  }

  addWordToRezult(word: Word, isGuessed: boolean) {
    if (isGuessed) {
      this.guessedWords.set([...this.guessedWords(), word]);
      this.storageService.save('guessedWords', this.guessedWords()); 
    } else {
      this.notGuessedWords.set([...this.notGuessedWords(), word]);
      this.storageService.save('notGuessedWords', this.notGuessedWords()); 
    }
  }

  cleenArrays() {
    this.guessedWords.set([]);
    this.notGuessedWords.set([]);
  }

//   shuffleArray(array: Word[]) {
//   const shuffledArray = [...array]; 
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//     this.shuffleCardsList.set(shuffledArray);
// }


}
