import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Quiz} from "../shared/Quiz";
import {Question} from "../shared/Question";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-exam.component.html'
})
export class QuizExamComponent implements OnInit {
  data: Observable<Quiz>;
  quiz: Quiz;
  current: number; // current page number
  currentQuestion: Question;
  nextButtonVisible: boolean;
  prevButtonVisible: boolean;


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.route.data.pluck<any>('quiz');
    this.data.subscribe(observer => {
      this.quiz = observer;
    });

    this.route.queryParams.subscribe(param => {
        // set current
        let id = +param["current"];
        console.log('queryParam', param["current"], id);
        if (id > 0 && id < (this.quiz.questions.length + 1)) {
          this.current = id;
          this.currentQuestion = this.quiz.questions[--id];
          this.setVisibilities();
        } else {
          // navigate to first page if param is bullshit
          this.router.navigate(['quizzes/exam/', this.quiz.id], {queryParams: {current: 1}});
        }
      }
    );

  }

  private setVisibilities(){
    console.log('set visibilities');
    this.nextButtonVisible = this.current < this.quiz.questions.length;
    this.prevButtonVisible = this.current > 1;
  }

  // ngOnInit() {
  //   // this.route.params.subscribe(params => {
  //   //   // let id = +; // (+) converts string 'id' to a number
  //   //   this.test = this.testService.getTest(params['id']);
  //   //   console.log("TestQuizComponent test founded + " + JSON.stringify(this.test));
  //   // });
  //   // this.current = 1;
  //   // this.currentQuestion = this.test.questions[this.current - 1];
  //   // console.log("TestQuizComponent init currentQuestion= " + JSON.stringify(this.currentQuestion));
  // }

  next() {
    let navTo = this.current + 1;
    console.log("TestQuizComponent next clicked", navTo);
    // console.log("current=" + this.current);
    // if(this.test.questions !== undefined &&
    //   this.current < this.test.questions.length){
    //   this.current++;
    //   this.currentQuestion = this.test.questions[this.current - 1];
    //   console.log("current=" + this.current);
    //   console.log("TestQuizComponent next navigated to question " + JSON.stringify(this.currentQuestion));
    // }

    this.router.navigate(['quizzes/exam/', this.quiz.id], {queryParams: {current: navTo}});
  }

  prev() {
    let navTo = this.current + 1;
    console.log("TestQuizComponent prev clicked", navTo, this.current);
    // console.log("current=" + this.current);
    // if(this.test.questions !== undefined &&
    //   this.current > 1){
    //   this.current--;
    //   this.currentQuestion = this.test.questions[this.current - 1];
    //   console.log("current=" + this.current);
    //   console.log("TestQuizComponent prev navigated to question " + JSON.stringify(this.currentQuestion));
    // }
    // this.resetForm();

    this.router.navigate(['quizzes/exam/', this.quiz.id], {queryParams: {current: navTo}});
  }

  onSubmit(value: any) {
    console.log("TestQuizComponent question submit " + JSON.stringify(value));
    // this.currentQuestion.answer = value["answer"];
    // this.next();
    // this.resetForm();
  }

  resetForm() {
    // for(let name in this.translateForm.controls) {
    //   (<Control>this.translateForm.controls[name]).updateValue('');
    //   this.translateForm.controls[name].setErrors(null);
    // }
  }

  cancel() {
    console.log("TestQuizComponent cancel");
    // this.router.navigate(['/test', this.test.id]);
  }

  back() {
    this.router.navigate(['quizzes/list', this.quiz.id])
  }
}
