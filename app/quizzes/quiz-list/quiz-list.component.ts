import {Component, OnInit} from '@angular/core';
import {Quiz} from "../shared/Quiz";
import {QuizService} from "../shared/QuizService";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-list.component.html'
})
export class QuizListComponent implements OnInit{

  // TODO skusit private/public
  quizzes: Quiz[];

  constructor(private quizService: QuizService){
  }

  ngOnInit(): void {
    console.log("quiz list component init");
    this.quizzes = this.quizService.getQuizzes();
  }

  onClick(quiz: Quiz){
    // console.log("quiz clicked", quiz.id);
  }
}
