import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import {PortfolioContainersModule} from "./containers/containers.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    PortfolioContainersModule
  ]
})
export class PortfolioFeatureModule { }
