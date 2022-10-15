import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advances-piechart',
  templateUrl: './advances-piechart.component.html',
  styleUrls: ['./advances-piechart.component.css']
})
export class AdvancesPiechartComponent implements OnInit {

  @Input() reporteNotas: any;

  single: any[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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
          "value": r.desaprobados
      })
    })
  }

}
