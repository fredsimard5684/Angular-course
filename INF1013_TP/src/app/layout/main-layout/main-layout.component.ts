import {BreakpointObserver} from '@angular/cdk/layout';
import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AccountService} from "../../core/services/account.service";
import {User} from "../../shared/models/user";
import {UserType} from "../../shared/enums/user-type";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  user: User

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, private accountService: AccountService) {
    this.user = accountService.user
  }

  isHairDresser(): boolean {
    return this.user.userType === UserType.HairDresser
}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close().then(r => console.log('Sidenav closed!'));
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open().then(r => console.log('Sidenav opened!'));
      }
    })
    this.cdr.detectChanges();
  }
}
