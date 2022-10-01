import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClasesComponent } from '../../pages/clases/clases.component';

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
  selector: 'app-clase-form',
  templateUrl: './clase-form.component.html',
  styleUrls: ['./clase-form.component.scss']
})
export class ClaseFormComponent implements OnInit {

  grado_1: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc6', nombre: '1ER GRADO'
  }

  aula_1: Aula = {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ERO', seccion: 'A', grado: this.grado_1}


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


  clase_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ClasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.inicializarClaseFormGroup();
     }

  ngOnInit(): void {
  }

  inicializarClaseFormGroup() {
    this.clase_form = new FormGroup({
      aula: new FormControl({value: `${this.aula_1.nombre} ${this.aula_1.seccion}`, disabled: true}),
      curso: new FormControl('', Validators.required),
      docente: new FormControl('',Validators.required)
    })
  }

  crearClase() {
    console.log(this.clase_form)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
