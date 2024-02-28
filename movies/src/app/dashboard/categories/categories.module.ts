import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';
import { CreateCategorieComponent } from './components/create-categorie/create-categorie.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { CategoriesRoutingModule } from './categories-routing.module';



@NgModule({
  declarations: [
    CategoriesComponent,
    AllCategoriesComponent,
    CreateCategorieComponent,
    EditCategorieComponent,
    CategoriesDetailsComponent,
    CreateCategorieComponent,
    EditCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CategoriesModule { }
