import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { flyIn } from '../animations/fly-in';  //动画

import { Kueruser } from './model/user-model';
import { KuerLoginService } from './service/login.service';  //引入服务

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    flyIn
  ]
})
export class LoginComponent implements OnInit {
  public user:Kueruser = new Kueruser();


  constructor(
    public LoginService: KuerLoginService
  ) { }

  ngOnInit() {
  }

  doLogin(){
    console.log('login');
    //调用登录服务
    this.LoginService.logins(this.user);
  }

}
