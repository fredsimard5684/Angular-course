import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/user";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  public showPassword: boolean = false;

  @Input() user!: User;
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [this.user.username],
      password: [this.user.password],
      firstname: [this.user.firstname],
      lastname: [this.user.lastname],
      email: [this.user.email],
      profilePicture: ['']
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
