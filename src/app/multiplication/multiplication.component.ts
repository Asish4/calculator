import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css'],
})
export class MultiplicationComponent {
  result: any;
  mul(values: any) {
    console.log(values);

    this.result = values.firstNumber * values.lastNumber;
    console.log(this.result);
  }
}
