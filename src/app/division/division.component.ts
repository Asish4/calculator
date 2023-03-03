import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})
export class DivisionComponent {
  result: any;
  div() {
    const first = document.getElementById('firstNumber') as HTMLInputElement;
    const firstValue = first.value;

    const second = document.getElementById('secondNumber') as HTMLInputElement;
    const secondValue = second.value;

    this.result = Number(firstValue) / Number(secondValue);
    return this.result;
  }
}
