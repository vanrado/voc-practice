import {NgModule}      from '@angular/core';
import {QuizCreateComponent} from "./quiz-create.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CustomGuard} from "./custom-candeactivate.guard";
import {ConfirmDialog} from "./confirm-dialog.component";

const routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: QuizCreateComponent,
    canDeactivate: [CustomGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [QuizCreateComponent]
})
export class QuizCreateModule {

}
