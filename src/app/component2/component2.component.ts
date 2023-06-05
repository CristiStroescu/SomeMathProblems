import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component {
  title: string = 'problem 5';
  isFound: boolean = false;
  isPressed: boolean = false;
  numberToFind: number = 0;

  resolveTheProblem(nr: number) {
    if (!this.isPressed) {
      this.numberToFind = nr;
      while (!this.isFound) {
        let counter: number = 2;
        for (let i = 2; i < nr; i++) {
          if (this.numberToFind % i == 0) {
            counter++;
          }
        }
        if (counter == nr) {
          this.isFound = true;
          this.isPressed = true;
          break;
        } else {
          this.numberToFind += nr;
        }
      }
    }
  }
}
