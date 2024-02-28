import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesModule } from './dashboard/movies/movies.module';
import { CategoriesModule } from './dashboard/categories/categories.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,

  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    CategoriesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
