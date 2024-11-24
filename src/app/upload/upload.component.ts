import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Ensure this import is present
import { FormsModule } from '@angular/forms';  // If you are using forms
import { OcrService } from '../services/ocr.service';  // Import your service

@Component({
  selector: 'app-upload',
  standalone: true,  // Declare as standalone
  imports: [CommonModule, FormsModule, HttpClientModule],  // Add HttpClientModule to imports
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private ocrService: OcrService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.ocrService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log('OCR Result:', response);
        },
        error => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }
}
