import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private localStorageKey = 'movies';

  constructor() {
    this.initMovies();
  }

  initMovies() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  getMovies(): any[] {
    const movies = localStorage.getItem(this.localStorageKey);
    return movies ? JSON.parse(movies) : [];
  }

  getAllMovies(): any[] {
    return this.getMovies();
  }

  getMovieById(id: number): any {
    const movies = this.getMovies();
    return movies.find(movie => movie.id === id);
  }

  updateMovie(updatedMovie: any) {
    let movies = this.getMovies();
    const index = movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      movies[index] = updatedMovie;
      localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
    } else {
      throw new Error('Movie not found.');
    }
  }

  getCategories(): string[] {
    const categoriesString = localStorage.getItem('categories');
    if (categoriesString) {
      const categoriesArray = JSON.parse(categoriesString);
      return categoriesArray.map((category: any) => category.name);
    } else {
      return [];
    }
  }

  addMovie(movie: any) {
    const movies = this.getMovies();
    const isDuplicate = movies.some((m: any) => m.title === movie.title);

    if (isDuplicate) {
      throw new Error('A movie with this title already exists.');
    }


    movie.id = this.generateUniqueId();

    movies.push(movie);
    localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
  }

  private generateUniqueId(): number {
    return Date.now();
  }

  deleteMovie(id: number) {
    let movies = this.getMovies();
    movies = movies.filter(movie => movie.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
  }
}
