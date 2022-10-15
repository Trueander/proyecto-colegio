import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from 'src/app/core/docente';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(`${this.url_backend}/docente`);
  }

  crearNuevoDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.url_backend}/docente`, docente);
  }

  actualizarDocente(codigo_docente: number, docente: Docente): Observable<Docente>{
    return this.http.put<Docente>(`${this.url_backend}/docente/${codigo_docente}`, docente);
  }

  login(usuario: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('usuario', usuario);
    params = params.set('password', password);
    return this.http.get<any>(`${this.url_backend}/docente/login`,{params: params});
  }


}
