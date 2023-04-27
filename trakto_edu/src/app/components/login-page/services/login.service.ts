import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = "https://api.trakto.io/auth/signin"

  constructor(
    private http: HttpClient,
    private userService : UserService,
    private router : Router
    ) { }

  singIn(email:string, password:string):Observable<any>{
    return this.http.post<any>(this.API, {email, password}, {observe:'response'})
      .pipe(tap(res => {
        const authToken = res.body.access_token
        const username = res.body.firstname
        this.userService.setToken(authToken)
        this.userService.setName(username)
        this.router.navigate(['home'])

      }))
  }

}
