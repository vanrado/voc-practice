import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'quiz-login.component.html'
})
export class QuizLoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    console.log('value submitted', this.loginForm.controls['username'], this.loginForm.controls['password']);
    this.authService.login().subscribe(
      success => {
        if(success){
          console.log('login success');
          this.router.navigate(['../quizzes'])
        } else {
          console.log('login not success');
        }
      },
      error => {
        console.error('login fault');
      }
    );
  }
}
