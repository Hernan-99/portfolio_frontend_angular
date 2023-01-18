import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesBlandas } from '../models/habilidades-blandas';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesBlandasService {
  URL = `${environment.apiURL}/habilidadB`;

  constructor(private http: HttpClient) {}

  public getAllHB(): Observable<HabilidadesBlandas[]> {
    return this.http.get<HabilidadesBlandas[]>(`${this.URL}/allhb`);
  }

  public getDetailHB(id: number): Observable<HabilidadesBlandas> {
    return this.http.get<HabilidadesBlandas>(`${this.URL}/detailhb/${id}`);
  }

  public postHB(habilidad: HabilidadesBlandas): Observable<any> {
    return this.http.post<any>(`${this.URL}/createhb`, habilidad);
  }

  public putHB(id: number, habilidad: HabilidadesBlandas): Observable<any> {
    return this.http.put<any>(
      `${this.URL}/updatehabilidadblanda/${id}`,
      habilidad
    );
  }

  public delHB(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/deletehb/${id}`);
  }
}
