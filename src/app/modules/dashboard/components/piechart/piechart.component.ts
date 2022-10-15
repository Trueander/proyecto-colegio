import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  @Input() reporteNotas: any;

  single: any[] = [];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition= LegendPosition.Right;

  constructor() { }

  ngOnInit(): void {
    this.single= [];
    if(this.reporteNotas){
      this.cargarDatosDelReporte();
    }
    Object.assign(this, { single: this.single });
  }

  ngOnChanges() {
    this.single= [];
    if(this.reporteNotas){
      this.cargarDatosDelReporte();
    }

    Object.assign(this, { multi: this.single })
  }

  cargarDatosDelReporte() {
    this.reporteNotas.forEach((r: any) => {
      this.single.push({
          "name": r.nombre_aula,
          "value": r.aprobados
      })
    })
  }
}
