import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteFormComponent } from '../../components/estudiante-form/estudiante-form.component';

interface Estudiante {
  estudiante_id: string;
  nombres: string;
  apellidos: string;
  dni: string;
  celular_apoderado: string;
  aula: Aula;
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
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'dni', 'celular_apoderado', 'aula', 'acciones'];

  grado_1: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc6', nombre: '1ER GRADO'
  }

  aula_1: Aula = {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ERO', seccion: 'A', grado: this.grado_1}
  estudiantes: Estudiante[] = [
    {estudiante_id: '4ase2-eewss', nombres: 'ANDERSON', apellidos:'BENGOLEA SÁNCHEZ',dni:'70267159',celular_apoderado:'998877122', aula: this.aula_1},
    {estudiante_id: '4ase2-eewss', nombres: 'JOSE', apellidos:'CARMENAN GONZALES',dni:'70267122',celular_apoderado:'928477133', aula: this.aula_1},
    {estudiante_id: '4ase2-eewss', nombres: 'ROBERTO', apellidos:'AROTINCO VILLAVERDE',dni:'70267459',celular_apoderado:'948851133', aula: this.aula_1},
    {estudiante_id: '4ase2-eewss', nombres: 'HELY', apellidos:'PERALES MANZANA',dni:'70265159',celular_apoderado:'928227313', aula: this.aula_1}
  ]

  dataSource = this.estudiantes;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(EstudianteFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }

}
