import {NgModule}      from '@angular/core';
import {QuizListComponent} from "./quiz-list.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizListComponent]
})
export class QuizListModule {
}
