import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda-routing.module';
import {AgendaContainersModule} from "./containers/containers.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AgendaRoutingModule, AgendaContainersModule],
})
export class AgendaFeatureModule {}
