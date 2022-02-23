import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from "../service/student-data.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  student: Student;
  private index: number = 0;
  constructor(private route: ActivatedRoute,
              private service: StudentDataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.index =  Number(params.get('idx'));
      this.student = this.service.students[this.index];
    });
  }


  getAverage(): number {
    let averag = 0;
    this.student.scores.forEach(s => {averag = averag + s.value; });
    return averag / this.student.scores.length;
  }

  next(inc: number) {
    if (this.index + inc >= this.service.students.length) {
      this.index = 0;
    } else  if (this.index + inc < 0) {
      this.index = this.service.students.length - 1 ;
    } else {
      this.index = this.index + inc;
    }
    this.router.navigate(['/details', this.index]);
  }
}
