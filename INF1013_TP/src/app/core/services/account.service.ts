import { Injectable, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserType } from '../../shared/enums/user-type';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  user!: User;

  constructor() {
    this.user = {
      id: '1',
      username: 'alexandrealex',
      password: 'alex12354',
      firstname: 'Alexandre',
      lastname: 'Touchette',
      email: 'touchal179@classomption.qc.ca',
      userType: UserType.Client,
      profilePicture: null,
    };
  }
}
