import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {CustomFormGroup} from "./CustomFormGroup";
import {HostListener} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-create.component.html',
})
export class QuizCreateComponent {

  quizCreateForm: FormGroup;

  constructor(){
    this.quizCreateForm = new FormGroup({
      name: new FormControl(''),
      questions: new FormControl('')
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(e) {
    console.log('from component',e)
  }
}
