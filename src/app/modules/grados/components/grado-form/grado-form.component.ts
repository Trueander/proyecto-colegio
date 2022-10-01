import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GradosComponent } from '../../pages/grados/grados.component';

@Component({
  selector: 'app-grado-form',
  templateUrl: './grado-form.component.html',
  styleUrls: ['./grado-form.component.scss']
})
export class GradoFormComponent implements OnInit {

  grado_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<GradosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarCursoFormGroup();
   }
  ngOnInit(): void {
  }

  crearGrado() {
    console.log(this.grado_form.value)
  }

  inicializarCursoFormGroup() {
    this.grado_form = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
