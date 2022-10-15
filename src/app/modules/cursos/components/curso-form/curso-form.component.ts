import { Component, Inject ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/core/curso';
import { CursosComponent } from '../../pages/cursos/cursos.component';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso_form!: FormGroup;

  cursoEncontrado!: Curso;

  constructor(public dialogRef: MatDialogRef<CursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursoService: CursoService,
    private _snackBar: MatSnackBar) {
   }
  ngOnInit(): void {
    if(!this.data) {
      this.inicializarCursoFormGroup();
      return
    }
    this.cursoEncontrado = this.data.curso
    this.inicializarCursoFormGroupConDatos(this.cursoEncontrado);
  }

  crearAula() {
    console.log(this.curso_form.value)
    this.cursoService.crearNuevoCurso(this.curso_form.value)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Curso creado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  actualizarCurso() {
    let curso: Curso = this.curso_form.value;
    curso.codigo = this.cursoEncontrado.codigo;
    this.cursoService.actualizarCurso(curso.codigo, curso)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Curso actualizado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  inicializarCursoFormGroup() {
    this.curso_form = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })
  }

  inicializarCursoFormGroupConDatos(curso: Curso) {
    this.curso_form = new FormGroup({
      nombre: new FormControl(curso.nombre, Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
