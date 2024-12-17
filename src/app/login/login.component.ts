import { Component } from '@angular/core';
import {UserModel} from '../models/user.model';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new UserModel();
  constructor(private authService : AuthService , private router : Router){
  }
  onLoggedin(){
    //console.log(this.user);
    let isValidUser : Boolean = this.authService.SignIn(this.user);
    if(isValidUser)
      this.router.navigate(['upload'])
    else
    alert('User auth failed');
      
  }

}
