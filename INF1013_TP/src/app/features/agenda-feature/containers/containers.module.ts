import { AgendaComponent } from './agenda/agenda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgendaComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [AgendaComponent],
  imports: [CommonModule, AgendaComponentsModule],
})
export class AgendaContainersModule {}
