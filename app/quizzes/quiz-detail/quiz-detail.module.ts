import {NgModule}      from '@angular/core';
import {RouterModule} from "@angular/router";
import {QuizDetailComponent} from "./quiz-detail.component";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizDetailComponent],
})
export class QuizCreateModule {

}
