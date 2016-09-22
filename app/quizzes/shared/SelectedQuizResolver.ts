import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {QuizService} from "./QuizService";
import {Observable} from "rxjs";
import {Quiz} from "./Quiz";

@Injectable()
export class SelectedQuizResolver implements Resolve<any> {
  constructor(private quizService: QuizService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let quiz : Quiz = null;
    let quizId = route.params['id'];
    console.log("quiz resolver ", quizId);

    if(quizId !== undefined && quizId !== null){
      quiz = this.quizService.getQuiz(quizId);
      console.log("quiz resolver get quiz ", quiz);
    }

    return quiz;
  }

}
