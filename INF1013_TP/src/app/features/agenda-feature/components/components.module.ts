import { SharedModule } from './../../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';

@NgModule({
  declarations: [AgendaListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [AgendaListComponent],
})
export class AgendaComponentsModule {}
