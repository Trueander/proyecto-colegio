import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GradoFormComponent } from '../../components/grado-form/grado-form.component';

interface Grado {
  grado_id: string;
  nombre: string;
}

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.scss']
})
export class GradosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'acciones'];

  grados: Grado[] = [
    {grado_id: '5a25bc18-32de-47c2-bd60-a23445404dc6', nombre:'1ERO'},
    {grado_id: '5a25bc18-32de-47c2-bd10-a23445404dc6', nombre:'2DO'},
    {grado_id: '5a25bc18-32de-47c2-bd20-a23445404dc6', nombre:'3RO'},
    {grado_id: '5a25bc18-32de-47c2-bd30-a23445404dc6', nombre:'4TO'},
    {grado_id: '5a25bc18-32de-47c2-bd40-a23445404dc6', nombre:'5TO'},
    {grado_id: '5a25bc18-32de-47c2-bd50-a23445404dc6', nombre:'6TO'}
  ]

  dataSource = this.grados;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(GradoFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }
}
