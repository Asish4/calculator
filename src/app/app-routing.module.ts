import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  { path: 'addition', component: AdditionComponent },
  { path: 'subtraction', component: SubstractionComponent },
  { path: 'multiplication', component: MultiplicationComponent },
  { path: 'division', component: DivisionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
