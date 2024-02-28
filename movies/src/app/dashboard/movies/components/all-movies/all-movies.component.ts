import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies-service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = this.moviesService.getAllMovies();
  }

  deleteMovie(id: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.moviesService.deleteMovie(id);
      this.loadMovies();
    }
  }
}
