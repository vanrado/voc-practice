import { Injectable } from '@angular/core';
import {MOCK_TESTS} from "./mock_quizzes";
import {Quiz} from "./Quiz";
import {Question} from "./Question";
import {Http} from "@angular/http";

@Injectable()
export class QuizService {
  constructor(private http: Http){

  }

  getQuizzes(){
    // console.log("Quizzeservice getting Quizzes" + JSON.stringify(MOCK_TESTS));
    return MOCK_TESTS;
  }

  getQuiz(id: string){
    console.log("Quizzeservice getting quiz: test.id=" + id);
    for(let test of this.getQuizzes()){
      if(test.id === id){
        console.log("Quizzeservice return quiz: test.id=" + id);
        return test;
      }
    }

    return null;
  }

  createTest(test: Quiz){
    // TODO
    let len = this.getQuizzes().length;
    test.id = "" + len;
    this.getQuizzes().push(test);
    console.log("Quizzeservice test created: test.id=" + len);
    return len;
  }
}
