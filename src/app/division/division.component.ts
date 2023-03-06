import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})
export class DivisionComponent {
  result: any;
  div(values: any) {
    this.result = values.firstNumber / values.lastNumber;
    console.log(this.result);
  }
}
