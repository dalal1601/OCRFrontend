import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: UserModel[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'user', password: '123', roles: ['USER'] },
  ];
  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router : Router) {}

  SignIn(user: UserModel): boolean {
    let validUser: boolean = false;

    this.users.forEach((u: UserModel) => {
      if (user.username === u.username && user.password === u.password) {
        validUser = true;
        this.loggedUser = u.username!;
        this.isloggedIn = true;
        this.roles = u.roles!;

        // Store in localStorage
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn)); // Use a separate key
      }
    });

    return validUser;
  }

  hasRole(role: string): boolean {
    if (!this.roles) return false;
    return this.roles.includes(role);
  }

  logout(){
    this.loggedUser = undefined!;
    this.isloggedIn = false;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
    this.router.navigate(['login']);

  }
}
