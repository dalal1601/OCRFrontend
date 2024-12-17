import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

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

  constructor() {}

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
  isCreate(): boolean {
    if(!this.roles)
      return false
    return (this.roles.indexOf('CREATE')>-1);

  }
}
