import { Injectable } from "@angular/core";

const key = '@token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    hasToken(){
      return !!this.getToken()
    }

    setToken(token: string){
      window.localStorage.setItem(key, token)
    }

    getToken(){
      return window.localStorage.getItem(key)
    }

    removeToken(){
      window.localStorage.removeItem(key)
    }

    setUserName(userName:string){
      window.localStorage.setItem('@userName', userName)
    }
}
