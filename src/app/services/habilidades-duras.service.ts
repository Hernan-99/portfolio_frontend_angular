import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesDuras } from '../models/habilidades-duras';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesDurasService {
  URL = `${environment.apiURL}/habilidadD`;

  constructor(private http: HttpClient) {}

  public getAllHD(): Observable<HabilidadesDuras[]> {
    return this.http.get<HabilidadesDuras[]>(`${this.URL}/allhd`);
  }

  public getDetailHD(id: number): Observable<HabilidadesDuras> {
    return this.http.get<HabilidadesDuras>(`${this.URL}/detailhd/${id}`);
  }

  public postHD(habilidad: HabilidadesDuras): Observable<any> {
    return this.http.post<HabilidadesDuras>(`${this.URL}/createhd`, habilidad);
  }

  public putHD(id: number, habilidad: HabilidadesDuras): Observable<any> {
    return this.http.put<HabilidadesDuras>(
      `${this.URL}/updatehd/${id}`,
      habilidad
    );
  }

  public delHD(id: number): Observable<any> {
    return this.http.delete<HabilidadesDuras>(`${this.URL}/deletehd/${id}`);
  }
}
