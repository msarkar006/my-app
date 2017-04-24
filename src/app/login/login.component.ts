import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ["",Validators.required],
    password:["",Validators.required]

  });

  constructor(public fb: FormBuilder) {}

  

  doLogin(event)
  {
    console.log(event);
    console.log(this.loginForm.value);
     let email = this.loginForm.controls.email.value;
     let password = this.loginForm.controls.password.value;
     console.log("Email:"+email);
     console.log("Password:"+password);



  }



  ngOnInit() {
  }

}
