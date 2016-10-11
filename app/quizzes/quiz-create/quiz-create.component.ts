import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {EditFormComponent} from "./EditFormComponent";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-create.component.html',
})
export class QuizCreateComponent implements EditFormComponent{
  public quizCreateForm: FormGroup;

  constructor(){
    this.quizCreateForm = new FormGroup({
      name: new FormControl(''),
      questions: new FormControl('')
    });
  }

  /**
   *
   * @returns {boolean} true ak pouzivatel zmenil data vo formulari false ak nie
   */
  isFormChanged(): boolean {
    return !this.quizCreateForm.pristine;
  }
}
