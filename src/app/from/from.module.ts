import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';  //模板驱动表单需要用到的
import { ReactiveFormsModule } from '@angular/forms';  //响应式表单需要用到的
import { AccordionModule } from 'ngx-bootstrap';


import { FromListComponent } from './from-list/from-list.component';
import { FromAComponent } from './from-a/from-a.component';
import { FromBComponent } from  './from-b/from-b.component';
import { FromCComponent } from './from-c/from-c.component';
import { FormControlComponent } from './from-c/kuerc-form/form-control.component';
import { EqualValidator } from './from-b/kuerdirectives/kuer-validator.directive';

import { FromRoutes } from './from.routes';

//@NgModule主要给angular-cli查看用的
@NgModule({
  declarations: [  //声明模块；修改app.module.ts在@NgModule的declarations[]中添加相应的组件（导出的类）；声明本模块的内容
    FromListComponent,
    FromAComponent,
    FromBComponent,
    FromCComponent,
    FormControlComponent,
    EqualValidator
  ],
  imports: [  //引入或导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。比如导入CommonModule后就可以使用NgIf、NgFor等指令。
    CommonModule,
    AccordionModule,
    RouterModule.forChild(FromRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FromAComponent
  ],  //导出的组件
  providers: [],  //将服务导入到app.module.ts中，并在@NgModule的providers[]添加服务
  bootstrap: []  //启动模块，只有在根模块使用
})
export class FromModule {
}
