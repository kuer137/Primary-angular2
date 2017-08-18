import { Component, OnInit } from '@angular/core';

import { keuerType } from './fromType/site';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  urls = ['http://www.runoob.com/angularjs2/angularjs2-forms.html','http://www.runoob.com/angularjs2/angularjs2-user-input.html','http://www.runoob.com/angularjs2/angularjs2-displaying-data.html','http://www.runoob.com/angularjs2/angularjs2-architecture.html'];
  model = new keuerType(1,'kuer的表单',this.urls[0],10000);
  submitted = false;
  active = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(999999);
    this.submitted = true;
  }

   //完成后移除
  get returndata(){  //returndata(自命名)属于变量；用于返回这个模型的JSON形式
    return JSON.stringify(this.model);
  }

  //添加网站(清空原有的数据)
  // 我们给组件添加一个 active 标记，把它初始化为 true 。
  // 当我们添加一个新的网站时，它把 active 标记设置为 false ，
  // 然后通过一个快速的 setTimeout 函数迅速把它设置回 true 。
  addSide(){
    this.model = new keuerType(5,'','');
    //this.active = false;
    //setTimeout(() => this.active = true,0); //(暂时未发现其作用)
  }

}
