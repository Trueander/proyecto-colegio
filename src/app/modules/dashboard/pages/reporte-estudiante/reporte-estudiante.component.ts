import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bimestre } from 'src/app/core/bimestre';
import { NotaService } from 'src/app/modules/aulas/services/nota.service';
import { BimestreService } from 'src/app/modules/bimestres/services/bimestre.service';

@Component({
  selector: 'app-reporte-estudiante',
  templateUrl: './reporte-estudiante.component.html',
  styleUrls: ['./reporte-estudiante.component.scss']
})
export class ReporteEstudianteComponent implements OnInit {

  form = this.fb.group({
    dni: ['', [Validators.required]],
    cod_bimestre: ['', [Validators.required]]
  });
  
  reporteNotaParticipacionEstudiante: any;
  reporteNotaTareaEstudiante: any;

  bimestres: Bimestre[] = [
  ];

  constructor(private notaService: NotaService, 
    private bimestreService: BimestreService, 
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bimestreService.listarBimestres()
        .subscribe({
          next: response => this.bimestres = response,
          error: error => console.log(error),
          complete: () => console.log("Bimestres obtenidos!")
        })


  }

  obtenerReporteNotas() {
    if(this.form.valid) {
      const {dni, cod_bimestre} = this.form.getRawValue();

      this.notaService.reporteNotasEstudianteBimestre(dni, cod_bimestre)
      .subscribe({
        next: response => {
          this.reporteNotaParticipacionEstudiante = response
          this.reporteNotaTareaEstudiante = response
        },
        error: error => {
          this._snackBar.open(error.error.message ,'Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        },
        complete: () => {
          this._snackBar.open('Reporte obtenido','Cerrar',{
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
        }
      })
    }

    
  }

}
