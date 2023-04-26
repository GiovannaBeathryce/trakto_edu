import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenService } from './token.login.service';

@Injectable()

export class RequestInterceptor implements HttpInterceptor{

  constructor( private tokenService : TokenService){}

  intercept(
    req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> |
    HttpSentEvent | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>{
       const token = this.tokenService.getToken();
      if(token !== null ){
        const reqAuth = req.clone({
            setHeaders: {'Authorization' : `Bearer ${token}`}
          });
          return next.handle(reqAuth)
      }
      return next.handle(req)
     }

}
