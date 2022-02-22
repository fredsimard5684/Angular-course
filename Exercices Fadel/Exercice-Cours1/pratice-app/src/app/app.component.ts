import {Component} from '@angular/core';
import {Student} from "./models/student.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pratice-app';
  students: Student[]
  selected?: Student

  select(ss: Student) {
    this.selected = ss;
  }

  constructor() {
    this.students = [{
      fname: "alexandre",
      cp: "ALEXLAE",
      lname: "Touchette",
      scores: [{name: "Examen", value: "A+"}]
    },
      {
        fname: "dsa",
        cp: "ALEXLAE",
        lname: "Touchette",
        scores: [{name: "Examen", value: "A-"}]
      },
      {
        fname: "fds",
        cp: "ALEXLAE",
        lname: "Touchette",
        scores: [{name: "Examen", value: "A"}]
      },
      {
        fname: "gds",
        cp: "ALEXLAE",
        lname: "Touchette",
        scores: [{name: "Examen", value: "A+"}]
      }
    ]
  }
}
