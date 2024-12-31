import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { AuthService } from './auth.service';

const httpOptions: { headers: HttpHeaders } = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root', // Ensures the service is available globally
})
export class OcrService {
  jwt: string;
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    // Initialize jwt and httpHeaders in the constructor
    this.jwt = 'Bearer ' + this.authService.getToken();
    this.httpHeaders = new HttpHeaders({ Authorization: this.jwt });
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    console.log('JWT Token:', this.jwt);/////////////////////////////////////


    const httpHeaders = new HttpHeaders({
      'Authorization': this.jwt,
      'Content-Type': 'application/json'
    });

    // Replace with your backend endpoint
    return this.http.post(apiURL + '/upload', formData, { headers: this.httpHeaders });
  }
}
