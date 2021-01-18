import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm
  defaultQuestion = 'pet'
  answerQuestion = '';
  genders = ['Male', 'Female']
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
    

  }
   user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  } 

  formSubmitted = false
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    this.user.username = this.signUpForm.value.userData.username
    this.user.email = this.signUpForm.value.userData.email
    this.user.secretQuestion = this.signUpForm.value.secret
    this.user.questionAnswer = this.signUpForm.value.answerQuestion
    this.user.gender = this.signUpForm.value.userData.gender
    this.formSubmitted = true
  }
}
