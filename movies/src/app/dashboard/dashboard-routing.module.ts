import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
      { path: '', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
    ]
  }
];

export const DashboardRoutingModule = RouterModule.forChild(routes);
