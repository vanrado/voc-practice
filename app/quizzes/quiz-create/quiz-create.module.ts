import {NgModule}      from '@angular/core';
import {QuizCreateComponent} from "./quiz-create.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizCreateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [QuizCreateComponent],
})
export class QuizCreateModule {

}
