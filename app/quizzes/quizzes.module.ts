import {NgModule}      from '@angular/core';
import {QuizzesComponent} from "./quizzes.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    component: QuizzesComponent,
    children: [
      {
        path: 'list',
        loadChildren: 'app/quizzes/quiz-list/quiz-list.module#QuizListModule',
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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizzesComponent]
})
export class QuizzesModule{

}
