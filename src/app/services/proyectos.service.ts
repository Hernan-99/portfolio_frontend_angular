import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = `${environment.apiURL}/proyecto`;

  constructor(private http: HttpClient) {}

  public getAllProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.URL}/allproyectos`);
  }

  public getDetailsProyectos(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.URL}/detailpro/${id}`);
  }

  public postProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(`${this.URL}/createproyec`, proyectos);
  }

  public putProyectos(id: number, proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(`${this.URL}/updateproyec/${id}`, proyectos);
  }

  public delProyectos(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/deleteproyec/${id}`);
  }
}
