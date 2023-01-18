import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educaciones } from '../models/educaciones';

@Injectable({
  providedIn: 'root',
})
export class EducacionesService {
  URL = `${environment.apiURL}/educacion`;
  constructor(private http: HttpClient) {}

  public getAllEdu(): Observable<Educaciones[]> {
    return this.http.get<Educaciones[]>(`${this.URL}/alledu`);
  }

  public getDetailEdu(id: number): Observable<Educaciones> {
    return this.http.get<Educaciones>(`${this.URL}/detailedu/${id}`);
  }

  public postEdu(experiencia: Educaciones): Observable<any> {
    return this.http.post<any>(`${this.URL}/createedu`, experiencia);
  }

  public putEdu(id: number, experiencia: Educaciones): Observable<any> {
    return this.http.put<any>(`${this.URL}/updateedu/${id}`, experiencia);
  }

  public delEdu(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/deleteedu/${id}`);
  }
}
