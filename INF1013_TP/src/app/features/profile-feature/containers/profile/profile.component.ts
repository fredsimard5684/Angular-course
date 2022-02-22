import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/user";
import {AccountService} from "../../../../core/services/account.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = this.accountService.user

  }

}
