import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Clase } from 'src/app/core/clase';
import { Nota } from 'src/app/core/nota';
import { ClaseService } from '../../services/clase.service';
import { NotaService } from '../../services/nota.service';



@Component({
  selector: 'app-registro-notas',
  templateUrl: './registro-notas.component.html',
  styleUrls: ['./registro-notas.component.scss']
})
export class RegistroNotasComponent implements OnInit {

  displayedColumns: string[] = ['Nombres', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6',
   'Sem 7', 'Sem 8', 'Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5', 'Tarea 6', 'Tarea 7', 'Tarea 8','Examen', 'Promedio'];
  
   form = this.fb.group({
    notasForm: this.fb.array([])
  });

  claseEncontrada!: Clase;

  notas_estudiantes: Nota[] = [
  ]

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  NOTA_APROBATORIA = 13;
  
  dataSource: any
  constructor(private fb: FormBuilder, 
    private notaService: NotaService, 
    private activatedRoute: ActivatedRoute,
    private claseService: ClaseService,
    private location: Location,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .subscribe(params => {
          const cod_aula = params['aula_id']
          const cod_clase = params['clase_id']

          this.claseService.obtenerClasePorId(cod_clase)
              .subscribe({
                next: (clase: Clase) => {
                  this.claseEncontrada = clase;
                  this.notaService.listarNotasPorAulaCursoBimestre(cod_aula,clase.curso.codigo,1)
                      .subscribe({
                        next: response => {
                          this.notas_estudiantes = response;
                          console.log(this.notas_estudiantes)
                          this.notas_estudiantes.forEach(nota => {
                            this.agregarNotaAlFormularioEstudiante(nota)
                          })
                          this.dataSource = new MatTableDataSource((this.form.get('notasForm') as FormArray).controls);
                        },
                        error: error => console.log(error),
                        complete: () => console.log("Notas obtenidas!")
                  })

                },
                error: error => console.log(error),
                complete: () => console.log("Clase obtenida!")
              })


    })


    
  }

  agregarNotaAlFormularioEstudiante(nota: Nota){

    const notaForm = this.fb.group({
      codigo: [nota.codigo],
      nota_semana_1: [this.validarNumero(nota.nota_semana_1), [Validators.max(20), Validators.required]],
      nota_semana_2: [this.validarNumero(nota.nota_semana_2), [Validators.max(20), Validators.required]],
      nota_semana_3: [this.validarNumero(nota.nota_semana_3), [Validators.max(20), Validators.required]],
      nota_semana_4: [this.validarNumero(nota.nota_semana_4), [Validators.max(20), Validators.required]],
      nota_semana_5: [this.validarNumero(nota.nota_semana_5), [Validators.max(20), Validators.required]],
      nota_semana_6: [this.validarNumero(nota.nota_semana_6), [Validators.max(20), Validators.required]],
      nota_semana_7: [this.validarNumero(nota.nota_semana_7), [Validators.max(20), Validators.required]],
      nota_semana_8: [this.validarNumero(nota.nota_semana_8), [Validators.max(20), Validators.required]],
      nota_tarea_1: [this.validarNumero(nota.nota_tarea_1), [Validators.max(20), Validators.required]],
      nota_tarea_2: [this.validarNumero(nota.nota_tarea_2), [Validators.max(20), Validators.required]],
      nota_tarea_3: [this.validarNumero(nota.nota_tarea_3), [Validators.max(20), Validators.required]],
      nota_tarea_4: [this.validarNumero(nota.nota_tarea_4), [Validators.max(20), Validators.required]],
      nota_tarea_5: [this.validarNumero(nota.nota_tarea_5), [Validators.max(20), Validators.required]],
      nota_tarea_6: [this.validarNumero(nota.nota_tarea_6), [Validators.max(20), Validators.required]],
      nota_tarea_7: [this.validarNumero(nota.nota_tarea_7), [Validators.max(20), Validators.required]],
      nota_tarea_8: [this.validarNumero(nota.nota_tarea_8), [Validators.max(20), Validators.required]],
      nota_examen_final : [this.validarNumero(nota.nota_examen_final), [Validators.max(20), Validators.required]],
      promedio_final: [{value: this.obtenerPromedio(nota), disabled: true}],
      // promedio_final: [{value: this.obtenerPromedio(nota), disab}],
      bimestre: [nota.bimestre],
      // estudiante_form: [nota.estudiante],
      estudiante: [nota.estudiante],
      curso: [nota.curso],
      nombreEstudiante: [{value:nota.estudiante.nombres+' '+nota.estudiante.apellidos, disabled: true}]
    });

  this.notasForm.push(notaForm);
}

get notasForm() {
  return this.form.controls["notasForm"] as FormArray;
}

guardarNotas() {
  this.notaService.guardarNotas(this.notasForm.value)
      .subscribe({
        next: () => console.log("Notas guardadas"),
        error: error => console.log(error),
        complete: () => {
          console.log("Notas guardadas completado!");
          this._snackBar.open('Notas guardadas','Cerrar',{
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          })
        }
      })
}

validarNumero(number: number): string{

  let numberToString: string = number.toString();

  if(numberToString.length === 1) numberToString = '0' + numberToString;

  return numberToString;
}

cambiarStringToNumber(number: string): number{
  return +number;
}

numberOnly(event: any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

retroceder () {
  this.location.back();
}

obtenerPromedio(nota: Nota): number {
  return (((nota.nota_semana_1 + nota.nota_semana_2 + nota.nota_semana_3 + nota.nota_semana_4 + 
  nota.nota_semana_5 + nota.nota_semana_6 + nota.nota_semana_7 + nota.nota_semana_8 + 
  nota.nota_tarea_1 + nota.nota_tarea_2 + nota.nota_tarea_3 + nota.nota_tarea_4 + 
  nota.nota_tarea_5 + nota.nota_tarea_6 + nota.nota_tarea_7 + nota.nota_tarea_8)/16)*0.80)+(nota.nota_examen_final*0.2)
  
  
}

}
