import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {

    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  addMovie(movie: any): void {
    this.movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  editMovie(index: number, updatedMovie: any): void {
    this.movies[index] = updatedMovie;
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  viewMovieDetails(index: number): void {
    const selectedMovie = this.movies[index];
    this.router.navigate(['/movie-details', index], { state: { movie: selectedMovie } });
  }

}
