import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
})
export class AdditionComponent {
  result: any;
  add() {
    const first = document.getElementById('firstNumber') as HTMLInputElement;
    const firstValue = first.value;

    const second = document.getElementById('secondNumber') as HTMLInputElement;
    const secondValue = second.value;

    this.result = Number(firstValue) + Number(secondValue);
    return this.result;
  }
}
