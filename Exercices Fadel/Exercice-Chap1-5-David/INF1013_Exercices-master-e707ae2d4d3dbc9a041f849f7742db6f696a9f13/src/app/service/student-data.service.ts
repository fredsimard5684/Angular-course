import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Score } from '../model/score.model';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  students: Student[];

  constructor() {
    this.students = this.mockStudentData();
  }
  mockStudentData(): Student[] {
    return [
      {gender: 'male', fName: 'Tibo', lName: 'EnShape', cp: 'QUADS20202311', scores: this.mockScore()},
      {gender: 'male', fName: 'Fred', lName: 'BonJovi', cp: 'SWIFT2021021', scores: this.mockScore()},
      {gender: 'male', fName: 'Dave', lName: 'LaCouette', cp: 'HIPSTER20120104', scores: this.mockScore()},
      {gender: 'male', fName: 'Giles', lName: 'Tourette', cp: 'CALISS199504101', scores: this.mockScore()},
      {gender: 'female', fName: 'Stéphanie', lName: 'Lacruche', cp: 'CRUCHE198511231', scores: this.mockScore()},
      {gender: 'female', fName: 'Julie', lName: 'Touchette', cp: 'CUNT198412124', scores: this.mockScore()},
      {gender: 'female', fName: 'Guylaine', lName: 'Croteau', cp: 'CROTTE200504314', scores: this.mockScore()}
    ];
  }
  mockScore(): Score[] {
    return [
      {name: 'TP I', value: this.rand(100, 50), date: new Date(2021, 2, this.rand(28))},
      {name: 'TP II', value: this.rand(100, 65), date: new Date(2021, 3, this.rand(31))},
      {name: 'TP III', value: this.rand(100, 25), date: new Date(2021, 4, this.rand(30))},
      {name: 'Examen Intra', value: this.rand(100, 45), date: new Date(2021, 3, this.rand(31))},
      {name: 'Examen Final', value: this.rand(100, 55), date: new Date(2021, 4, this.rand(30))}
    ];
  }

  rand(max: number, min: number = 0): number {
    return Math.round(min + (max - min) * Math.random());
  }

  public addStudent(s: Student) {
    this.students.push(s);
  }
}
