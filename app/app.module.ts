import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {AppComponent}  from './app.component';
import './rxjs-operators';
import {RouterModule} from "@angular/router";
import {QuizzesComponent} from "./quizzes/quizzes.component";

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/quizzes'
  },
  {
    path: 'quizzes',
    component: QuizzesComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, QuizzesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
