import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {QuizService} from "./QuizService";
import {Observable} from "rxjs";
import {Quiz} from "./Quiz";

@Injectable()
export class QuizzesResolver implements Resolve<any> {
  constructor(private quizService: QuizService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Quiz[]>|Promise<Quiz[]>|Quiz[] {
    console.log("quizzes resolver ", route.params['id']);
    let quizzes: Quiz[] = this.quizService.getQuizzes();
    console.log("quizzes resolver get quiz ", quizzes);
    return quizzes;
  }

}
