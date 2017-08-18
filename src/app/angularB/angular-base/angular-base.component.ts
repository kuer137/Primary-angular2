import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-base',
  templateUrl: './angular-base.component.html',
  styleUrls: ['./angular-base.component.scss']
})
export class AngularBaseComponent implements OnInit {
  message = '';
  message2 = '';
  messages3 = '';

  constructor() { }

  ngOnInit() {
  }

  html1(){
    this.message = "我是固定字"
  }

  //html2(event:any){   //根数据双休绑定一致
  //  this.message2 = event.target.value;
  //}

  html2(event:KeyboardEvent){
    this.message2 += (<HTMLInputElement>event.target).value + '|'
  }

  html3(value3:string){
    this.messages3 += value3 + '|';
  }

}
