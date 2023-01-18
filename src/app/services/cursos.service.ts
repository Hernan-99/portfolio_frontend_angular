import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  URL = `${environment.apiURL}/curso`;
  constructor(private http: HttpClient) {}

  public getAllCur(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.URL}/allcur`);
  }

  public getDetailCur(id: number): Observable<Cursos> {
    return this.http.get<Cursos>(`${this.URL}/detailcur/${id}`);
  }

  public postCur(cursos: Cursos): Observable<any> {
    return this.http.post<any>(`${this.URL}/createcur`, cursos);
  }

  public putCur(id: number, cursos: Cursos): Observable<any> {
    return this.http.put<any>(`${this.URL}/updatecur/${id}`, cursos);
  }

  public delCur(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/deletecur/${id}`);
  }
}
