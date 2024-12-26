import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './services/auth.service';  // Import HttpClient directly if needed

@Component({
  selector: 'app-root',
  standalone: true,  // This makes the component standalone
  imports: [CommonModule, RouterModule],  // Use the necessary imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCRFrontend';

  //constructor(private http: HttpClient) { }  // Inject HttpClient service here
  constructor(public  authService : AuthService) {
  }
  openFileSelector(): void {
    const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click(); // Open the file input dialog
    } else {
      console.error('File input element not found');
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      console.log('Selected file:', file);
      // Handle file upload logic here
    }
  }
  logout(){
    this.authService.logout();
  }
}
