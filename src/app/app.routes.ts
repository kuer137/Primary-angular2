import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KuerUserComponent } from './kuer-user/kuer-user.component';
import { JqueryComponent } from './jquery/jquery.component';
import { FromtextComponent } from './fromtext/fromtext.component';
import { RxjsdemoComponent } from './rxjsdemo/rxjsdemo.component';
import { LoginComponent } from './login/login.component';  //登录页

export const appRoutes=[
  {  //首页
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"kuerUser",
    component:KuerUserComponent
  },
  {
    path:"rxjs",
    component:RxjsdemoComponent
  },
  {
    path:'jquery/:page/:id',
    component:JqueryComponent
  },
  {
    path:'route',
    loadChildren:'./route/route.module#RouteModule'
  },
  {
    path:'from',
    loadChildren:'./from/from.module#FromModule'
  },
  {
    path:'fromtext',
    component:FromtextComponent
  },
  {
    path:'angular',
    loadChildren:'./angularB/angular.module#AngularModule'
  },
  {
    path: 'lib',
    loadChildren: "./lib/lib.module#libModule"
  },
  {
    path:'login',
    component:LoginComponent
  },
];

