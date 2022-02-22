import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

const appRoutes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import("./features/login-feature/login-feature.module").then((m) => m.LoginFeatureModule)
  },
  {
    path: 'profile',
    loadChildren: () => import("./features/profile-feature/profile-feature.module").then((m) => m.ProfileFeatureModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import("./features/portfolio-feature/portfolio-feature.module").then((m) => m.PortfolioFeatureModule)
  },
  {
    path: 'request',
    loadChildren: () => import("./features/request-feature/request-feature.module").then((m) => m.RequestFeatureModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import("./features/agenda-feature/agenda-feature.module").then((m) => m.AgendaFeatureModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./features/home-feature/home-feature.module").then((m) => m.HomeFeatureModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
