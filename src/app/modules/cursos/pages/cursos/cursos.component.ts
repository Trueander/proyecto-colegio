import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Curso } from 'src/app/core/curso';
import { CursoFormComponent } from '../../components/curso-form/curso-form.component';
import { CursoService } from '../../services/curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'acciones'];

  cursos: Curso[] = []

  dataSource = this.cursos;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.listarCursos()
        .subscribe({
          next: response => {
            this.cursos = response;
            this.dataSource = this.cursos
          },
          error: error => console.log(error),
          complete: () => console.log("Cursos obtenidos con éxito!")
        })
  }

  openDialog(): void {
    const cursoFormDialog = this.dialog.open(CursoFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    cursoFormDialog.afterClosed()
    .subscribe(result => {
      let curso: Curso = result

      if(curso){
        this.cursos.push(curso);
        this.table.renderRows();
      }
    })
  }

  openDialogActualizar(curso: Curso): void {
    let cursoFormDialog = this.dialog.open(CursoFormComponent, {
      data: {curso: curso},
      width: '400px',
      restoreFocus: false
    });

    cursoFormDialog.afterClosed()
        .subscribe(result => {
          let curso: Curso = result

          if(curso){
            this.cursos = this.cursos.map(g => {
              if(g.codigo == curso.codigo){
                g = curso;
              }
              return g
            });
            this.dataSource = this.cursos;
            this.table.renderRows();
          }
        })
  }

}
