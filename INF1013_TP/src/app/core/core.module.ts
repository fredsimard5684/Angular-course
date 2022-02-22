import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    exports: [
        MainLayoutComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class CoreModule { }
