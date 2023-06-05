import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component {
  title: string = 'problem 1';
  isPressed: boolean = false;
  sum: number = 0;

  resolveTheProblem(nr:number) {
    if (!this.isPressed) {
      for (let i = 0; i < nr; i++) {
        if (i % 3 == 0 || i % 5 == 0) this.sum += i;
      }
      this.isPressed = true;
    }
  }
}
