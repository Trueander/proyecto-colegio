import { Component, Inject ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosComponent } from '../../pages/cursos/cursos.component';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarCursoFormGroup();
   }
  ngOnInit(): void {
  }

  crearAula() {
    console.log(this.curso_form.value)
  }

  inicializarCursoFormGroup() {
    this.curso_form = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
