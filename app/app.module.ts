import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {AppComponent}  from './app.component';
import './rxjs-operators';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {LicenceComponent} from "./licence/licence.component";
import {NotFoundComponent} from "./shared/404.component";

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
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, AboutComponent, LicenceComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
