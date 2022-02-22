import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from "./login-routing.module";
import {LoginContainersModule} from "./containers/containers.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginContainersModule,
    LoginRoutingModule
  ]
})
export class LoginFeatureModule { }
