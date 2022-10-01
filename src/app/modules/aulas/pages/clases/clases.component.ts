import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ClaseFormComponent } from '../../components/clase-form/clase-form.component';

interface Curso {
  curso_id: string;
  nombre: string;
}

interface Clase {
  clase_id: string;
  docente: Docente;
  curso: Curso;
  aula: Aula;
}

interface Docente {
  docente_id: string;
  nombres: string;
  apellidos: string;
}

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
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  grado_1: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc6', nombre: '1ER GRADO'
  }

  aula_1: Aula = {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'A', grado: this.grado_1}

  cursos: Curso[] = [
    {curso_id: '5a25bc18-32de-47c2-bd60-a23445404dc6', nombre:'MATEMÁTICA'},
    {curso_id: '5a25bc18-32de-47c2-bd10-a23445404dc6', nombre:'COMUNICACIÓN'},
    {curso_id: '5a25bc18-32de-47c2-bd20-a23445404dc6', nombre:'CTA'},
    {curso_id: '5a25bc18-32de-47c2-bd30-a23445404dc6', nombre:'PERSONAL SOCIAL'},
    {curso_id: '5a25bc18-32de-47c2-bd40-a23445404dc6', nombre:'QUÍMICA'},
    {curso_id: '5a25bc18-32de-47c2-bd50-a23445404dc6', nombre:'EDUCACIÓN FÍSICA'},
    {curso_id: '5a25bc18-32de-47c2-bd70-a23445404dc6', nombre:'INGLÉS'},
    {curso_id: '5a25bc18-32de-47c2-bd80-a23445404dc6', nombre:'ARTE'},
    {curso_id: '5a25bc18-32de-47c2-bd90-a23445404dc6', nombre:'HISTORIA'}
  ]

  docentes: Docente[] = [
    {docente_id: '3a5d21d1-28c3-4206-806e-59bc00119539', nombres:'JOSE', apellidos: 'PERALES PORTA'},
    {docente_id: '3a5d21d1-28c3-4206-806e-52bc00119539', nombres:'ROSA', apellidos: 'CORALES REVER'},
    {docente_id: '3a5d21d1-28c3-4206-806e-53bc00119539', nombres:'ARNOLD', apellidos: 'MARQUEZ MARIAN'},
    {docente_id: '3a5d21d1-28c3-4206-806e-54bc00119539', nombres:'GERARD', apellidos: 'BENGOLEA SANCHEZ'},
    {docente_id: '3a5d21d1-28c3-4206-806e-55bc00119539', nombres:'GENESIS', apellidos: 'ROSAS FLOR'},
  ]

  clases: Clase[] = [
    {clase_id:'13f61a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[0], docente: this.docentes[0], aula: this.aula_1},
    {clase_id:'13f62fa1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[1], docente: this.docentes[1], aula: this.aula_1},
    {clase_id:'13f63a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[2], docente: this.docentes[2], aula: this.aula_1},
    {clase_id:'13f64a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[3], docente: this.docentes[3], aula: this.aula_1},
    {clase_id:'13f65a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[4], docente: this.docentes[1], aula: this.aula_1},
    {clase_id:'13f66a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[5], docente: this.docentes[2], aula: this.aula_1},
    {clase_id:'13f67a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[6], docente: this.docentes[2], aula: this.aula_1},
    {clase_id:'13f68a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[7], docente: this.docentes[3], aula: this.aula_1},
    {clase_id:'13f69a1e-e003-4cd4-9538-796e75cb4454', curso: this.cursos[8], docente: this.docentes[3], aula: this.aula_1}
  ]

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(params => {
          let aula_id = params['aula_id'];
          console.log(aula_id)
        })
  }

  openDialog(): void {
    this.dialog.open(ClaseFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }

}
