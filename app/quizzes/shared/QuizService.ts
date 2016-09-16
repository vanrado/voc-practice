import { Injectable } from '@angular/core';
import {MOCK_TESTS} from "./mock_quizzes";
import {Quiz} from "./Quiz";
import {Question} from "./Question";

@Injectable()
export class QuizService {
  constructor(){

  }

  getQuizzes(){
    console.log("Quizzeservice getting Quizzes" + JSON.stringify(MOCK_TESTS));
    return MOCK_TESTS;
  }

  getTest(id: string){
    console.log("Quizzeservice getting test: test.id=" + id);
    for(let test of this.getQuizzes()){
      console.log("Quizzeservice let test test.id=" + test.id.constructor.name + " id=" + id.constructor.name);
      if(test.id === id){
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
