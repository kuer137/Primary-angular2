import { BrowserModule } from '@angular/platform-browser';  //imports:导入其他模块，就是要使用其他模块功能，必须要导入
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule , Http } from '@angular/http';   //字组件要用到http的，这里都要引入HttpModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  //动画
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';  //国际化
import { ToastModule } from 'ng2-toastr/ng2-toastr';   //弹窗组件

import { KuerLoginService } from './login/service/login.service';

import { AppComponent } from './app.component';
import { KuerUserComponent } from './kuer-user/kuer-user.component';
import { ChangdataComponent } from './changdata/changdata.component';
import { filterNumber } from './filter/filterNumber';
import { JqueryComponent } from './jquery/jquery.component';  //筛选管道
import {appRoutes} from './app.routes';
import { FromtextComponent } from './fromtext/fromtext.component';
import { RxjsdemoComponent } from './rxjsdemo/rxjsdemo.component';
import { LoginComponent } from './login/login.component';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');  //国际化配置文件
}

//@NgModule主要给angular-cli查看用的
@NgModule({
  declarations: [  //装饰器；声明模块；修改app.module.ts在@NgModule的declarations[]中添加相应的组件（导出的类）；声明本模块的内容
    AppComponent,
    KuerUserComponent,
    ChangdataComponent,
    filterNumber,
    JqueryComponent,
    FromtextComponent,
    RxjsdemoComponent,
    LoginComponent
  ],
  imports: [  //引入或导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。比如导入CommonModule后就可以使用NgIf、NgFor等指令。
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({  //国际化
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot()  //弹窗组件
  ],
  exports:[filterNumber],  //导出的组件
  providers: [
    KuerLoginService  //登录服务
  ],  //将服务导入到app.module.ts中，并在@NgModule的providers[]添加服务
  bootstrap: [AppComponent]  //启动模块，只有在根模块使用
})
export class AppModule {

}  //用来控制将哪些内部成员暴露给外部使用。
// 导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。
// 除非导入的这个module把它内部导入的module写到exports中。

