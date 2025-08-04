import { Injectable, signal } from '@angular/core';
import { Word } from '../models/models';
import { dictionaryOptions } from '../statick-data/dictionary-select';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
 dictionaryOptions = dictionaryOptions;
 selectedDictionary  = signal<Word[]>([]);
 
}
