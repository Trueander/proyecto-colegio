import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Docente } from 'src/app/core/docente';
import { DocentesComponent } from '../../pages/docentes/docentes.component';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docente-form',
  templateUrl: './docente-form.component.html',
  styleUrls: ['./docente-form.component.scss']
})
export class DocenteFormComponent implements OnInit {

  docente_form!: FormGroup;

  docenteEncontrado!: Docente;

  constructor(public dialogRef: MatDialogRef<DocentesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private docenteService: DocenteService,
    private _snackBar: MatSnackBar) {
   }

  ngOnInit(): void {
    if(!this.data) {
      this.inicializarDocenteFormGroup();
      return
    }
    this.docenteEncontrado = this.data.docente
    this.inicializarDocenteFormGroupConDatos(this.docenteEncontrado);
  }

  crearDocente() {
    this.docenteService.crearNuevoDocente(this.docente_form.value)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => {
            this._snackBar.open(error.error.message,'Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          },
          complete: () => {
            this._snackBar.open('Docente creado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  actualizarDocente() {
    let docente: Docente = this.docente_form.value;
    docente.codigo = this.docenteEncontrado.codigo;
    this.docenteService.actualizarDocente(docente.codigo, docente)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Docente actualizado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  inicializarDocenteFormGroup() {
    this.docente_form = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      estado: new FormControl('',Validators.required)
    })
  }

  inicializarDocenteFormGroupConDatos(docente: Docente) {
    this.docente_form = new FormGroup({
      nombres: new FormControl(docente.nombres, [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl(docente.apellidos, [Validators.required, Validators.minLength(3)]),
      dni: new FormControl(docente.dni,[Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      estado: new FormControl(docente.estado,Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
