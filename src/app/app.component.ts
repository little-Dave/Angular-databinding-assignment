import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  gameTimer: number;
  numbers: number[] = [];

  showTime(timer: {elapsedTime: number}) {
    this.gameTimer = timer.elapsedTime;
    this.numbers.push(timer.elapsedTime);
  }

}
