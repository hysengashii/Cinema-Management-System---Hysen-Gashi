import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MoviesComponent } from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    MoviesComponent,
    AllMoviesComponent,
    CreateMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class MoviesModule { }
