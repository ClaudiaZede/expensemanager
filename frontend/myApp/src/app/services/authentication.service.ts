import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;
  users: User[];
  router: Router;

  constructor(private apiService: ApiService, router: Router) {
    this.router = router;
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  login(values: any) {
    for (const user of this.users) {
      if (user.userEmail === values.userEmail) {
        this.user = user;
      }
    }
    if (values.userEmail === this.user.userEmail && values.userPassword === this.user.userPassword && this.user.userType === 'commercial') {
      this.user.connected = true;
    } else {
      throw new Error('Auth failed.');
    }
  }

  logout() {
    this.user.connected = false;
  }
}
