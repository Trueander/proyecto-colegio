import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReporteEstudianteComponent } from './pages/reporte-estudiante/reporte-estudiante.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'estudiante',
    component: ReporteEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
