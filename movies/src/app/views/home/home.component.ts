import { Component, OnInit } from '@angular/core';
import { HomeService } from './home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedMovie: any;
  movieDetailsModal: boolean = false;
  movies: any[] = [];
  categories: string[] = [];
  currentPage = 1;
  moviesPerPage = 6;
  searchQuery: string = '';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.loadCategories();
    this.currentPage = +(localStorage.getItem('currentPage') || '1');
  }

  loadMovies(): void {
    this.movies = this.homeService.getMovies();
  }

  loadCategories(): void {
    this.categories = this.homeService.getCategories();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    localStorage.setItem('currentPage', pageNumber.toString());
  }

  get totalPages(): number[] {
    const totalMovies = this.movies.length;
    const pageCount = Math.ceil(totalMovies / this.moviesPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  getPaginatedMovies(): any[] {
    const startIndex = (this.currentPage - 1) * this.moviesPerPage;
    return this.movies.slice(startIndex, startIndex + this.moviesPerPage);
  }

  filteredMovies(): any[] {
    if (!this.searchQuery) return this.getPaginatedMovies();
    const query = this.searchQuery.toLowerCase().trim();
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query) || movie.categorie.toLowerCase().includes(query)
    );
  }

  openMovieDetailsModal(movie: any) {
    this.selectedMovie = movie;
    this.movieDetailsModal = true;
  }

  closeMovieDetailsModal() {
    this.movieDetailsModal = false;
  }
}
