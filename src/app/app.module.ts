import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './admin/landing/landing.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import {TokenInterceptoprService} from "./services/token-interceptopr.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './admin/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './admin/create-user/create-user.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptoprService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
