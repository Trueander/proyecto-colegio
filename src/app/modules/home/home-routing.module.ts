import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import(`../dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: 'aulas',
    loadChildren: () => import(`../aulas/aulas.module`).then(m => m.AulasModule)
  },
  {
    path: 'docentes',
    loadChildren: () => import(`../docentes/docentes.module`).then(m => m.DocentesModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import(`../cursos/cursos.module`).then(m => m.CursosModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import(`../estudiantes/estudiantes.module`).then(m => m.EstudiantesModule)
  },
  {
    path: 'grados',
    loadChildren: () => import(`../grados/grados.module`).then(m => m.GradosModule)
  },
  {
    path: 'bimestres',
    loadChildren: () => import(`../bimestres/bimestres.module`).then(m => m.BimestresModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
