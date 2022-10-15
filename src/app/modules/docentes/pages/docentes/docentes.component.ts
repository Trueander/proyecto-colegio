import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Docente } from 'src/app/core/docente';
import { DocenteFormComponent } from '../../components/docente-form/docente-form.component';
import { DocenteService } from '../../services/docente.service';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'dni','estado','acciones'];

  docentes: Docente[] = []

  dataSource = this.docentes;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.docenteService.listarDocentes()
        .subscribe({
          next: (response: Docente[]) => {
            this.docentes = response;
            this.dataSource = this.docentes;
          },
          error: error => console.log(error)
        })
  }

  openDialog(): void {
    const docenteFormDialog = this.dialog.open(DocenteFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    docenteFormDialog.afterClosed()
        .subscribe(result => {
          let docente: Docente = result

          if(docente){
            this.docentes.push(docente);
            this.table.renderRows();
          }
          
        })
  }

  openDialogActualizar(docente: Docente): void {
    let docenteFormDialog = this.dialog.open(DocenteFormComponent, {
      data: {docente: docente},
      width: '400px',
      restoreFocus: false
    });

    docenteFormDialog.afterClosed()
        .subscribe(result => {
          let docente: Docente = result

          if(docente){
            this.docentes = this.docentes.map(g => {
              if(g.codigo == docente.codigo){
                g = docente;
              }
              return g
            });
            this.dataSource = this.docentes;
            this.table.renderRows();
          }
        })
  }



}
