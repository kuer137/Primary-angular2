import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-changdata',
  templateUrl: './changdata.component.html',
  styleUrls: ['./changdata.component.scss']
})
export class ChangdataComponent implements OnInit {

  @Input()
  public kuerTitle:string;
  @Output()
  public followaaaa = new EventEmitter<string>();  //事件监听
  public followBtnClick(){
    this.followaaaa.emit("followaaaa");  //执行在父组件中定义的组件follow操作的事件
  }


  constructor() {
    //构造组件的时候，@Input的属性还没有值
    console.log(this.kuerTitle,11111);  //结果  undefined 11111
  }

  ngOnInit() {
    //组件初始化完成之后，panelTitle才会有值
    console.log(this.kuerTitle,2222);  //结果   我在app.component.html哩 2222
  }

}
