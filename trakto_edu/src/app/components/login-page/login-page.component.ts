import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  response:object = {}
  data!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service : LoginService,
    private router : Router

  ){}

  ngOnInit(): void {
    this.data = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', [Validators.required]]
    })
  }

  login(){
    const email = this.data.get('email')?.value;
    const password = this.data.get('password')?.value;

    this.service.singIn(email,password).subscribe()
  }


}
