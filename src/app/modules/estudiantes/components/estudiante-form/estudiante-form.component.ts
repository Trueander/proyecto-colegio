import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudiantesComponent } from '../../pages/estudiantes/estudiantes.component';

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
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.scss']
})
export class EstudianteFormComponent implements OnInit {

  grado_1: Grado = {
    grado_id:'5a25bc18-34de-47c2-bd60-723445404dc6', nombre: '1ER GRADO'
  }

  aulas: Aula[] = [
    {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'A', grado: this.grado_1},
    {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'1ero', seccion: 'B', grado: this.grado_1},
    {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'2do', seccion: 'A', grado: this.grado_1},
    {aula_id: '5a25bc18-32de-47c2-bd60-723445404dc6',nombre:'3ro', seccion: 'A', grado: this.grado_1}
  ]

  estudiante_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarDocenteFormGroup();
   }

  ngOnInit(): void {
  }

  crearDocente() {
    console.log(this.estudiante_form.value)
  }

  inicializarDocenteFormGroup() {
    this.estudiante_form = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      dni: new FormControl('',Validators.required),
      celular_apoderado: new FormControl('',Validators.required),
      aula: new FormControl('',Validators.required),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
