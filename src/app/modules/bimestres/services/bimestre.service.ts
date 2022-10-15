import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bimestre } from 'src/app/core/bimestre';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BimestreService {
  private url_backend = environment.URL_BACKEND;

  constructor(private http: HttpClient) { }

  listarBimestres(): Observable<Bimestre[]>{
    return this.http.get<Bimestre[]>(`${this.url_backend}/bimestre`);
  }

  crearNuevoBimestre(bimestre: Bimestre): Observable<Bimestre>{
    return this.http.post<Bimestre>(`${this.url_backend}/bimestre`, bimestre);
  }

  obtenerBimestrePorCodigo(codigo_bimestre: number): Observable<Bimestre>{
    return this.http.get<Bimestre>(`${this.url_backend}/bimestre/${codigo_bimestre}`);
  }

  actualizarBimestre(codigo_bimestre: number, bimestre: Bimestre): Observable<Bimestre>{
    return this.http.put<Bimestre>(`${this.url_backend}/bimestre/${codigo_bimestre}`, bimestre);
  }
}
