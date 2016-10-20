import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "./quizzes/shared/services/auth.service";
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  counter: number[] = [];

  constructor(private http: Http, private authService: AuthService, private router: Router) {
    // let ressp = this.http.get("/node_modules/zone.js/dist/zone.js").map(x => x);
    // ressp.subscribe(x => console.log('value ', x));
    // console.log('object ', ressp);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['../about']);
  }
}
