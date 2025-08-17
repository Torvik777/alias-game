import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogickControlService {
  isActiveGame = signal<boolean>(false);
  wordsNeededToWin = signal<number>(20);

  constructor() { }
}
