import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {AppComponent}  from './app.component';
import './rxjs-operators';
import {RouterModule} from "@angular/router";

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
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
