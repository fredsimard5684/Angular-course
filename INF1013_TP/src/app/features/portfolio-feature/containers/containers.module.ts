import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from "@angular/material/divider";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {PortfolioComponentsModule} from "../components/components.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioComponentsModule,
    MatDividerModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule
  ]
})
export class PortfolioContainersModule { }
