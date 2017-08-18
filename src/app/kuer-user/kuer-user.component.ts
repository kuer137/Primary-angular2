import { Component,OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';  //动画

@Component({
  selector: 'app-kuer-user',
  templateUrl: './kuer-user.component.html',
  styleUrls: ['./kuer-user.component.scss'],
  animations:[
    flyIn
  ]
})


export class KuerUserComponent implements OnInit {
  public searchText:string;  //声明变量

  ngOnInit() {
    console.log('立即执行onInit');
  }

  constructor()  //constructor(构造函数) 是类中的特殊方法，主要用来做初始化操作，在进行类实例化操作时，会被自动调用
  {
    console.log('初始化执行constructor');
  }


  //事件绑定  public为ts其中一个声明方法的方式
  public searchange($event):void{
    alert(this.searchText)
  }

  dofollow(){
    alert("kuer-user的父组件监听子组件的事件...")
  }

}
