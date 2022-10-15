import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aula } from 'src/app/core/aula';
import { Clase } from 'src/app/core/clase';
import { Curso } from 'src/app/core/curso';
import { Docente } from 'src/app/core/docente';
import { Grado } from 'src/app/core/grado';
import { CursoService } from 'src/app/modules/cursos/services/curso.service';
import { DocenteService } from 'src/app/modules/docentes/services/docente.service';
import { ClasesComponent } from '../../pages/clases/clases.component';
import { AulaService } from '../../services/aula.service';
import { ClaseService } from '../../services/clase.service';


@Component({
  selector: 'app-clase-form',
  templateUrl: './clase-form.component.html',
  styleUrls: ['./clase-form.component.scss']
})
export class ClaseFormComponent implements OnInit {

  aula: Aula = new Aula();


  cursos: Curso[] = []

  docentes: Docente[] = []


  clase_form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ClasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursosService: CursoService,
    private docenteService: DocenteService,
    private aulaService: AulaService,
    private claseService: ClaseService,
    private _snackBar: MatSnackBar) {
      this.inicializarClaseFormGroup();
     }

  ngOnInit(): void {

    if(this.data.aula_id){
      this.aulaService.obtenerAulaPorId(this.data.aula_id)
          .subscribe({
            next: response => this.aula = response,
            error: error => console.log(error),
            complete: () => console.log("Aula obtenido!")
          })
    }

    this.docenteService.listarDocentes()
        .subscribe({
          next: response => this.docentes = response,
          error: error => console.log(error),
          complete: () => console.log("Docentes obtenidos!")
        })

    this.cursosService.listarCursos()
        .subscribe({
          next: response => this.cursos = response,
          error: error => console.log(error),
          complete: () => console.log("Cursos obtenidos!")
        })
  }

  inicializarClaseFormGroup() {
    this.clase_form = new FormGroup({
      aula: new FormControl(this.aula, Validators.required),
      curso: new FormControl('', Validators.required),
      docente: new FormControl('',Validators.required)
    })
  }

  crearClase() {
    let clase = new Clase();
    clase.aula = this.aula;
    clase.docente = this.clase_form.controls['docente'].value;
    clase.curso = this.clase_form.controls['curso'].value

    this.claseService.crearClase(clase)
        .subscribe({
          next: response => this.dialogRef.close(response),
          error: error => console.log(error),
          complete: () => {
            this._snackBar.open('Clase creada','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
