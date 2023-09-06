import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {

private apiUrl = 'http://localhost:8080/api';

constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }
}

