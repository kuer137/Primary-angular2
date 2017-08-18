import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Kueruser } from '../model/user-model';

@Injectable()  //把服务实例化，当调用http的时候需要用到，否则报错
export class KuerLoginService {
  public userLoginURL = 'kuer-data/user-register-mock.json';
  public locatiUser:Subject<Kueruser> = new Subject<Kueruser>();

  constructor(
    public router: Router,
    public http:Http) { }

    
  public get currentUser():Observable<Kueruser>{
    //subscribe(订阅)来监听 locatiUser这个可观察对象
    return this.locatiUser.asObservable();
  }

  public logins(users:Kueruser){
    this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              if(users.userName!="kuer"){
                localStorage.setItem("kuerUser",JSON.stringify(user));
                //可观察对象 locatiUser 并赋值
                this.locatiUser.next(Object.assign({},user));
              }else{
                if(users.password!='123456'){
                  alert("登录密码错误");
                }else{
                  localStorage.setItem("kuerUser",JSON.stringify(users));
                  //可观察对象 locatiUser 并赋值
                  this.locatiUser.next(Object.assign({},users));  //assign是js方法：复制对象
                  this.router.navigateByUrl("lib");
                }
              }
              console.log("用户输入的名称："+users.userName);
            })
            .subscribe(
                data => {
                    console.log("login success>成功返回的数据"+data);
                },
                error => {
                    console.error(error);
                }
            );

    console.log(users);
    
  }

  public logout():void{
    console.log('退出成功!');
    localStorage.removeItem("kuerUser");
    //可观察对象 locatiUser 并赋值
    this.locatiUser.next(Object.assign({}));
    this.router.navigateByUrl("login");
  }

}
