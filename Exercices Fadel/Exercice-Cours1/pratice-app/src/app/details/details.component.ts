import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../models/student.models";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() student!: Student

  constructor() { }

  ngOnInit(): void {
  }

}
