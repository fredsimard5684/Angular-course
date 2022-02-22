import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListComponent } from './requests-list/requests-list.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [RequestsListComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        SharedModule,
    ],
  exports: [RequestsListComponent],
})
export class RequestComponentsModule {}
