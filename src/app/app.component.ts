import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';  //国际化

import { Kueruser } from './login/model/user-model';
import { KuerLoginService } from './login/service/login.service';  //引入服务
import 'rxjs/add/operator/merge';

@Component({    //我们使用@Component装饰器创建元数据。
  selector: 'app-list', // 在元数据中，我们指定 选择器（selector）的名字，用以标识此组件的元素。
  templateUrl: './app.component.html', // 指定 模板地址（templateUrl:xx.html）或 模板（template:[``]）以及
  styleUrls: ['./app.component.css']  // 样式地址（styleUrl:xx.css）或 样式（style:[``]）。
})
export class AppComponent {  // 然后，我们导出这个 类（export class 类名），以便其它组件可以使用它.
  welcome = 'Welcome to my first Demo --kuer';
  dates = new Date();

  //获取用户接口
  public currentUser: Kueruser;



  constructor(
    public translate: TranslateService,
    public LoginService: KuerLoginService
  ){}

  ngOnInit(){

    //时间
    window.setInterval(
      ()=>this.dates=new Date()
      ,1000);

    //国际化
    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();  //检查当前浏览器的语言版本
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');  //检测到好，加载对应的版本的内容




    //判断是否已经登录
    this.currentUser = JSON.parse(localStorage.getItem("kuerUser"));
    console.log(this.currentUser,'登录信息');
    //subscribe(订阅)来监听  可观察对象（locatiUser）
    this.LoginService.currentUser
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data,666888)
        },
        error => console.error(error)
      );



  }

  dofollowb(){
    alert("app的父组件监听子组件的事件...")
  }

  public doLogout(): void {
    //调用登录服务
    this.LoginService.logout();
  }

}

