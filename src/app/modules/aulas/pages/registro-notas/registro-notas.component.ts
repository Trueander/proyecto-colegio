import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface NotaBimestralEstudiante {
  nota_semana_1: number;
  nota_semana_2: number;
  nota_semana_3: number;
  nota_semana_4: number;
  nota_semana_5: number;
  nota_semana_6: number;
  nota_semana_7: number;
  nota_semana_8: number;
  nota_tarea_1: number;
  nota_tarea_2: number;
  nota_tarea_3: number;
  nota_tarea_4: number;
  nota_examen_final: number;
  promedio_final: number;
  curso: Curso;
  bimestre: Bimestre;
  estudiante: Estudiante;
}

interface Curso {
  curso_id: string;
  nombre: string;
}

interface Bimestre {
  bimestre_id: string;
  nombre: string;
  activo: boolean;
}

interface Estudiante {
  estudiante_id: string;
  nombres: string;
  apellidos: string;
  dni: string;
}


@Component({
  selector: 'app-registro-notas',
  templateUrl: './registro-notas.component.html',
  styleUrls: ['./registro-notas.component.scss']
})
export class RegistroNotasComponent implements OnInit {

  displayedColumns: string[] = ['Nombres', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6',
   'Sem 7', 'Sem 8', 'Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4','Examen', 'Promedio'];
  
   form = this.fb.group({
    notasForm: this.fb.array([])
  });

  bimestre: Bimestre = {
    bimestre_id:'AXD123', nombre:'BIMESTRE 1', activo: true
  }

  curso: Curso = {curso_id: '5a25bc18-32de-47c2-bd60-a23445404dc6', nombre:'MATEMÁTICA'};
  estudiante: Estudiante = {estudiante_id: '4ase2-eewss', nombres: 'ANDERSON', apellidos:'BENGOLEA SÁNCHEZ',dni:'70267159'}
  estudiante1: Estudiante = {estudiante_id: '4ase2-eewss', nombres: 'JOSE', apellidos:'BENGOLEA SÁNCHEZ',dni:'70267122'}
  estudiante2: Estudiante = {estudiante_id: '4ase2-eewss', nombres: 'ROBERTO', apellidos:'BENGOLEA SÁNCHEZ',dni:'70267459'}
  estudiante3: Estudiante = {estudiante_id: '4ase2-eewss', nombres: 'HELY', apellidos:'BENGOLEA SÁNCHEZ',dni:'70265159'}

  notas_estudiantes: NotaBimestralEstudiante[] = [
    {
      nota_semana_1: 17, nota_semana_2: 12,nota_semana_3: 12,nota_semana_4: 12,nota_semana_5: 12,
      nota_semana_6: 12,nota_semana_7: 12,nota_semana_8: 12,nota_tarea_1:0, nota_tarea_2: 1, nota_tarea_3:0, nota_tarea_4:0,
      bimestre:this.bimestre, curso: this.curso, estudiante: this.estudiante,nota_examen_final:0,promedio_final:0
    },
    {
      nota_semana_1: 17, nota_semana_2: 12,nota_semana_3: 12,nota_semana_4: 12,nota_semana_5: 12,
      nota_semana_6: 12,nota_semana_7: 12,nota_semana_8: 12,nota_tarea_1:0, nota_tarea_2: 1, nota_tarea_3:0, nota_tarea_4:0,
      bimestre:this.bimestre, curso: this.curso, estudiante: this.estudiante1,nota_examen_final:0,promedio_final:0
    },
    {
      nota_semana_1: 17, nota_semana_2: 12,nota_semana_3: 12,nota_semana_4: 12,nota_semana_5: 12,
      nota_semana_6: 12,nota_semana_7: 12,nota_semana_8: 12,nota_tarea_1:0, nota_tarea_2: 1, nota_tarea_3:0, nota_tarea_4:0,
      bimestre:this.bimestre, curso: this.curso, estudiante: this.estudiante2,nota_examen_final:0, promedio_final:0
    },
    {
      nota_semana_1: 17, nota_semana_2: 12,nota_semana_3: 12,nota_semana_4: 12,nota_semana_5: 12,
      nota_semana_6: 12,nota_semana_7: 12,nota_semana_8: 12,nota_tarea_1:0, nota_tarea_2: 1, nota_tarea_3:0, nota_tarea_4:0,
      bimestre:this.bimestre, curso: this.curso, estudiante: this.estudiante3,nota_examen_final:0,promedio_final:0
    }
  ]
  

 
  // dataSource = this.notas_estudiantes;
  dataSource: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    

    this.notas_estudiantes.forEach(nota => {
      this.addNota(nota)
    })

    this.dataSource = new MatTableDataSource((this.form.get('notasForm') as FormArray).controls);
  }

  addNota(nota: NotaBimestralEstudiante){

    const notaForm = this.fb.group({
      nota_semana_1: [this.validarNumero(nota.nota_semana_1), Validators.maxLength(2)],
      nota_semana_2: [this.validarNumero(nota.nota_semana_2), Validators.maxLength(2)],
      nota_semana_3: [this.validarNumero(nota.nota_semana_3), Validators.maxLength(2)],
      nota_semana_4: [this.validarNumero(nota.nota_semana_4), Validators.maxLength(2)],
      nota_semana_5: [this.validarNumero(nota.nota_semana_5), Validators.maxLength(2)],
      nota_semana_6: [this.validarNumero(nota.nota_semana_6), Validators.maxLength(2)],
      nota_semana_7: [this.validarNumero(nota.nota_semana_7), Validators.maxLength(2)],
      nota_semana_8: [this.validarNumero(nota.nota_semana_8), Validators.maxLength(2)],
      nota_tarea_1: [this.validarNumero(nota.nota_semana_1), Validators.maxLength(2)],
      nota_tarea_2: [this.validarNumero(nota.nota_semana_2), Validators.maxLength(2)],
      nota_tarea_3: [this.validarNumero(nota.nota_semana_3), Validators.maxLength(2)],
      nota_tarea_4: [this.validarNumero(nota.nota_semana_4), Validators.maxLength(2)],
      nota_examen_final : [this.validarNumero(nota.nota_examen_final), Validators.maxLength(2)],
      promedio_final: [{value: this.validarNumero(nota.promedio_final), disabled: true}],
      estudiante: [{value:`${nota.estudiante.nombres} ${nota.estudiante.apellidos}`, disabled: true}],
      curso: [nota.curso],
      nombreEstudiante: [{value:nota.estudiante.nombres+' '+nota.estudiante.apellidos, disabled: true}]
    });

  this.notasForm.push(notaForm);
}

get notasForm() {
  return this.form.controls["notasForm"] as FormArray;
}

validarNumero(number: number): string{

  let numberToString: string = number.toString();

  if(numberToString.length === 1) numberToString = '0' + numberToString;

  return numberToString;
}

}
