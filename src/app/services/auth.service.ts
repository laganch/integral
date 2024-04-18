import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiServiceService } from "./api-service.service";
import { Observable, catchError, map, of } from "rxjs";
import { Router } from "@angular/router";
import {Constant} from "../shared/Constant";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  SERVER_URL = environment.target;

  constructor(
    private http: HttpClient,
    private apiServeice: ApiServiceService,
    private router: Router,
  ) {}

  login(context: any, remember: boolean): Observable<any> {
    return this.apiServeice
      .loginPost_("login", JSON.stringify(context))
      .pipe(
        map((response: any) => {
          if (response.success == true) {
            localStorage.setItem(Constant.LOGGED_IN_USER, response.token);
            localStorage.setItem("loginStatus", "SUCCESS");
          }
          return response;
        }),
        catchError((error) => {
          return of(error);
        }),
      );
  }

  public Register(url: any, Data: any) {}

  public getPasswordResetLink(email: any) {
    return this.apiServeice.loginPost_(
      "/auth/password-reset-link?email=" + email,
      {},
    );
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(Constant.USER_DATA);
  }

  getToken(): string | null {
    return localStorage.getItem(Constant.LOGGED_IN_USER);
  }

  getUser(): any | null {
    if (!this.isLoggedIn) return null;
    return JSON.parse(JSON.stringify(localStorage.getItem(Constant.USER_DATA)));
  }

  getRoles() {
    return this.apiServeice.LoginGet("/auth/role/get");
  }

  getPriviliage() {
    return JSON.parse(this.getUser())
      .roles.priviliages.split(",")
      .map(function (value: any) {
        return value.trim();
      });
  }

  getAccount() {
    return JSON.parse(this.getUser()).account;
  }

  getTinNumber() {
    return JSON.parse(this.getUser()).tin;
  }

  getEmail() {
    return JSON.parse(this.getUser()).email;
  }

  getDisplayName() {
    return JSON.parse(this.getUser())?.displayName;
  }

  getPhoneNumber() {
    return JSON.parse(this.getUser())?.phoneNumber;
  }

  getId() {
    return JSON.parse(this.getUser())?.userId;
  }

  public hasRole(role: any) {
    return this.getPriviliage().includes(role);
  }

  public hasAnyPermission(permissions: string[]) {
    for (let permission of permissions) {
      if (this.hasRole(permission)) {
        return true;
      }
    }
    return false;
  }

  public forbidAccess() {
    this.router.navigate(["/auth/login"]);
  }

  logout(redirect: boolean = true) {

    const url = "/auth/logout/user?email="+ this.getEmail()
    this.apiServeice.loginPost_(url, {}).subscribe(res => {
        localStorage.removeItem(Constant.USER_DATA)
        localStorage.removeItem(Constant.LOGGED_IN_USER)
      if (redirect) {
        this.router.navigate(['/auth/login']);
      }
        },  error => {
          console.log(error)
        }
    );
  }
}
