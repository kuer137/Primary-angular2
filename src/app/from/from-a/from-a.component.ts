import { Component, OnInit } from '@angular/core';

import { user } from '../model/kuer-model';  //引入模块公用变量

@Component({
  selector: 'app-from-a',
  templateUrl: './from-a.component.html',
  styleUrls: ['./from-a.component.scss']
})
export class FromAComponent implements OnInit {
  public kuer:string = 'kuer哦';
  public user:user =new user();
  constructor() { }

  ngOnInit() {
    console.log(this.user)
  }

}
