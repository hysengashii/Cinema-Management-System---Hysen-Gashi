import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (!username) {
      this.router.navigateByUrl('/home');
    }
  }

  goBack() {
    this.router.navigateByUrl('/categories/all-categories');
  }

  goBck() {
    this.router.navigateByUrl('/movies/all-movies');
  }

  isEditCategorieOrCategorieDetailsPage(): boolean {
    const url = this.router.url;
    return url.includes('/categories/edit-categorie') || url.includes('/categories/categories-details');
  }

  isEditMovieOrMovieDetailsPage(): boolean {
    const url = this.router.url;
    return url.includes('/movies/edit-movie') || url.includes('/movies/movie-details');
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/home');
  }
}
