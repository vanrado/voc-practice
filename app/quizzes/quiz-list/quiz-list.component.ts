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
  quizzes: Quiz[];
  selectedQuiz: Observable<Quiz>;

  constructor(private quizService: QuizService, private route: ActivatedRoute){
    this.selectedQuiz = this.route.params.map((p: Quiz) => {
      return p;
    });
  }

  ngOnInit(): void {
    console.log("quiz list component init");
    this.quizzes = this.quizService.getQuizzes();
  }

  onClick(quiz: Quiz){
    // console.log("quiz clicked", quiz.id);
  }
}
