import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<{elapsedTime: number}>();
  gameActive = false;
  counter = 0;
  interval: number;

  startGame() {
    if (this.gameActive === false) {
      this.gameActive = true;
      this.interval = setInterval(() => {
        this.counter++;
        this.gameStarted.emit({elapsedTime: this.counter});
      }, 1000);
    }
  }

  stopGame() {
    clearInterval(this.interval);
    this.gameActive = false;
  }
}