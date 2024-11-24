import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add if you're using common directives like *ngIf, *ngFor

@Component({
  selector: 'app-ocr-result',
  standalone: true, // Declare it as standalone
  imports: [CommonModule], // Import CommonModule if needed
  templateUrl: './ocr-result.component.html',
  styleUrls: ['./ocr-result.component.css']
})
export class OcrResultComponent implements OnInit {
  ocrData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch OCR data from the route or a shared service
    this.route.queryParams.subscribe(params => {
      this.ocrData = params['data'];
    });
  }
}
