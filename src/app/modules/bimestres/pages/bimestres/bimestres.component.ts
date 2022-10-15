import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Bimestre } from 'src/app/core/bimestre';
import { BimestreFormComponent } from '../../components/bimestre-form/bimestre-form.component';
import { BimestreService } from '../../services/bimestre.service';


@Component({
  selector: 'app-bimestres',
  templateUrl: './bimestres.component.html',
  styleUrls: ['./bimestres.component.scss']
})
export class BimestresComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'estado', 'acciones'];

  bimestres: Bimestre[] = []

  dataSource = this.bimestres;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private bimestreService: BimestreService) { }

  ngOnInit(): void {
    this.bimestreService.listarBimestres()
        .subscribe({
          next: response => {
            this.bimestres = response;
            this.dataSource = this.bimestres;
          },
          error: error => console.log(error),
          complete: () => console.log("Bimestres obtenidos !")
        })
  }

  openDialog(): void {
    let bimestreFormDialog = this.dialog.open(BimestreFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    bimestreFormDialog.afterClosed()
        .subscribe(result => {
          let bimestre: Bimestre = result

          if(bimestre){
            this.bimestres.push(bimestre);
            this.table.renderRows();
          }
        })
  }

  openDialogActualizar(bimestre: Bimestre): void {
    let bimestreFormDialog = this.dialog.open(BimestreFormComponent, {
      data: {bimestre: bimestre},
      width: '400px',
      restoreFocus: false
    });

    bimestreFormDialog.afterClosed()
        .subscribe(result => {
          let bimestre: Bimestre = result

          if(bimestre){
            this.bimestres = this.bimestres.map(g => {
              if(g.codigo == bimestre.codigo){
                g = bimestre;
              }
              return g
            });
            this.dataSource = this.bimestres;
            this.table.renderRows();
          }
        })
  }
}
