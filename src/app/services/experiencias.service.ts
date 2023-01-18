import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencias } from '../models/experiencias';

@Injectable({
  providedIn: 'root',
})
export class ExperienciasService {
  URL = `${environment.apiURL}/experiencia`;

  constructor(private http: HttpClient) {}

  public getAllExp(): Observable<Experiencias[]> {
    return this.http.get<Experiencias[]>(`${this.URL}/allexp`);
  }

  public getDetailExp(id: number): Observable<Experiencias> {
    return this.http.get<Experiencias>(`${this.URL}/detailexp/${id}`);
  }

  public postExp(experiencia: Experiencias): Observable<any> {
    return this.http.post<any>(`${this.URL}/createexp`, experiencia);
  }

  public putExp(id: number, experiencia: Experiencias): Observable<any> {
    return this.http.put<any>(`${this.URL}/updateexp/${id}`, experiencia);
  }

  public delExp(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/deleteexp/${id}`);
  }
}
