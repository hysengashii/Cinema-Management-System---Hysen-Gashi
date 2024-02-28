import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component'; // Import your home component
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoriesModule } from 'src/app/dashboard/categories/categories.module';
import { MoviesModule } from 'src/app/dashboard/movies/movies.module';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [HomeComponent] 
})
export class HomeModule { }
