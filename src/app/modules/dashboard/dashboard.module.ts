import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { AdvancesPiechartComponent } from './components/advances-piechart/advances-piechart.component';
import { ReporteEstudianteComponent } from './pages/reporte-estudiante/reporte-estudiante.component';
import { HorizontalBarchartComponent } from './components/horizontal-barchart/horizontal-barchart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent,
    AdvancesPiechartComponent,
    ReporteEstudianteComponent,
    HorizontalBarchartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
