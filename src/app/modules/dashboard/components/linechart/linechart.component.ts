import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.multi = [
      {
        name: '1ero A',
        series: [
          {
            name: 'Sem 1',
            value: 22,
          },
          {
            name: 'Sem 2',
            value: 33,
          },
          {
            name: 'Sem 3',
            value: 44,
          },
          {
            name: 'Sem 4',
            value: 15,
          },
          {
            name: 'Sem 5',
            value: 20,
          },
          {
            name: 'Sem 6',
            value: 12,
          },
          {
            name: 'Sem 7',
            value: 11,
          },
          {
            name: 'Sem 8',
            value: 33,
          }
        ],
      },
    
      {
        name: '1ero B',
        series: [
          {
            name: 'Sem 1',
            value: 11,
          },
          {
            name: 'Sem 2',
            value: 14,
          },
          {
            name: 'Sem 3',
            value: 11,
          },
          {
            name: 'Sem 4',
            value: 22,
          },
          {
            name: 'Sem 5',
            value: 33,
          },
          {
            name: 'Sem 6',
            value: 14,
          },
          {
            name: 'Sem 7',
            value: 15,
          },
          {
            name: 'Sem 8',
            value: 13,
          }
        ],
      },
    
      {
        name: '1ero C',
        series: [
          {
            name: 'Sem 1',
            value: 18,
          },
          {
            name: 'Sem 2',
            value: 33,
          },
          {
            name: 'Sem 3',
            value: 11,
          },
          {
            name: 'Sem 4',
            value: 20,
          },
          {
            name: 'Sem 5',
            value: 44,
          },
          {
            name: 'Sem 6',
            value: 14,
          },
          {
            name: 'Sem 7',
            value: 17,
          },
          {
            name: 'Sem 8',
            value: 18,
          }
        ],
      },
      {
        name: '1ero D',
        series: [
          {
            name: 'Sem 1',
            value: 14,
          },
          {
            name: 'Sem 2',
            value: 20,
          },
          {
            name: 'Sem 3',
            value: 44,
          },
          {
            name: 'Sem 4',
            value: 42,
          },
          {
            name: 'Sem 5',
            value: 35,
          },
          {
            name: 'Sem 6',
            value: 34,
          },
          {
            name: 'Sem 7',
            value: 15,
          },
          {
            name: 'Sem 8',
            value: 40,
          }
        ],
      },
      {
        name: '1ero E',
        series: [
          {
            name: 'Sem 1',
            value: 22,
          },
          {
            name: 'Sem 2',
            value: 24,
          },
          {
            name: 'Sem 3',
            value: 25,
          },
          {
            name: 'Sem 4',
            value: 44,
          },
          {
            name: 'Sem 5',
            value: 42,
          },
          {
            name: 'Sem 6',
            value: 43,
          },
          {
            name: 'Sem 7',
            value: 47,
          },
          {
            name: 'Sem 8',
            value: 46,
          }
        ],
      }
    ];

    Object.assign(this, { multi: this.multi });
  }
  ngOnInit(): void {
  }

}
