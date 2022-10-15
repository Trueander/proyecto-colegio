import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bimestre } from 'src/app/core/bimestre';
import { BimestreService } from 'src/app/modules/bimestres/services/bimestre.service';
import { ClasesComponent } from '../../pages/clases/clases.component';
import { AulaService } from '../../services/aula.service';

@Component({
  selector: 'app-enviar-reporte',
  templateUrl: './enviar-reporte.component.html',
  styleUrls: ['./enviar-reporte.component.scss']
})
export class EnviarReporteComponent implements OnInit {

  reporte_form!: FormGroup;

  semanas: string[] = ['semana 1', 'semana 2', 'semana 3', 'semana 4' ,'semana 5' ,'semana 6' ,'semana 7' ,'semana 8'];

  bimestres: Bimestre[] = [];

  codigo_aula!: number;

  constructor(
    private bimestreService: BimestreService, 
    private aulaService: AulaService,
    public dialogRef: MatDialogRef<ClasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    

    this.bimestreService.listarBimestres()
        .subscribe({
          next: response => this.bimestres = response,
          error: error => console.log(error),
          complete: () => console.log("Bimestres obtenidos con éxito!")
        })

        if(this.data.codigo_aula){
          this.codigo_aula = this.data.codigo_aula;
        }

        this.inicializarReporteFormGroup();
  }

  enviarReporteDeNotasAPadres() {
    const semana = this.reporte_form.controls['semana'].value;
    this.aulaService.enviarReporteNotasDeEstudianteAPadresPorCodigoAula(this.codigo_aula, semana)
        .subscribe({
          next: () => {
            this.dialogRef.close()
          },
          error: error => console.error(error),
          complete: () => {
            this._snackBar.open('Reporte enviado con éxito','Cerrar',{
              horizontalPosition: 'end',
              verticalPosition: 'top'
            })
          }
        })
  }

  inicializarReporteFormGroup() {
    this.reporte_form = new FormGroup({
      bimestre: new FormControl('', Validators.required),
      semana: new FormControl('',Validators.required)
    })
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
