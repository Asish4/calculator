import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
})
export class AdditionComponent {
  result: any;
  add(values: any) {
    console.log(values);

    this.result = values.firstNumber + values.lastNumber;
    console.log(this.result);
  }
}
