import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import { VirtualFairComponent } from './virtual-fair/virtual-fair.component';
import { AvailabilityListComponent } from './availability-list/availability-list.component';
import {SharedModule} from "../../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    VirtualFairComponent,
    AvailabilityListComponent,
  ],
  exports: [
    VirtualFairComponent
  ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatInputModule,
        MatTabsModule,
        MatButtonModule,
        SharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        FormsModule
    ]
})
export class PortfolioComponentsModule { }
