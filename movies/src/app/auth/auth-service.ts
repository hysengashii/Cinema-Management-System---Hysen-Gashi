import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private validCredentials = [
    { email: 'user1@example.com', password: 'password1', username: 'user1' },
    { email: 'user2@example.com', password: 'password2', username: 'user2' },
    { email: 'admin@gmail.com', password: '123123', username: 'admin' },
  ];

  login(credentials: { email: string; password: string }): Observable<boolean> {
    const user = this.getUser(credentials.email);
    if (user) {
      const isValid = this.isValidCredentials(credentials);
      if (isValid) {
        localStorage.setItem('username', user.username); // Store username in local storage
      }
      return of(isValid);
    } else {
      return of(false); // Return false if user is not found
    }
  }

  private isValidCredentials(credentials: { email: string; password: string }): boolean {
    return this.validCredentials.some(
      (validCreds) => validCreds.email === credentials.email && validCreds.password === credentials.password
    );
  }

  private getUser(email: string) {
    return this.validCredentials.find((user) => user.email === email);
  }


  // Method to get the list of usernames
  getUsers(): Observable<string[]> {
    const usernames = this.validCredentials.map(user => user.username);
    return of(usernames).pipe(delay(1000)); // Simulating delay with delay operator
  }
}
