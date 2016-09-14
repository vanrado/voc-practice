import {NgModule}      from '@angular/core';
import {QuizHomeComponent} from "./quiz-home.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizHomeComponent]
})
export class QuizHomeModule {
}
