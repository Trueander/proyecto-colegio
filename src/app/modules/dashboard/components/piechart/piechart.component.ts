import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  single: any[] = [];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition= LegendPosition.Right;

  constructor() { }

  ngOnInit(): void {

    this.single = [
      {
        "name": "1ero A",
        "value": 8940000
      },
      {
        "name": "1ero B",
        "value": 5000000
      },
      {
        "name": "1ero C",
        "value": 7200000
      },
      {
        "name": "1ero D",
        "value": 6200000
      },
      {
        "name": "1ero E",
        "value": 4200000
      }
    ];

    Object.assign(this, { single: this.single });
  }

  obtenerPorcentajeAula() {
    
  }

}
