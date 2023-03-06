import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  ngOnInit(): void {
    let num1: number = 4;
    let num2: number = 2;
    console.log(num1 + num2);
  }
}
