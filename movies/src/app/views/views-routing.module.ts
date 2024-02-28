import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";


const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    ]
  }
];

export const ViewsRoutingModule = RouterModule.forChild(routes);
