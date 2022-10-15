import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aula } from 'src/app/core/aula';
import { Bimestre } from 'src/app/core/bimestre';
import { Curso } from 'src/app/core/curso';
import { Docente } from 'src/app/core/docente';
import { Estudiante } from 'src/app/core/estudiante';
import { Grado } from 'src/app/core/grado';
import { AulaService } from 'src/app/modules/aulas/services/aula.service';
import { NotaService } from 'src/app/modules/aulas/services/nota.service';
import { BimestreService } from 'src/app/modules/bimestres/services/bimestre.service';
import { CursoService } from 'src/app/modules/cursos/services/curso.service';
import { DocenteService } from 'src/app/modules/docentes/services/docente.service';
import { EstudianteService } from 'src/app/modules/estudiantes/services/estudiante.service';
import { GradoService } from 'src/app/modules/grados/services/grado.service';
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form = this.fb.group({
    cod_bimestre: ['', [Validators.required]],
    cod_grado: ['', [Validators.required]],
    cod_curso: ['', [Validators.required]],
    semana: ['', [Validators.required]]
  });

  bimestres: Bimestre[] = [];

  grados: Grado[] = [];

  cursos: Curso[] = [];

  aulas: Aula[] = [];
  docentes: Docente[] = [];
  estudiantes: Estudiante[] = [];

  respuestaReporteNotas!: any;
  reporteCursosDesaprobados!: any;

  codigoCurso!: number;
  codigoAula!: number;

  semanas: any[] = [
    { value: 'semana 1', viewValue: 'Semana 1', deshabilitado: false },
    { value: 'semana 2', viewValue: 'Semana 2', deshabilitado: false },
    { value: 'semana 3', viewValue: 'Semana 3', deshabilitado: true },
    { value: 'semana 4', viewValue: 'Semana 4', deshabilitado: true },
    { value: 'semana 5', viewValue: 'Semana 5', deshabilitado: true },
    { value: 'semana 6', viewValue: 'Semana 6', deshabilitado: true },
    { value: 'semana 7', viewValue: 'Semana 7', deshabilitado: true },
    { value: 'semana 8', viewValue: 'Semana 8', deshabilitado: true },
  ];

  constructor(private notaService: NotaService, private bimestreService: BimestreService, private cursoService: CursoService,
    private gradoService: GradoService, private fb: FormBuilder,
    private _snackBar: MatSnackBar, private aulaService: AulaService, private docenteService: DocenteService,
    private estudianteService: EstudianteService) { }

  ngOnInit(): void {

    this.aulaService.listarAulas()
      .subscribe({
        next: response => this.aulas = response,
        error: error => console.log(error),
        complete: () => console.log("Aulas obtenidas con éxito!")
      })

    this.docenteService.listarDocentes()
      .subscribe({
        next: response => this.docentes = response,
        error: error => console.log(error),
        complete: () => console.log("Docentes obtenidos con éxito!")
      })

    this.estudianteService.listarEstudiantes()
      .subscribe({
        next: response => this.estudiantes = response,
        error: error => console.log(error),
        complete: () => console.log("Estudiantes obtenidos con éxito!")
      })

    this.gradoService.listarGrados()
      .subscribe({
        next: response => this.grados = response,
        error: error => console.log(error),
        complete: () => console.log("Grados obtenidos con éxito!")
      })

    this.bimestreService.listarBimestres()
      .subscribe({
        next: response => this.bimestres = response,
        error: error => console.log(error),
        complete: () => console.log("Bimestres obtenidos con éxito!")
      })

    this.cursoService.listarCursos()
      .subscribe({
        next: response => this.cursos = response,
        error: error => console.log(error),
        complete: () => console.log("Cursos obtenidos con éxito!")
      })
  }

  obtenerReporteNotas() {

    if (this.form.valid) {
      const { cod_bimestre, cod_grado, cod_curso, semana } = this.form.getRawValue();
      this.codigoCurso = cod_curso;

      this.notaService
        .reporteDeNotasPorBimestreGradoCursoSemana(cod_bimestre, cod_grado, cod_curso, semana)
        .subscribe({
          next: response => this.respuestaReporteNotas = response,
          error: error => console.log(error),
          complete: () => console.log("Reporte generado")
        })
      this.notaService
        .reporteCursosMasDesaprobados(cod_bimestre, cod_grado, semana)
        .subscribe({
          next: response => this.reporteCursosDesaprobados = response,
          error: error => console.log(error),
          complete: () => console.log("Reporte cursos desaprobados generado")
        })

      this._snackBar.open('Datos obtenidos', 'Cerrar', {
        horizontalPosition: 'end',
        verticalPosition: 'top'
      })
    }


  }

}
