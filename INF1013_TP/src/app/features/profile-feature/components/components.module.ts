import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  exports: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ProfileComponentsModule { }
