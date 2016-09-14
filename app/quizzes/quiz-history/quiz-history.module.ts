import {NgModule}      from '@angular/core';
import {QuizHistoryComponent} from "./quiz-history.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizHistoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizHistoryComponent],
})
export class QuizHistoryModule {
}
