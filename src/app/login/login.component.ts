import { Component } from '@angular/core';
import {UserModel} from '../models/user.model';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new UserModel();
  error: number = 0;
  constructor(private authService : AuthService , private router : Router){
  }
  onLoggedin(){
    this.authService.login(this.user).subscribe({
      next: (data ) : void =>{
        let jwtToken = data.headers.get("Authorization")!;
        this.authService.saveToken(jwtToken);
        this.router.navigate(['/upload']);
      },
      error:(error: any)=> {
        this.error = 1;
      }
    })


  }

}
