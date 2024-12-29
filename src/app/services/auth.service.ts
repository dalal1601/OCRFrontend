import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { UserModel } from '../models/user.model';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private helper : JwtHelperService = new JwtHelperService();
  token! : string

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router : Router, private httpClient : HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  login(user : UserModel){
    return  this.httpClient.post<UserModel>('http://localhost:8080/login', user , {observe:'response'})
  }
  saveToken(jwt : string) : void {
    localStorage.setItem('jwt', jwt);
    this.token=jwt;
    this.isloggedIn=true;
    this.decodedJWT()

  }
  decodedJWT() : void {
    if(this.token!= undefined){
      const decodedToken = this.helper.decodeToken(this.token);
      this.roles=decodedToken.roles;
      this.loggedUser=decodedToken.sub;
    }
  }
  getToken() : string{
    return this.token;
  }


  hasRole(role: string): boolean {
    if (!this.roles) return false;
    return this.roles.includes(role);
  }

  logout(){
    this.loggedUser = undefined!;
    this.isloggedIn = false;
    this.roles = undefined!;
    this.token= undefined!;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);

  }
  setLoggedUser(login : string){
    this.loggedUser=login;
    this.isloggedIn=true;
  }
  loadToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('jwt')!;
      this.decodedJWT();
    }
  }
  isTokenExpired(): boolean {
    return this.helper.isTokenExpired(this.token);
  }

}
