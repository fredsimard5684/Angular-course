import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { StudentDataService } from "../service/student-data.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  studentForm: FormGroup;
  scoresFormArray?: FormArray;
  constructor( private fb: FormBuilder, private service: StudentDataService  ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstname: ['', [] ],
      lastname: ['', [] ],
      sex: [''],
      cp: ['', [permanentCode()] ],
      add: ['Ajouter'],
      scores: this.fb.array([])
    });
    this.scoresFormArray = this.studentForm.controls.scores as FormArray;
  }
  addScore() {
    this.scoresFormArray?.push(this.fb.group({
      name: [''],
      value: [''],
      date: ['' ]
    }));
  }
  public addStudent() {
    if (!this.studentForm?.invalid) {
      const value  =  this.studentForm.controls ;
      this.service.addStudent({gender: value.sex.value,
        fName: value.firstname.value,
        lName: value.lastname.value,
        cp: value.cp.value,
        scores: [{name: 'Intra', value: 78.5, date: new Date()}]});
    }
  }


  removeScore(idx: number) {
    this.scoresFormArray.removeAt(idx);
  }
}
function permanentCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const rgx = new RegExp('^[a-zA-Z]{4}[0-9]{8}$');
    const isValid = rgx.test(control.value);
    return isValid ? null : {permanentCode: {value: control.value}};
  };
}
