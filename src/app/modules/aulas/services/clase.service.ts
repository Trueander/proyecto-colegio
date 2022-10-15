import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/core/clase';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  crearClase(clase: Clase): Observable<Clase>{
    return this.http.post<Clase>(`${this.url_backend}/clase`, clase);
  }

  obtenerClasePorId(codigo_clase: number): Observable<Clase> {
    return this.http.get<Clase>(`${this.url_backend}/clase/${codigo_clase}`);
  }

}
