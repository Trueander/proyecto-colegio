import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BimestresComponent } from '../../pages/bimestres/bimestres.component';

@Component({
  selector: 'app-bimestre-form',
  templateUrl: './bimestre-form.component.html',
  styleUrls: ['./bimestre-form.component.scss']
})
export class BimestreFormComponent implements OnInit {

  bimestre_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<BimestresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarCursoFormGroup();
   }
  ngOnInit(): void {
  }

  crearbimestre() {
    console.log(this.bimestre_form.value)
  }

  inicializarCursoFormGroup() {
    this.bimestre_form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      activo: new FormControl('', Validators.required),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
