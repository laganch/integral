import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./admin/landing/landing.component";
import {LoginComponent} from "./admin/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "landing",
    component: LandingComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
