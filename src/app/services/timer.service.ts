import { Injectable, computed, effect, signal, untracked  } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  defaultSeconds = signal(120);
  private totalSeconds = signal(this.defaultSeconds());

  // computed для відображення у форматі MM:SS
  readonly timeLeft = computed(() => {
    const seconds = this.totalSeconds();
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${this.pad(min)}:${this.pad(sec)}`;
  });

  // signal, що вказує — час вийшов
  readonly isTimeOver = signal(false);

  private timerSubscription: Subscription | null = null;

  // constructor() {
  // effect(() => {
  //   const newDefault = this.defaultSeconds();
  //   // Ставимо тільки якщо totalSeconds ще не відрізняється
  //     if (this.totalSeconds() !== newDefault) {
  //       this.totalSeconds.set(newDefault);
  //     }
  //   });
  // }

    constructor() {
    effect(() => {
      const nextDefault = this.defaultSeconds();
      const current = untracked(() => this.totalSeconds()); // don't track this

      if (current !== nextDefault) {
        this.totalSeconds.set(nextDefault); // write allowed below
      }
    }, { allowSignalWrites: true });
  }
  

  start(): void {
    this.stop(); // перестраховка
    this.reset();
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.totalSeconds() > 0) {
        this.totalSeconds.update((v) => v - 1);
      } else {
        this.isTimeOver.set(true);
        this.stop();
      }
    });
  }

  private reset(seconds: number = this.defaultSeconds()): void {
    this.stop();
    this.totalSeconds.set(seconds);
    this.isTimeOver.set(false);
  }

  private stop(): void {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = null;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
