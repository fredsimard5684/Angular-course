import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  awnser;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    anwser: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnwser: '',
    //   gender: 'male'
    // }));
    this.signupForm.form.patchValue({userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.form.value.userData.username;
    this.user.email = this.signupForm.form.value.userData.email;
    this.user.secretQuestion = this.signupForm.form.value.userData.secret;
    this.user.anwser = this.signupForm.form.value.userData.questionAnwser;
  }
}
