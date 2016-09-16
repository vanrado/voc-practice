import {NgModule}      from '@angular/core';
import {QuizListComponent} from "./quiz-list.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {QuizListModalComponent} from "./quiz-list-modal/quiz-list-modal.component";

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuizListComponent
  },
  {
    path: ':id',
    component: QuizListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizListComponent, QuizListModalComponent]
})
export class QuizListModule {
}
