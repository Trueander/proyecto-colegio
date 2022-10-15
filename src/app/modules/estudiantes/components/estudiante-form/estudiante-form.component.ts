import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aula } from 'src/app/core/aula';
import { Estudiante } from 'src/app/core/estudiante';
import { Grado } from 'src/app/core/grado';
import { AulaService } from 'src/app/modules/aulas/services/aula.service';
import { EstudiantesComponent } from '../../pages/estudiantes/estudiantes.component';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.scss']
})
export class EstudianteFormComponent implements OnInit {


  aulas: Aula[] = []

  estudiante_form!: FormGroup;

  estudianteEncontrado!: Estudiante;

  aulaSeleccionada!: Aula;

  constructor(public dialogRef: MatDialogRef<EstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudianteService: EstudianteService,
    private aulaService: AulaService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.aulaService.listarAulas()
    .subscribe({
      next: response => {
        this.aulas = response;

      },
      error: error => console.log(error),
      complete: () => {
        if (this.data) {
          this.aulas.forEach((aula) => {
            if(aula.codigo == this.data.estudiante.aula.codigo){
              console.log("xd")
              this.aulaSeleccionada = aula;
              this.inicializarEstudianteFormGroupConDatos(this.data.estudiante);
            }
          });
        }
      }
    })

    if (!this.data) {
      this.inicializarEstudianteFormGroup();
      return
    }
    this.estudianteEncontrado = this.data.estudiante
    // this.aulaSeleccionada = this.data.estudiante.aula;
    // console.log(this.aulaSeleccionada)
    this.inicializarEstudianteFormGroupConDatos(this.estudianteEncontrado);





  }

  crearEstudiante() {
    console.log(this.estudiante_form.value)
    this.estudianteService.crearNuevoEstudiante(this.estudiante_form.value)
      .subscribe({
        next: response => this.dialogRef.close(response),
        error: error => {
          this._snackBar.open(error.error.message,'Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        },
        complete: () => {
          this._snackBar.open('Estudiante creado','Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        }
      })
  }

  actualizarEstudiante() {
    let estudiante: Estudiante = this.estudiante_form.value;
    estudiante.codigo = this.estudianteEncontrado.codigo;
    this.estudianteService.actualizarEstudiante(estudiante.codigo, estudiante)
      .subscribe({
        next: response => this.dialogRef.close(response),
        error: error => {
          this._snackBar.open(error.error.message,'Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        },
        complete: () => {
          this._snackBar.open('Estudiante actualizado','Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        }
      })
  }

  inicializarEstudianteFormGroup() {
    this.estudiante_form = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      celular_apoderado: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      aula: new FormControl('', Validators.required),
      activo: new FormControl(Validators.required)
    })
  }

  inicializarEstudianteFormGroupConDatos(estudiante: Estudiante) {
    this.estudiante_form = new FormGroup({
      nombres: new FormControl(estudiante.nombres, [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl(estudiante.apellidos, [Validators.required, Validators.minLength(3)]),
      dni: new FormControl(estudiante.dni, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      celular_apoderado: new FormControl(estudiante.celular_apoderado, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      aula: new FormControl(this.aulaSeleccionada, Validators.required),
      activo: new FormControl(estudiante.activo, Validators.required)
    })
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
