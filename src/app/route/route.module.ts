import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AccordionModule } from 'ngx-bootstrap';


import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from  './route-two/route-two.component';

import { AuthGuard } from './auth-guard';
import { RouteRoutes } from './route.routes';

//@NgModule主要给angular-cli查看用的
@NgModule({
  declarations: [  //声明模块；修改app.module.ts在@NgModule的declarations[]中添加相应的组件（导出的类）；声明本模块的内容
    RouteOneComponent,
    RouteTwoComponent
  ],
  imports: [  //引入或导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。比如导入CommonModule后就可以使用NgIf、NgFor等指令。
    CommonModule,
    AccordionModule,
    RouterModule.forChild(RouteRoutes)
  ],
  exports:[
    RouteOneComponent
  ],  //导出的组件
  providers: [
    AuthGuard
  ],  //将服务导入到app.module.ts中，并在@NgModule的providers[]添加服务
  bootstrap: []  //启动模块，只有在根模块使用
})
export class RouteModule {
}
