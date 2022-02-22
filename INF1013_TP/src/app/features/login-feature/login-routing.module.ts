import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./containers/login/login.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";

const routes: Routes = [
  {
    path: "", component: LoginComponent, children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login', component: LoginFormComponent
      },
      {
        path: 'register', component: RegisterFormComponent
      }
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
export class LoginRoutingModule {
}
