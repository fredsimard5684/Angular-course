import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./containers/portfolio/portfolio.component";
import {VirtualFairComponent} from "./components/virtual-fair/virtual-fair.component";
import {AvailabilityListComponent} from "./components/availability-list/availability-list.component";

const routes: Routes = [
  {
    path: "", component: PortfolioComponent, children: [
      {
        path: '', redirectTo: 'virtual-fair', pathMatch: 'full'
      },
      {
        path: 'virtual-fair', component: VirtualFairComponent
      },
      {
        path: 'availabilities', component: AvailabilityListComponent
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
