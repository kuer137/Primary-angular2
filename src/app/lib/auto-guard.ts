//路由守卫
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Kueruser } from '../login/model/user-model';  //登录用户接口


@Injectable()
export class AuthGuard implements CanActivate {

  //获取用户接口
  public currentUser: Kueruser;

  constructor(
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    //判断是否已经登录
    this.currentUser = JSON.parse(localStorage.getItem("kuerUser"));

    console.log("需要登录账号：kuer；密码：123456的账号才能进入");
    if(this.currentUser==null){
      alert("请先登录");
      this.router.navigateByUrl("login");
      return false;
    }else{
      if(this.currentUser.userName=='kuer' && this.currentUser.password=='123456'){
        return true
      }else{
        alert("没有权限，请登录kuer账号");
        this.router.navigateByUrl("login");
        return false;
      }
    }
  }
}
