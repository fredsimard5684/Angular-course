import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileContainersModule} from "./containers/containers.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileContainersModule,
    ProfileRoutingModule
  ]
})
export class ProfileFeatureModule { }
