import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogickControlService {
  isActiveGame = signal<boolean>(false);

  constructor() { }
}
