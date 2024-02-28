import { RouterModule, Routes } from "@angular/router";
import { CreateCategorieComponent } from "./components/create-categorie/create-categorie.component";
import { AllCategoriesComponent } from "./components/all-categories/all-categories.component";
import { CategoriesComponent } from "./categories.component";
import { CategoriesDetailsComponent } from "./components/categories-details/categories-details.component";
import { EditCategorieComponent } from "./components/edit-categorie/edit-categorie.component";


const routes: Routes=[
  {
    path:'categories',component:CategoriesComponent,children:[
      {path:'all-categories',component:AllCategoriesComponent},
      {path:'create-categorie',component:CreateCategorieComponent},
      {path:'edit-categorie/:id',component:EditCategorieComponent},
      {path:'categorie-details/:id',component:CategoriesDetailsComponent}
    ]
  }
];

export const CategoriesRoutingModule = RouterModule.forChild(routes);
