import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  
  single: any[] = [];
  multi: any[] = [];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = 
    [
      {name:'Aprobado', value: '#3f51b5'},
      {name:'Desaprobado', value: '#e86060'}
    ]
  ;
 

  constructor() { }

  ngOnInit(): void {
    this.multi = [
      {
        "name": "1ero A",
        "series": [
          {
            "name": "Aprobado",
            "value": 24
          },
          {
            "name": "Desaprobado",
            "value": 6
          }
        ]
      },
    
      {
        "name": "1ero B",
        "series": [
          {
            "name": "Aprobado",
            "value": 25
          },
          {
            "name": "Desaprobado",
            "value": 4
          }
        ]
      },
    
      {
        "name": "1ero C",
        "series": [
          {
            "name": "Aprobado",
            "value": 23
          },
          {
            "name": "Desaprobado",
            "value": 7
          }
        ]
      },
      {
        "name": "1ero D",
        "series": [
          {
            "name": "Aprobado",
            "value": 13
          },
          {
            "name": "Desaprobado",
            "value": 16
          }
        ]
      },
      {
        "name": "1ero E",
        "series": [
          {
            "name": "Aprobado",
            "value": 16
          },
          {
            "name": "Desaprobado",
            "value": 15
          }
        ]
      }
    ];
    Object.assign(this, { multi: this.multi })
  }

  onSelect(event: any) {
    console.log(event);
  }

}
