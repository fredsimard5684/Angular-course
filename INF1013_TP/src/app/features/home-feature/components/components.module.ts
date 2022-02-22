import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {PortfolioRoutingModule} from "../../portfolio-feature/portfolio-routing.module";



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  exports: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    PortfolioRoutingModule
  ]
})
export class HomeComponentsModule { }
