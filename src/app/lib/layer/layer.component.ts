import { Component, OnInit } from '@angular/core';

declare var layer:any;   //对该组件进行实例化；或者declare const xxx: any //88
import * as $ from 'jquery';
//import * as layer from 'layer';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".jquer-appeng").html("我是jquery的append出来的内容");
  }

  alert() {
    layer.alert('hahahaha');
  }
  confirm() {
    layer.confirm('钟钟很帅？', {
      btn: ['是的', '不是']
    }, () => {
      layer.msg('你说的是实话。')
    }, () => {
      layer.msg('请说实话', {
        time: 2000,
        btn: ['明白了', '不明白']
      })
    })
  }
  msg() {
    layer.msg('玩命提示中');
  }




}
