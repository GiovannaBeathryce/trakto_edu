import { TokenService } from './token.login.service';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(
    private tokenService : TokenService,
  ){
    this.tokenService.hasToken()
  }

    setToken(token:string){
      this.tokenService.setToken(token)
    }

    setName(userName:string){
      this.tokenService.setUserName(userName)
    }

    getUsername(){
      return window.localStorage.getItem('@userName')
    }

    userLogged(){
      return this.tokenService.hasToken();
    }

    logout(){
      this.tokenService.removeToken()
      window.localStorage.removeItem('@userName')
    }
}
