import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Estudiante } from 'src/app/core/estudiante';
import { EstudianteFormComponent } from '../../components/estudiante-form/estudiante-form.component';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'dni', 'celular_apoderado', 'aula', 'estado', 'acciones'];

  estudiantes: Estudiante[] = []

  dataSource = this.estudiantes;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.listarEstudiantes()
        .subscribe({
          next: response => {
            this.estudiantes = response;
            this.dataSource = this.estudiantes
          },
          error: error => console.log(error),
          complete: () => console.log("Estudiantes obtenidos con éxito!")
        })
  }

  openDialog(): void {
    const estudianteFormDialog = this.dialog.open(EstudianteFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    estudianteFormDialog.afterClosed()
    .subscribe(result => {
      let estudiante: Estudiante = result

      if(estudiante){
        this.estudiantes.push(estudiante);
        this.table.renderRows();
      }
    })
  }

  openDialogActualizar(estudiante: Estudiante): void {
    let estudianteFormDialog = this.dialog.open(EstudianteFormComponent, {
      data: {estudiante: estudiante},
      width: '400px',
      restoreFocus: false
    });

    estudianteFormDialog.afterClosed()
        .subscribe(result => {
          let estudiante: Estudiante = result

          if(estudiante){
            this.estudiantes = this.estudiantes.map(g => {
              if(g.codigo == estudiante.codigo){
                g = estudiante;
              }
              return g
            });
            this.dataSource = this.estudiantes;
            this.table.renderRows();
          }
        })
  }
}
