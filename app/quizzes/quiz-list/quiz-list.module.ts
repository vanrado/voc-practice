import {NgModule}      from '@angular/core';
import {QuizListComponent} from "./quiz-list.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {QuizListModalComponent} from "./quiz-list-modal/quiz-list-modal.component";
import {SelectedQuizResolver} from "../shared/SelectedQuizResolver";
import {QuizzesResolver} from "../shared/QuizzesResolver";

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuizListComponent,
    resolve: {
      quiz: SelectedQuizResolver,
      quizzes: QuizzesResolver
    }
  },
  {
    path: ':id',
    component: QuizListComponent,
    resolve: {
      quiz: SelectedQuizResolver,
      quizzes: QuizzesResolver
    }
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
