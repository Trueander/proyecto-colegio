import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rutas: any = [
    {
      nombre: 'Dashboard',
      ruta: '/dashboard',
      icon: 'speed'
    },
    {
      nombre: 'Aulas',
      ruta: '/aulas',
      icon: 'library_books'
    },
    {
      nombre: 'Docentes',
      ruta: '/docentes',
      icon: 'groups'
    },
    {
      nombre: 'Estudiantes',
      ruta: '/estudiantes',
      icon: 'face_6'
    },
    {
      nombre: 'Cursos',
      ruta: '/cursos',
      icon: 'auto_stories'
    },
    {
      nombre: 'Grados',
      ruta: '/grados',
      icon: 'padding'
    },
    {
      nombre: 'Bimestres',
      ruta: '/bimestres',
      icon: 'grid_view'
    }
  ]

  constructor() { }

  ngOnInit(): void {
     
  }



}
