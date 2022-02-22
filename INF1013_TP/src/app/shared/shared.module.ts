import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMatTableHeaderComponent } from './components/custom-mat-table-header/custom-mat-table-header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        CustomMatTableHeaderComponent
    ],
    exports: [
        CustomMatTableHeaderComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
