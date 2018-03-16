import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url.indexOf("generateotp") >= 0 || req.url.indexOf("login") >= 0);

    if ((req.url.indexOf("generateotp")>= 0) || req.url.indexOf("login")>= 0) {
      console.log("no token")
      const authreq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });

      return next.handle(authreq);
    }

    else {
      console.log("in token")

      console.log(localStorage.getItem("token"))

      const authreq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token")
        }
      });

      return next.handle(authreq);

    }
  }


}