import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/curso';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.url_backend}/curso`);
  }

  crearNuevoCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${this.url_backend}/curso`, curso);
  }

  obtenerCursoPorCodigo(codigo_curso: number): Observable<Curso>{
    return this.http.get<Curso>(`${this.url_backend}/curso/${codigo_curso}`);
  }

  actualizarCurso(codigo_curso: number, curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${this.url_backend}/curso/${codigo_curso}`, curso);
  }

}
