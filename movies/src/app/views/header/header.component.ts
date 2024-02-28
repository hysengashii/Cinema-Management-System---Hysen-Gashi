import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  isLoggedIn(): boolean {
    // Logic to check if the user is logged in, for example, checking if there is a user in local storage
    return localStorage.getItem('username') !== null;
  }

  logout(): void {
    // Logic to log the user out, for example, removing user information from local storage
    localStorage.removeItem('username');
  }
}
