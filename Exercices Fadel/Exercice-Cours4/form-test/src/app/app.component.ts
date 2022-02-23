import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: FormArray | undefined;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      contacts: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  ngOnInit(): void {
    this.contacts = this.profileForm.get('contacts') as FormArray;
  }


  addContact() {
    this.contacts!.push(this.fb.control(''));
  }
}
