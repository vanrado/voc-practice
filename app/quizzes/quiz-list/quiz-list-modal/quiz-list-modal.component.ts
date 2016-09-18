import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../shared/Quiz";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {QuizService} from "../../shared/QuizService";

@Component({
  moduleId: module.id,
  selector: 'quiz-list-modal',
  templateUrl: 'quiz-list-modal.component.html'
})
export class QuizListModalComponent implements OnInit {
  quiz: Observable<Quiz>;
  visible: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quiz = this.route.params.map((p: Quiz) => {
      return this.quizService.getQuiz(p.id);
    });
    // this.route.data.pluck('quiz');

    this.quiz.subscribe((p: Quiz) => {
      if (p !== null) {
        console.log("param changed", p);
        this.visible = p.id !== null && p.id !== undefined;
      }
    });
  }

  closeModal() {
    console.log("close modal");
    // this.router.navigate(['../../list/']) ;
  }
}
