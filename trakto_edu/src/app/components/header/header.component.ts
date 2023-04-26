import { Router } from '@angular/router';
import { UserService } from './../login-page/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentDate = new Date()
  username = ''
  initialName = ''

  constructor(
    private user : UserService,
    private router : Router
    ){

    const hasUser = user.getUsername()
    this.username = hasUser!
    this.getInitial()
  }

  getInitial(){
    if(this.username !== null){
      this.initialName = this.username.slice(0,1).toLocaleUpperCase()
    }
  }

  logout(){
    this.user.logout()
    this.username = ''
    this.router.navigate(['login'])
  }
}
