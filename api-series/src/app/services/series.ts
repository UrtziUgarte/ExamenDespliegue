import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  create(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
