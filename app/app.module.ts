import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {AppComponent}  from './app.component';
import './rxjs-operators';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {LicenceComponent} from "./licence/licence.component";
import {NotFoundComponent} from "./shared/404.component";
import {QuizListModalComponent} from "./quizzes/quiz-list/quiz-list-modal/quiz-list-modal.component";
import {CommonModule} from "@angular/common";
import {CustomGuard} from "./quizzes/quiz-create/custom-candeactivate.guard";
import {ConfirmDialog} from "./quizzes/quiz-create/confirm-dialog.component";
import {DialogService} from "./quizzes/quiz-create/dialog.service";

// TODO separe do suboru
const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'quizzes'
  },
  {
    // TODO url = quizzes/list  ; quizzes/create  ; quizzes/history
    path: 'quizzes',
    loadChildren: 'app/quizzes/quizzes.module#QuizzesModule',
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'licence',
    component: LicenceComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, AboutComponent, LicenceComponent, NotFoundComponent, ConfirmDialog],
  providers: [CustomGuard, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
