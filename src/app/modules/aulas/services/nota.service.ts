import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Nota } from 'src/app/core/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarNotasPorAulaCursoBimestre(codigo_aula: number, codigo_curso: number, codigo_bimestre: number): Observable<Nota[]>{
    let params = new HttpParams();
    params = params.set('codigo_aula', codigo_aula);
    params = params.set('codigo_curso', codigo_curso);
    params = params.set('codigo_bimestre', codigo_bimestre);
    return this.http.get<Nota[]>(`${this.url_backend}/notas/por-curso-aula-bimestre`, {params: params});
  }

  guardarNotas(notas: Nota): Observable<any> {
    return this.http.post<any>(`${this.url_backend}/notas/guardar-notas`, notas);
  }

  reporteDeNotasPorBimestreGradoCursoSemana(codigo_bimestre: number, codigo_grado: number, codigo_curso: number, semana: string): Observable<Nota[]>{
    let params = new HttpParams();
    params = params.set('codigo_grado', codigo_grado);
    params = params.set('codigo_curso', codigo_curso);
    params = params.set('codigo_bimestre', codigo_bimestre);
    params = params.set('semana', semana);
    return this.http.get<Nota[]>(`${this.url_backend}/notas/reporte-notas-por-grado`, {params: params});
  }

  reporteCursosMasDesaprobados(codigo_bimestre: number, codigo_grado: number, semana: string): Observable<Nota[]>{
    let params = new HttpParams();
    params = params.set('codigo_bimestre', codigo_bimestre);
    params = params.set('codigo_grado', codigo_grado);
    params = params.set('semana', semana);
    return this.http.get<Nota[]>(`${this.url_backend}/notas/reporte-cursos-mas-desaprobados`, {params: params});
  }

  reporteNotasEstudianteBimestre(dni: string, codigo_bimestre: number): Observable<Nota[]>{
    let params = new HttpParams();
    params = params.set('dni', dni);
    params = params.set('codigo_bimestre', codigo_bimestre);
    return this.http.get<Nota[]>(`${this.url_backend}/notas/reporte-notas-estudiante`, {params: params});
  }

}
