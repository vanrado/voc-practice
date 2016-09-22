import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Quiz} from "../shared/Quiz";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-exam.component.html'
})
export class QuizExamComponent implements OnInit{
  data: Observable<Quiz>;
  quiz: Quiz;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.route.data.pluck<any>('quiz');
    this.data.subscribe(observer => {
      this.quiz = observer;
    });
  }

  back(){
    this.router.navigate(['quizzes/list', this.quiz.id])
  }
}
