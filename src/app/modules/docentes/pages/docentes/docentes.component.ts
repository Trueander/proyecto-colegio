import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocenteFormComponent } from '../../components/docente-form/docente-form.component';

interface Docente {
  docente_id: string;
  nombres: string;
  apellidos: string;
  dni: string;
}

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'apellidos', 'dni','acciones'];

  docentes: Docente[] = [
    {docente_id: '3a5d21d1-28c3-4206-806e-59bc00119539', nombres:'JOSE RONALDO', apellidos: 'PERALES PORTA', dni: '70267152'},
    {docente_id: '3a5d21d1-28c3-4206-806e-52bc00119539', nombres:'ROSA ROSITA', apellidos: 'CORALES REVER', dni: '70267153'},
    {docente_id: '3a5d21d1-28c3-4206-806e-53bc00119539', nombres:'ARNOLD PEDRO ROBERTO', apellidos: 'MARQUEZ MARIAN', dni: '70467159'},
    {docente_id: '3a5d21d1-28c3-4206-806e-54bc00119539', nombres:'GERARD MANUEL', apellidos: 'BENGOLEA SANCHEZ', dni: '740267159'},
    {docente_id: '3a5d21d1-28c3-4206-806e-55bc00119539', nombres:'GENESIS MAITE', apellidos: 'ROSAS FLOR', dni: '73267159'},
  ]

  dataSource = this.docentes;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DocenteFormComponent, {
      width: '400px',
      restoreFocus: false
    });
  }



}
