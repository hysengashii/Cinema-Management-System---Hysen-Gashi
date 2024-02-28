import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies-service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: any;
  categories: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // Fetch movie details
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.movie = this.moviesService.getMovieById(parseInt(id, 10));
      }
    });

    // Fetch categories
    this.categories = this.moviesService.getCategories();
  }

  onSubmit() {
    this.moviesService.updateMovie(this.movie);
    this.router.navigate(['/movies/all-movies']); 
  }
}
