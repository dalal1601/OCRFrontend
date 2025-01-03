import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: UserModel = new UserModel();
  error: string = '';  // To hold error message
  success: boolean = false;  // To track successful registration

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.user).subscribe({
      next: (data) => {
        this.success = true;  // Set success to true on successful registration
        this.error = '';  // Clear the error message
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);  // Redirect to login page
      },
      error: (err) => {
        console.error('Registration error:', err);
        this.success = false;  // Make sure success is false in case of an error
        this.error = err.error || 'Registration failed. Please try again.';  // Capture error message
      }
    });
  }

}
