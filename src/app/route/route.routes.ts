import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from  './route-two/route-two.component';

import { AuthGuard } from './auth-guard';

export const RouteRoutes=[
  {
    path:"",
    component:RouteOneComponent,
    canActivate: [AuthGuard],
    //canActivate路由守卫，判断改用户有没权限访问，
    // AuthGuard是我们自己写的服务，判断权限
    children:[
      {
        path:'',
        redirectTo:'two',
        pathMatch:'full'
      },
      {
        path:'two',
        component:RouteTwoComponent
      }
    ]
  }
];
