import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AulaFormComponent } from '../../components/aula-form/aula-form.component';

interface Aula {
  aula_id: string;
  nombre: string;
  seccion: string;
  grado: Grado;
}

interface Grado {
  grado_id: string;
  nombre: string;
}

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  longText = `The Shiba Inu `;

  grado_2: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc2', nombre: '2DO GRADO'
  }

  grado_1: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc6', nombre: '1ER GRADO'
  }

  aula_1: Aula = {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'A', grado: this.grado_1}
  aula_2: Aula = {aula_id: '5a25bc18-32ae-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'B', grado: this.grado_1}
  aula_3: Aula = {aula_id: '2a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'C', grado: this.grado_1}
  aula_4: Aula = {aula_id: '5a22bc18-32de-47c2-bd60-723445404dc6',nombre:'2do', seccion: 'A', grado: this.grado_2}
  aula_5: Aula = {aula_id: '5125bc18-32de-47c2-bd60-723445404dc6',nombre:'2do', seccion: 'B', grado: this.grado_2}
  aula_6: Aula = {aula_id: '5a25bc18-32de-47c2-bd60-723445401dc2',nombre:'2do', seccion: 'C', grado: this.grado_2}

  aulas: Aula[] = [
    this.aula_1,
    this.aula_2,
    this.aula_3,
    this.aula_4,
    this.aula_5,
    this.aula_6,
  ]

  aulasPrimerGrado: Aula[] = [];
  aulasSegundoGrado: Aula[] = [];
  aulasTercerGrado: Aula[] = [];
  aulasCuartoGrado: Aula[] = [];
  aulasQuintoGrado: Aula[] = [];
  aulasSextoGrado: Aula[] = [];

  aulasPorGrado: Array<Aula[]> = []


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.agruparPorGrado()
    console.log(this.aulasPorGrado)
  }

  agruparPorGrado() {
    this.aulasPrimerGrado = this.aulas.filter(aula => aula.grado.grado_id == this.grado_1.grado_id);
    this.aulasSegundoGrado = this.aulas.filter(aula => aula.grado.grado_id == this.grado_2.grado_id);
    this.aulasPorGrado = [this.aulasPrimerGrado, this.aulasSegundoGrado];
  }

  openDialog(): void {
    this.dialog.open(AulaFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }

}
