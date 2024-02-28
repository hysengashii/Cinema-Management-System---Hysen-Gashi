import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private localStorageKeyMovies = 'movies';
  private localStorageKeyCategories = 'categories';

  constructor() {}

  getMovies(): any[] {
    const movies = localStorage.getItem(this.localStorageKeyMovies);
    return movies ? JSON.parse(movies) : [];
  }

  getCategories(): string[] {
    const categoriesString = localStorage.getItem(this.localStorageKeyCategories);
    return categoriesString ? JSON.parse(categoriesString) : [];
  }
}
