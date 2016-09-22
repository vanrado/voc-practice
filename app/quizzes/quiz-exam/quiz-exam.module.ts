import {NgModule}      from '@angular/core';
import {RouterModule} from "@angular/router";
import {QuizExamComponent} from "./quiz-exam.component";
import {SelectedQuizResolver} from "../shared/SelectedQuizResolver";

const routes = [
  {
    path: ':id',
    pathMatch: 'prefix',
    component: QuizExamComponent,
    resolve: {
      quiz: SelectedQuizResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizExamComponent],
  providers: []
})
export class QuizExamModule {
}
