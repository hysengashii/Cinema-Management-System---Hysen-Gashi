import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../movies-service';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movie: any = {};
  categories: string[] = [];

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.moviesService.getCategories();
  }

  onSubmit() {
    try {
      this.moviesService.addMovie(this.movie);
      alert('Movie added successfully!');
      this.router.navigate(['/movies/all-movies']);
    } catch (error) {
      alert((error as any).message);
    }
  }
}
