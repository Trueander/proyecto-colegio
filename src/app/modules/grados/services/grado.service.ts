import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from 'src/app/core/grado';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarGrados(): Observable<Grado[]>{
    return this.http.get<Grado[]>(`${this.url_backend}/grado`);
  }

  crearNuevoGrado(grado: Grado): Observable<Grado>{
    return this.http.post<Grado>(`${this.url_backend}/grado`, grado);
  }

  obtenerGradoPorCodigo(codigo_grado: number): Observable<Grado>{
    return this.http.get<Grado>(`${this.url_backend}/grado/${codigo_grado}`);
  }

  actualizarGrado(codigo_grado: number, grado: Grado): Observable<Grado>{
    return this.http.put<Grado>(`${this.url_backend}/grado/${codigo_grado}`, grado);
  }
}
