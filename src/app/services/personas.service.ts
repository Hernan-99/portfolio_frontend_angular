import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personas } from '../models/personas';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = `${environment.apiURL}/persona`;
  constructor(private http: HttpClient) {}

  getDatos(): Observable<Personas> {
    return this.http.get<Personas>(`${this.URL}/detail/1`);
  }

  public detail(id: number): Observable<Personas> {
    return this.http.get<Personas>(`${this.URL}/detail/1`);
  }

  public update(id: number, persona: Personas): Observable<any> {
    return this.http.put<any>(`${this.URL}/update/1`, persona);
  }
}
