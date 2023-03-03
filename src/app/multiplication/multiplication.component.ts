import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css'],
})
export class MultiplicationComponent {
  result: any;
  mul() {
    const first = document.getElementById('firstNumber') as HTMLInputElement;
    const firstValue = first.value;

    const second = document.getElementById('secondNumber') as HTMLInputElement;
    const secondValue = second.value;

    this.result = Number(firstValue) * Number(secondValue);
    return this.result;
  }
}
