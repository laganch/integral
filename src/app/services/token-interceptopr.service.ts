import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AsyncSubject, mergeMap, Observable, of} from 'rxjs';
import {Constant} from "../shared/Constant";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptoprService implements HttpInterceptor{
  token = localStorage.getItem(Constant.LOGGED_IN_USER);

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headers = {} as any;
   req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${this.token}`,
        }
    });
    return next.handle(req);
  }
}
