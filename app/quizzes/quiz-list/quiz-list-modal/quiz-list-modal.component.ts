import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../shared/Quiz";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'quiz-list-modal',
  templateUrl: 'quiz-list-modal.component.html'
})
export class QuizListModalComponent implements OnInit {
  quiz: Observable<Quiz>;
  visible: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.quiz = this.route.params.map((p: Quiz) => {
      console.log("param changed");
      this.visible = p.id !== null && p.id !== undefined;
      return p;
    });
  }

  ngOnInit(): void {

  }

  closeModal() {
    console.log("close modal");
    this.router.navigate(['../../']);
  }
}
