import { Import } from './../../../node_modules/@angular/cdk/schematics/update-tool/utils/imports.d';
import { ButtonModule } from 'primeng/button';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { GameDataService } from '../services/game-data.service';
import { inject,computed, effect } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Router } from '@angular/router';
import gsap from 'gsap';



@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  @ViewChild('cardWrapper', { static: true }) cardWrapper!: ElementRef;
  // private touchStartY = 0;
  // private mouseStartY = 0;
  private startY = 0;
  private isDragging = false;
  isTranslated = false;
  gameDataService = inject(GameDataService);
  timerService = inject(TimerService);
  router = inject(Router);
  currenWord = this.gameDataService.currentWord;
  constructor() {
    effect(() => {
      if (this.timerService.isTimeOver()) {
        this.finishGame(); // викликається тільки коли стало true
      }
    });
  }
  
  ngOnInit() {
    this.gameDataService.cleenArrays();
    this.timerService.start();

  }
  
  // onMouseDown(event: MouseEvent) {
  // this.mouseStartY = event.clientY;
  // }

  // onMouseUp(event: MouseEvent) {
  //   const endY = event.clientY;
  //   const deltaY = endY - this.mouseStartY;

  //   if (Math.abs(deltaY) > 50) {
  //     if (deltaY < 0) {
  //       this.animateSwipe('up');
  //       // this.gameDataService.addWordToRezult(this.currenWord(), true);
  //     } else {
  //       this.animateSwipe('down');
  //       // this.gameDataService.addWordToRezult(this.currenWord(), false);
  //     }
  //   }
  // }

  // onTouchStart(event: TouchEvent) {
  //   this.touchStartY = event.changedTouches[0].clientY;
  //   console.log(this.touchStartY);
  // }

  // onTouchEnd(event: TouchEvent) {
  //   const endY = event.changedTouches[0].clientY;
  //   const deltaY = endY - this.touchStartY;

  //   if (Math.abs(deltaY) > 50) {
  //     if (deltaY < 0) {
  //       this.animateSwipe('up');
  //       // this.gameDataService.addWordToRezult(this.currenWord(), true);
  //     } else {
  //       this.animateSwipe('down');
  //       // this.gameDataService.addWordToRezult(this.currenWord(), false);
  //     }
  //     // this.gameDataService.nextWord();
  //   }
  // }

 

  onStart(event: TouchEvent | MouseEvent) {
    this.startY = this.getClientY(event);
    console.log(this.startY);
    event.preventDefault?.();
  }

  onEnd(event: TouchEvent | MouseEvent) {
    const endY = this.getClientY(event);
    const deltaY = endY - this.startY;
    this.handleSwipeDelta(deltaY);
  }


  private getClientY(event: TouchEvent | MouseEvent): number {
    return event instanceof TouchEvent
      ? event.changedTouches[0].clientY
      : event.clientY;
  }

  private handleSwipeDelta(deltaY: number) {
    if (Math.abs(deltaY) > 50) {
      this.animateSwipe(deltaY < 0 ? 'up' : 'down');
    }
  }


  animateSwipe(direction: 'up' | 'down') {
  const card = this.cardWrapper.nativeElement;
  const distance = direction === 'up' ? -300 : 300;

  gsap.to(card, {
    y: distance,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
    onComplete: () => {
      // Додаємо поточне слово до результатів
      this.gameDataService.addWordToRezult(this.currenWord(), direction === 'up');

      // Міняємо слово
      this.changeTranslateStatus(false);
      this.gameDataService.nextWord();

      // Вхідна анімація — з іншого боку
      gsap.fromTo(
        card,
        { y: -distance, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.in' }
      );
    }
  });
  }
  changeTranslateStatus(status: boolean) {
    this.isTranslated = status;
  }
  finishGame() {
    // перенаправлення на сторінку результатів
    console.log('finishGame');
    this.router.navigate(['/gameEnd']);
  }

}
