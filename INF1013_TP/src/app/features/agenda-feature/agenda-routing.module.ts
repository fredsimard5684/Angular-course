import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AgendaComponent} from "./containers/agenda/agenda.component";

const routes: Routes = [{path: "", component: AgendaComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
