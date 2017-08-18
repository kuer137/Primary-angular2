import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Http,URLSearchParams } from '@angular/http';  //请求列表数据,URLSearchParams设置请求参数

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public currentPage:number = 1;  //当前页
  public currentAll:number = 0;  //总页数
  public itemsPerPage:number = 5;  //每页显示调试
  public getListUrl = 'app/lib/data/pagelist.json';  //请求地址
  public pageLists:Array<any>;  //数据类型接口
  ajaxType:number = 2;  //1为一次输出所有数据，2为输出当前页数据

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public http:Http   //请求数据
  ) {
  }

  ngOnInit() {

    // 这里可以从路由里面获取URL参数.
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      //页面一开始加载数据（此处模拟数据）
      this.getData(this.currentPage)
    });

    //数据的处理


  }

  //页面一开始加载数据（此处模拟数据）
  public getData(page:number){
    let params = new URLSearchParams();
    params.set('page',String(page));
    this.http.get(this.getListUrl,{search:params})
              .subscribe(response => {
                console.log(response.json(),'请求成功');
                this.dataSlice(response.json());  //数据赋值
              },response =>{
                console.log('fail')
              },() =>{
                console.log('success final')
              });
  }
  //数据处理(每次都把所有数据请求过来了，再认为的进行分页数据筛选出来进来渲染)
  dataSlice(data){
    this.currentAll = data.totalItem;
    if(this.ajaxType==1){  //如果每次请求只是当前页所有数据的时候，像我们现在这样，数据全部展示
      this.pageLists = data.data;
    }else{
      let dataStart = (this.currentPage-1)*this.itemsPerPage;
      let dataEnd = (this.currentPage)*this.itemsPerPage;
      this.pageLists = data["data"].slice(dataStart,dataEnd>this.currentAll?this.currentAll:dataEnd);  //当前页数据
    }

  }

  public pageChanged(event:any):void {
    //每当页数改变的时候跳转路由（这样即使刷新也不会回到第一页，否则刷新会回到第一页）
    this.router.navigateByUrl("lib/page/"+event.page);  //“lib/page/”需要定位到模块名
  }

}
