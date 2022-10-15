import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grado } from 'src/app/core/grado';
import { GradosComponent } from '../../pages/grados/grados.component';
import { GradoService } from '../../services/grado.service';

@Component({
  selector: 'app-grado-form',
  templateUrl: './grado-form.component.html',
  styleUrls: ['./grado-form.component.scss']
})
export class GradoFormComponent implements OnInit {

  grado_form!: FormGroup;

  gradoEncontrado!: Grado;

  constructor(public dialogRef: MatDialogRef<GradosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gradoService: GradoService,
    private _snackBar: MatSnackBar) {
    
   }
  ngOnInit(): void {
    if(!this.data) {
      this.inicializarGradoFormGroup();
      return
    }
    this.gradoEncontrado = this.data.grado
    this.inicializarGradoFormGroupConDatos(this.gradoEncontrado);
  }

  crearGrado() {
    console.log(this.grado_form.value)
    this.gradoService.crearNuevoGrado(this.grado_form.value)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Grado creado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  actualizarGrado() {
    let grado: Grado = this.grado_form.value;
    grado.codigo = this.gradoEncontrado.codigo;
    this.gradoService.actualizarGrado(grado.codigo, grado)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Grado actualizado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  inicializarGradoFormGroup() {
    this.grado_form = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })
  }

  inicializarGradoFormGroupConDatos(grado: Grado) {
    this.grado_form = new FormGroup({
      nombre: new FormControl(grado.nombre, Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
