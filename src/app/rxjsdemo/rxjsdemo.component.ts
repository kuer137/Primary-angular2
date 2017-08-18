import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';  //toPromise需要用到

import 'rxjs/add/operator/finally';  //http请求，不管成功或失败都会走的回调
//错误处理 throw catch
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//键盘事件；可以监听的主题
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-rxjsdemo',
  templateUrl: './rxjsdemo.component.html',
  styleUrls: ['./rxjsdemo.component.scss']
})
export class RxjsdemoComponent implements OnInit {
  public indexUrl = 'kuer-data/user-register-mock.json';
  public outUrl = 'www.baidu.com';
  public searchText:Subject<string> = new Subject<string>();  //键盘监听事件可以监听的主题
  public keyword:string;

  constructor(public http:Http) {

    //以下是Promise的写法
    let promise = new Promise(resolve =>{
      setTimeout(()=>{
        resolve('这里是promise的数据');
      },5000)
    });
    promise.then(value => document.getElementById("promise").innerHTML = value.toString());

    //以下是Observable（可观察对象）的写法;subscribe(订阅)来监听
    let kuerData$ = new Observable(observer => {
      let timeout = setTimeout(() =>{
        observer.next('这里是observable的数据');
      },5000);
      return () => {
        clearTimeout(timeout);
      }
    });
    let kuerdisposable = kuerData$.subscribe(value => document.getElementById("observable").innerHTML = value.toString())

    //【第一个核心不同点】：observable是可以中途取消的，二promist一旦触发不可取消；
    setTimeout(() =>{
      kuerdisposable.unsubscribe();
    },2000);

    //【第二个核心不同点】：ovservable可以持续发射很多值，二promise只能发送一个值；
    let kuerData2 = new Observable(observer => {
      let count = 0;
      let interval = setInterval(() => {
        observer.next(count++);
      },1000);
      return () => {
        clearInterval(interval);
      }
    });
    kuerData2.subscribe(value => document.getElementById("observable1").innerHTML = value.toString());

  }

  //这里的http请求同angular1一样
  ngOnInit() {
    this.http.get(this.indexUrl)
      .toPromise().then((response) => {
      console.log(response.json());
    });

    //搜索框键盘事件监听
    this.searchText
        .debounceTime(500)  //防抖动，在500毫秒内没新的键盘事件的时候才触发
        .distinctUntilChanged()   //值改变了才触发
        .subscribe(keyword => {
          console.log(this.keyword);
        })
  }

  test(){
    let data = JSON.stringify({
      name:'kuer'
    });
    this.http.post(this.indexUrl,data)
      .toPromise().then((response) => {
      console.log(response.json());
    });
  }

  //测试rxjs
  text2(){
    this.http.get(this.indexUrl)
            .finally(() => {   //不管 success or error 最后都会跑这个
              console.log('finally')
            }).subscribe(response => {
              console.log(response.json())
            },response =>{
              console.log('fail')
            },() =>{
              console.log('success final')
            });
    //result顺序 :
    //success -> success final -> finally
    //fail -> finally
  }

  text3(){
    this.http.post(this.outUrl,'dfs:sdfkj')  //post比get多了数据
            .map(r => r.json())
            .catch((r) => {
              if('1'=='1'){
                console.log(1);
                return null;  //catch了在返回真确
              }else{
                return Observable.throw('error');  //catch了继续返回错误
              }
            })
            .subscribe(
              r => console.log(r),
              r => {console.log('fail')}
            );
  }

  //键盘触发事件
  public searchChanged($event):void{
    this.searchText.next(this.keyword);
  }

}
