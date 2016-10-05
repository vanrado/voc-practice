import {NgModule}      from '@angular/core';
import {QuizCreateComponent} from "./quiz-create.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {PreventClickedDirective} from "./PreventClickedDirective";
import {CommonModule} from "@angular/common";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizCreateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [QuizCreateComponent, PreventClickedDirective]
})
export class QuizCreateModule {

}
