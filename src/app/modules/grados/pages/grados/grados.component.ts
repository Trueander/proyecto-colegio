import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Grado } from 'src/app/core/grado';
import { GradoFormComponent } from '../../components/grado-form/grado-form.component';
import { GradoService } from '../../services/grado.service';


@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.scss']
})
export class GradosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'acciones'];

  grados: Grado[] = []

  dataSource = this.grados;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private gradoService: GradoService) { }

  ngOnInit(): void {
    this.gradoService.listarGrados()
        .subscribe({
          next: response => {
            this.grados = response;
            this.dataSource = this.grados
          },
          error: error => console.log(error),
          complete: () => console.log("Grados obtenidos con éxito!")
        })
  }

  openDialog(): void {
    let gradoFormDialog = this.dialog.open(GradoFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    gradoFormDialog.afterClosed()
        .subscribe(result => {
          let grado: Grado = result

          if(grado){
            this.grados.push(grado);
            this.table.renderRows();
          }
        })
  }

  openDialogActualizar(grado: Grado): void {
    let gradoFormDialog = this.dialog.open(GradoFormComponent, {
      data: {grado: grado},
      width: '400px',
      restoreFocus: false
    });

    gradoFormDialog.afterClosed()
        .subscribe(result => {
          let grado: Grado = result

          if(grado){
            this.grados = this.grados.map(g => {
              if(g.codigo == grado.codigo){
                g = grado;
              }
              return g
            });
            this.dataSource = this.grados;
            this.table.renderRows();
          }
        })
  }
}
