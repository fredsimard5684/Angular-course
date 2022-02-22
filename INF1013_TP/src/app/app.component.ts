import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue sur CoiffeX\n';
  subtitle = 'La plateforme de coiffure dynamique';

  constructor(public router: Router) {
  }

}
