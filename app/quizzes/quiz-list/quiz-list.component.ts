import {Component, OnInit} from '@angular/core';
import {Quiz} from "../shared/Quiz";
import {QuizService} from "../shared/QuizService";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-list.component.html',
  styleUrls: ['quiz-list.component.css']
})
export class QuizListComponent implements OnInit{

  // TODO skusit private/public
  quizzes: Observable<Quiz[]>;
  selectedQuiz: Observable<Quiz>;

  constructor(private quizService: QuizService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    console.log("quiz list component init");
    // this.quizzes = this.quizService.getQuizzes();
    this.quizzes  = this.route.data.pluck<Quiz[]>('quizzes');
    this.selectedQuiz = this.route.data.pluck<Quiz>('quiz');  // TODO nutne zadat typ do <>
  }

  onClick(quiz: Quiz){
    // console.log("quiz clicked", quiz.id);
  }

  alert(...par){
    console.log('alert', par);
  }
}
