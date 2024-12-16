import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiURL} from '../config';

const httpOptions : {headers: HttpHeaders} = {
  headers : new HttpHeaders({
    'content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'  // This ensures the service is available globally
})
export class OcrService {
  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    // Replace with your backend endpoint
    return this.http.post(apiURL+'/upload', formData);
  }

}
