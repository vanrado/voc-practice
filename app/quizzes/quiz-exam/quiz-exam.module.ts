import {NgModule}      from '@angular/core';
import {RouterModule} from "@angular/router";
import {QuizExamComponent} from "./quiz-exam.component";
import {SelectedQuizResolver} from "../shared/SelectedQuizResolver";
import {CommonModule} from "@angular/common";

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
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizExamComponent],
  providers: []
})
export class QuizExamModule {
}
