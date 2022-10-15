import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bimestre } from 'src/app/core/bimestre';
import { BimestresComponent } from '../../pages/bimestres/bimestres.component';
import { BimestreService } from '../../services/bimestre.service';

@Component({
  selector: 'app-bimestre-form',
  templateUrl: './bimestre-form.component.html',
  styleUrls: ['./bimestre-form.component.scss']
})
export class BimestreFormComponent implements OnInit {

  bimestre_form!: FormGroup;

  bimestreEncontrado!: Bimestre;

  constructor(public dialogRef: MatDialogRef<BimestresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bimestreService: BimestreService,
    private _snackBar: MatSnackBar) {
   }
  ngOnInit(): void {
    if(!this.data) {
      this.inicializarBimestreFormGroup();
      return
    }
    this.bimestreEncontrado = this.data.bimestre
    this.inicializarBimestreFormGroupConDatos(this.bimestreEncontrado);
  }

  crearbimestre() {
    console.log(this.bimestre_form.value)
    this.bimestreService.crearNuevoBimestre(this.bimestre_form.value)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Bimestre creado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  actualizarBimestre() {
    let bimestre: Bimestre = this.bimestre_form.value;
    bimestre.codigo = this.bimestreEncontrado.codigo;
    this.bimestreService.actualizarBimestre(bimestre.codigo, bimestre)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Bimestre actualizado','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  inicializarBimestreFormGroup() {
    this.bimestre_form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
    })
  }

  inicializarBimestreFormGroupConDatos(bimestre: Bimestre) {
    this.bimestre_form = new FormGroup({
      nombre: new FormControl(bimestre.nombre, Validators.required),
      estado: new FormControl(bimestre.estado, Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
