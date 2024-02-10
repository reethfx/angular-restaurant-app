import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private readonly USER_KEY = 'currentUser';
  
    login(username: string, password: string): boolean {
      const isAuthenticated = true;
  
      if (isAuthenticated) {
        const user = {
          username: username,
          password: password,
        };

        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      }
  
      return isAuthenticated;
    }
  
    logout(): void {
      localStorage.removeItem(this.USER_KEY);
    }
  
    getCurrentUser(): any {
      const userString = localStorage.getItem(this.USER_KEY);
      return userString ? JSON.parse(userString) : null;
    }
  }
  