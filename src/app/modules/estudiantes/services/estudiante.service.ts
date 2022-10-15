import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/core/estudiante';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.url_backend}/estudiante`);
  }

  crearNuevoEstudiante(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.url_backend}/estudiante`, estudiante);
  }

  obtenerEstudiantePorCodigo(codigo_estudiante: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.url_backend}/estudiante/${codigo_estudiante}`);
  }

  actualizarEstudiante(codigo_estudiante: number, estudiante: Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.url_backend}/estudiante/${codigo_estudiante}`, estudiante);
  }
}
