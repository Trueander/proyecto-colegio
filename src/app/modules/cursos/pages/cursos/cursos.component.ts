import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoFormComponent } from '../../components/curso-form/curso-form.component';

interface Curso {
  curso_id: string;
  nombre: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'acciones'];

  cursos: Curso[] = [
    {curso_id: '5a25bc18-32de-47c2-bd60-a23445404dc6', nombre:'MATEMÁTICA'},
    {curso_id: '5a25bc18-32de-47c2-bd10-a23445404dc6', nombre:'COMUNICACIÓN'},
    {curso_id: '5a25bc18-32de-47c2-bd20-a23445404dc6', nombre:'CTA'},
    {curso_id: '5a25bc18-32de-47c2-bd30-a23445404dc6', nombre:'PERSONAL SOCIAL'},
    {curso_id: '5a25bc18-32de-47c2-bd40-a23445404dc6', nombre:'QUÍMICA'},
    {curso_id: '5a25bc18-32de-47c2-bd50-a23445404dc6', nombre:'EDUCACIÓN FÍSICA'},
    {curso_id: '5a25bc18-32de-47c2-bd70-a23445404dc6', nombre:'INGLÉS'},
    {curso_id: '5a25bc18-32de-47c2-bd80-a23445404dc6', nombre:'ARTE'},
    {curso_id: '5a25bc18-32de-47c2-bd90-a23445404dc6', nombre:'HISTORIA'}
  ]

  dataSource = this.cursos;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(CursoFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }

}
