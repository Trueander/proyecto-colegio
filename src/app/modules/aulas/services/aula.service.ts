
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from 'src/app/core/aula';
import { Clase } from 'src/app/core/clase';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarAulas(): Observable<Aula[]>{
    return this.http.get<Aula[]>(`${this.url_backend}/aula`);
  }

  obtenerAulaPorId(codigo_aula: number): Observable<Aula>{
    return this.http.get<Aula>(`${this.url_backend}/aula/${codigo_aula}`);
  }

  crearAula(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(`${this.url_backend}/aula`, aula);
  }

  listarClasesPorAula(codigo_aula: number): Observable<Clase[]> {
    return this.http.get<Clase[]>(`${this.url_backend}/aula/${codigo_aula}/clases`)
  }

  
  enviarReporteNotasDeEstudianteAPadresPorCodigoAula(codigo_aula: number, semana: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('codigo_aula', codigo_aula);
    params = params.set('semana', semana);
    return this.http.get<any>(`${this.url_backend}/aula/enviar-reporte-notas-a-padres`, {params: params})
  }
}
