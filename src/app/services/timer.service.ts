import { Injectable, computed, effect, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private defaultMinutes = 0.2;
  private totalSeconds = signal(this.defaultMinutes * 60);

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

  constructor() {
    // автоматично оновлюємо isTimeOver, коли totalSeconds змінюється
    // effect(() => {
    //   this.isTimeOver.set(this.totalSeconds() === 0);
    // });
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

  private reset(minutes: number = this.defaultMinutes): void {
    this.stop();
    this.totalSeconds.set(minutes * 60);
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
