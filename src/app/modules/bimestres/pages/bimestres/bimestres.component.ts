import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BimestreFormComponent } from '../../components/bimestre-form/bimestre-form.component';

interface Bimestre {
  bimestre_id: string;
  nombre: string;
  activo: boolean;
}

@Component({
  selector: 'app-bimestres',
  templateUrl: './bimestres.component.html',
  styleUrls: ['./bimestres.component.scss']
})
export class BimestresComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'estado', 'acciones'];

  bimestres: Bimestre[] = [
    {bimestre_id: '5a25bc18-32de-47c2-bd60-a23445404dc6', nombre:'BIMESTRE 1',activo: true},
    {bimestre_id: '5a25bc18-32d2-47c2-bd10-a23445404dc6', nombre:'BIMESTRE 2',activo: false},
    {bimestre_id: '5a25bc18-32d3-47c2-bd20-a23445404dc6', nombre:'BIMESTRE 3',activo: false},
    {bimestre_id: '5a25bc18-32d4-47c2-bd30-a23445404dc6', nombre:'BIMESTRE 4',activo: false}
  ]

  dataSource = this.bimestres;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(BimestreFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }
}
