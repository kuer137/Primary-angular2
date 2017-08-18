import { AngularlistComponent } from './angularlist/angularlist.component';
import { AngularBaseComponent } from './angular-base/angular-base.component';
import { TextComponent } from './text/text.component';

export const AngularRoutes=[
  {
    path:"",
    component:AngularlistComponent,
    //canActivate路由守卫，判断改用户有没权限访问，
    // AuthGuard是我们自己写的服务，判断权限
    children:[
      {
        path:'',
        redirectTo:'html',
        pathMatch:'full'
      },
      {
        path:'html',
        component:AngularBaseComponent
      },
      {
        path:'text',
        component:TextComponent
      }

    ]
  }
];
