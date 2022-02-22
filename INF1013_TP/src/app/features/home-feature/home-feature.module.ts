import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeContainersModule} from "./containers/containers.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomeRoutingModule, HomeContainersModule
  ]
})
export class HomeFeatureModule { }
