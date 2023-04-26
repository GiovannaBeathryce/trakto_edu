import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './components/login-page/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard  {

  constructor(
    private userService : UserService,
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.userLogged()){
        this.router.navigate(['home'])
        return false
      }
      return true;
  }


}
