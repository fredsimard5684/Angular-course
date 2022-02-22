import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {LoginComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginComponentsModule
  ]
})
export class LoginContainersModule { }
