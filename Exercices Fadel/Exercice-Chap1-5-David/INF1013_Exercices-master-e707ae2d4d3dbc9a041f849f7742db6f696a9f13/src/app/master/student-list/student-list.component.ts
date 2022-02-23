import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentDataService } from "../../service/student-data.service";
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  selIdx?: number;
  students?: Student[];
  private subscriber?: Subscription;
  constructor( private service: StudentDataService,
               private router: Router) { }

  ngOnInit() {
    this.students =  this.service.students;
    this.selIdx = 0;
    // afin de mettre a jour la list des items selectionnés par le details
    this.subscriber = this.router.events.subscribe(params => {
      console.log('event--->', params);
      if (params instanceof ActivationEnd) {
        const actEnd = (params as ActivationEnd);
        this.selIdx =  Number(actEnd.snapshot.paramMap.get('idx'));
      }
    });
  }

  remove(idx: number) {
    this.students?.splice(idx, 1);
  }

  getAverage(student: Student): number {
    let averag = 0;
    student.scores.forEach(s => {averag = averag + s.value; });
    return averag / student.scores.length;
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }
}

