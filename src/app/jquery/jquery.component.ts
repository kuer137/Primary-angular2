import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  //路由带参数

import * as $ from 'jquery';  //引入jquery

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss']
})
export class JqueryComponent implements OnInit {

  constructor(public router: Router,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      //获取路由上的参数
      params => { console.log(params) }
    );

    //使用jquery
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
    });

  }

}
