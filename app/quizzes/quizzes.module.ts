import {NgModule}      from '@angular/core';
import {QuizzesComponent} from "./quizzes.component";
import {RouterModule} from "@angular/router";
import {QuizService} from "./shared/QuizService";
import {CommonModule} from "@angular/common";
import {QuizListModalComponent} from "./quiz-list/quiz-list-modal/quiz-list-modal.component";
import {SelectedQuizResolver} from "./shared/SelectedQuizResolver";
import {QuizzesResolver} from "./shared/QuizzesResolver";

const routes = [
  {
    path: '',
    component: QuizzesComponent,
    children: [
      {
        path: 'list',
        loadChildren: 'app/quizzes/quiz-list/quiz-list.module#QuizListModule'
      },
      {
        path: 'create',
        loadChildren: 'app/quizzes/quiz-create/quiz-create.module#QuizCreateModule',

      },
      {
        path: 'history',
        loadChildren: 'app/quizzes/quiz-history/quiz-history.module#QuizHistoryModule',
      },
      {
        path: 'home',
        loadChildren: 'app/quizzes/quiz-home/quiz-home.module#QuizHomeModule',
      },
      {
        path: 'exam',
        loadChildren: 'app/quizzes/quiz-exam/quiz-exam.module#QuizExamModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizzesComponent],
  providers: [QuizService, SelectedQuizResolver, QuizzesResolver]
})
export class QuizzesModule {
}
