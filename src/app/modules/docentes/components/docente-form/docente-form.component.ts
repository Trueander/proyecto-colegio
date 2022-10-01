import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocentesComponent } from '../../pages/docentes/docentes.component';

@Component({
  selector: 'app-docente-form',
  templateUrl: './docente-form.component.html',
  styleUrls: ['./docente-form.component.scss']
})
export class DocenteFormComponent implements OnInit {

  docente_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<DocentesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarDocenteFormGroup();
   }

  ngOnInit(): void {
  }

  crearDocente() {
    console.log(this.docente_form.value)
  }

  inicializarDocenteFormGroup() {
    this.docente_form = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      dni: new FormControl('',Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
