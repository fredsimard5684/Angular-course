import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./containers/profile/profile.component";

const routes: Routes = [{path: "", component: ProfileComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
