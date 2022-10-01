import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AulasComponent } from '../../pages/aulas/aulas.component';

@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrls: ['./aula-form.component.scss']
})
export class AulaFormComponent implements OnInit {

  aula_form!: FormGroup;

  grados: any[] = [
    {id:'AXS',nombre: '1ER GRADO'},
    {id:'AXZ',nombre: '2DO GRADO'},
    {id:'AXQ' ,nombre: '3ER GRADO'},
  ];

  constructor(public dialogRef: MatDialogRef<AulasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.inicializarAulaFormGroup();
   }

  ngOnInit(): void {
    
  }

  crearAula() {
    console.log(this.aula_form.value)
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
