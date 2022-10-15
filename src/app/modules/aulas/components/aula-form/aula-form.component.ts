import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grado } from 'src/app/core/grado';
import { GradoService } from 'src/app/modules/grados/services/grado.service';
import { AulasComponent } from '../../pages/aulas/aulas.component';
import { AulaService } from '../../services/aula.service';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrls: ['./aula-form.component.scss']
})
export class AulaFormComponent implements OnInit {

  aula_form!: FormGroup;

  grados: Grado[] = [];

  constructor(public dialogRef: MatDialogRef<AulasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gradoService: GradoService,
    private aulaService: AulaService,
    private _snackBar: MatSnackBar) {
    this.inicializarAulaFormGroup();
   }

  ngOnInit(): void {
    this.gradoService.listarGrados()
        .subscribe({
          next: response => this.grados = response,
          error: error => console.log(error),
          complete: () => console.log("Grado obtenidos!")
        })
  }

  crearAula() {
    console.log(this.aula_form.value)
    this.aulaService.crearAula(this.aula_form.value)
    .subscribe({
      next: response => this.dialogRef.close(response),
      error: error => console.log(error),
      complete: () => {
        this._snackBar.open('Aula creada','Cerrar',{
          horizontalPosition: 'end',
          verticalPosition: 'top'
        })
      }
    })
  }

  inicializarAulaFormGroup() {
    this.aula_form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required),
      grado: new FormControl('',Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
