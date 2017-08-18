import { FromListComponent } from './from-list/from-list.component';
import { FromAComponent } from './from-a/from-a.component';
import { FromBComponent } from  './from-b/from-b.component';
import { FromCComponent } from './from-c/from-c.component';


export const FromRoutes=[
  {
    path:"",
    component:FromListComponent,
    //canActivate路由守卫，判断改用户有没权限访问，
    // AuthGuard是我们自己写的服务，判断权限
    children:[
      {
        path:'',
        redirectTo:'one',
        pathMatch:'full'
      },
      {
        path:'one',
        component:FromAComponent
      },
      {
        path:'two',
        component:FromBComponent
      },
      {
        path:'three',
        component:FromCComponent
      }
    ]
  }
];
