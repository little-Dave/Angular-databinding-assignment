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

  startGame() {
    if (this.gameActive === false) {
      setInterval(() => {
        this.gameActive = true;
        this.counter++;
        this.gameStarted.emit({elapsedTime: this.counter});
      }, 1000);
    }
  }
}