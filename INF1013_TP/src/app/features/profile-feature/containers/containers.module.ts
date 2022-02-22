import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ProfileComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileComponentsModule
  ]
})
export class ProfileContainersModule { }
