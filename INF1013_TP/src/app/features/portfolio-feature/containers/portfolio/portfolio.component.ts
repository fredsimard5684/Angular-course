import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  navLinks: {
    'label': string;
    'link': string;
    'index': number;
  }[] = [];
  activeLinkIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.navigate(['virtual-fair'], {relativeTo: this.route}).then()
    this.navLinks = [
      {
        label: 'Salon virtuel',
        link: './virtual-fair',
        index: 0
      }, {
        label: 'Disponibilités',
        link: './availabilities',
        index: 1
      }
    ];
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(value => value.link === '.' + this.router.url)!)
    })
  }

}
