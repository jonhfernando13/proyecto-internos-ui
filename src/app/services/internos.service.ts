import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interno } from '../models/interno';

@Injectable({
  providedIn: 'root'
})
export class InternosService {
  private apiUrl = 'tu-api-url';

  constructor(private http: HttpClient) { }

  getInternos(): Observable<Interno[]> {
    return this.http.get<Interno[]>(this.apiUrl);
  }

  getInternoById(id: string): Observable<Interno> {
    return this.http.get<Interno>(`${this.apiUrl}/${id}`);
  }

  createInterno(data: Partial<Interno>): Observable<Interno> {
    return this.http.post<Interno>(this.apiUrl, data);
  }

  updateInterno(id: string, data: Partial<Interno>): Observable<Interno> {
    return this.http.put<Interno>(`${this.apiUrl}/${id}`, data);
  }

  deleteInterno(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}