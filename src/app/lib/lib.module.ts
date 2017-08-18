/**
 * Created by admin on 2017/7/6.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { libRoutes } from './lib.routes';
import { AuthGuard } from './auto-guard';   //路由守卫

import { PaginationModule } from 'ngx-bootstrap';  //分页组件ng2-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   //ngBmodule组件
import { FormsModule } from '@angular/forms';  //agModel需要引入
import { FileUploadModule } from 'ng2-file-upload';  //上传组件
import { ChartsModule as Ng2Charts } from 'ng2-charts';  //图表组件

import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { LayerComponent } from './layer/layer.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ChartsComponent } from './charts/charts.component';
import { TimePickerComponent } from './time-picker/time-picker.component';


@NgModule({
  declarations: [
    PageComponent,
    NavComponent,
    LayerComponent,
    DatePickerComponent,
    UploaderComponent,
    ChartsComponent,
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(libRoutes),
    PaginationModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    FileUploadModule,
    Ng2Charts
  ],
  providers: [  //登录服务
    AuthGuard
  ]
})
export class libModule { }
