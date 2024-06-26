import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {utility} from "./Utility";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  SERVER_URL = environment.target;
  LOGIN_URL = environment.target;
  PAYMENT_URL = environment.target;
  suppressAlertError: boolean = false;

  constructor(private httpClient: HttpClient) {}

  public get(actionUrl: any, options?: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    if (options) {
      return this.httpClient.get<any>(url, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.get<any>(url).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public get_Two_Params(actionUrl: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    // if (options) {
    return this.httpClient.get<any>(url).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return this.handleError(error);
      }),
    );
    // }
  }

  public get_test_Params(actionUrl: any): Observable<any> {
    const url = actionUrl;
    // if (options) {
    return this.httpClient.get<any>(url).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return this.handleError(error);
      }),
    );
    // }
  }

  validateTin(tinNumber: string, tinType: string) {
    return this.httpClient.get<any>(
      this.SERVER_URL +
        "/user-profile/validate-tin/" +
        tinNumber +
        "/" +
        tinType,
    );
  }

  public post(actionUrl: any, request: any, options?: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    if (options) {
      return this.httpClient.post<any>(url, request, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.post<any>(url, request).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public login(actionUrl: any, request: any, options?: any): Observable<any> {
    const url = this.LOGIN_URL + actionUrl;
    if (options) {
      return this.httpClient.post<any>(url, request, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.post<any>(url, request).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public payment(actionUrl: any, request: any): Observable<any> {
    const url = this.PAYMENT_URL + actionUrl;
    // if (options) {
    //   return this.httpClient.post<any>(url, request, options).pipe(
    //       map((response) => {
    //         return response;
    //       }),
    //       catchError((error) => {
    //         return this.handleError(error);
    //       }),
    //   );
    // } else {
      return this.httpClient.post<any>(url, request).pipe(
          map((response) => {
            return response;
          }),
          catchError((error) => {
            return this.handleError(error);
          }),
      );
    // }
  }

  public logout(actionUrl: any, request?: any, options?: any): Observable<any> {
    const url = this.LOGIN_URL + actionUrl;
    if (options) {
      return this.httpClient.post<any>(url, request, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.post<any>(url, request).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public LoginGet(actionUrl: any, options?: any): Observable<any> {
    const url = this.LOGIN_URL + actionUrl;
    if (options) {
      return this.httpClient.get<any>(url, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.get<any>(url).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public put(actionUrl: any, request: any, options?: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    if (options) {
      return this.httpClient.put<any>(url, request, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.put<any>(url, request).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  public get_(actionUrl: any): Observable<any> {
    return this.get(actionUrl, { headers: utility.allHeader });
  }

  public post_(actionUrl: any, request: any): Observable<any> {
    return this.post(actionUrl, request, { headers: utility.allHeader });
  }

  public loginPost_(actionUrl: any, request: any): Observable<any> {
    return this.login(actionUrl, request, { headers: utility.allHeader });
  }

  public paymentPost_(actionUrl: any, request: any): Observable<any> {
    return this.payment(actionUrl, request);
  }

  public loginGet_(actionUrl: any, request: any): Observable<any> {
    return this.login(actionUrl, request, { headers: utility.allHeader });
  }

  public post_g(actionUrl: any): Observable<any> {
    return this.post(actionUrl, { headers: utility.allHeader });
  }

  public put_(actionUrl: any, request: any): Observable<any> {
    return this.put(actionUrl, request, { headers: utility.allHeader });
  }

  public postUser(
    actionUrl: any,
    request: any,
    options?: any,
  ): Observable<any> {
    const url = this.LOGIN_URL + actionUrl;
    if (options) {
      return this.httpClient.post<any>(url, request, options).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    } else {
      return this.httpClient.post<any>(url, request).pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => {
          return this.handleError(error);
        }),
      );
    }
  }

  handleError(error: HttpErrorResponse) {
    if (this.suppressAlertError) {
      return throwError(error);
    } else {
      let errorMessage = "Unknown error!";
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
  }
}
