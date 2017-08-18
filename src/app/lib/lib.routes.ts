/**
 * Created by admin on 2017/7/6.
 */
import { AuthGuard } from './auto-guard';  //路哟守卫服务

import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { LayerComponent } from './layer/layer.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ChartsComponent } from './charts/charts.component';

export const libRoutes = [{
  path: '',
  component: NavComponent,
  canActivate:[AuthGuard],  //路由守卫
  children: [
    {
      path:'',
      redirectTo:'page/1',
      pathMatch:'full'
    },
    { path: 'page/:page', component: PageComponent },
    { path: 'layer', component: LayerComponent },
    { path: 'date', component: DatePickerComponent },
    { path: 'time', component: TimePickerComponent },
    { path: 'uploader', component: UploaderComponent },
    { path: 'charts', component: ChartsComponent },
  ]
}];
