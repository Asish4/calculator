import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css'],
})
export class SubstractionComponent {
  result: any;
  sub() {
    const first = document.getElementById('firstNumber') as HTMLInputElement;
    const firstValue = first.value;

    const second = document.getElementById('secondNumber') as HTMLInputElement;
    const secondValue = second.value;

    this.result = Number(firstValue) - Number(secondValue);
    return this.result;
  }
}
