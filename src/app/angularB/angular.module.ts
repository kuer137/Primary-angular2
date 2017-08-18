/**
 * Created by admin on 2017/7/3.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AngularRoutes } from './angular.routes';  //引入路由
import { FormsModule } from '@angular/forms';  //模板驱动表单需要用到的；如要用到[(ngModel)]的时候

//模块组件
import { AngularlistComponent } from './angularlist/angularlist.component';
import { AngularBaseComponent } from './angular-base/angular-base.component';
import { TextComponent } from './text/text.component';



@NgModule({
  declarations: [  //声明模块；修改app.module.ts在@NgModule的declarations[]中添加相应的组件（导出的类）；声明本模块的内容
    AngularlistComponent,
    AngularBaseComponent,
    TextComponent
  ],
  imports: [  //引入或导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。比如导入CommonModule后就可以使用NgIf、NgFor等指令。
    CommonModule,
    RouterModule.forChild(AngularRoutes),
    FormsModule
  ],
  exports:[],  //导出的组件
  providers: [],  //将服务导入到app.module.ts中，并在@NgModule的providers[]添加服务
  bootstrap: []  //启动模块，只有在根模块使用
})
export class AngularModule {

}
