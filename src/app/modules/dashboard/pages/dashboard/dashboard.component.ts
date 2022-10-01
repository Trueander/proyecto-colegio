import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Bimestre 1'},
    {value: 'pizza-1', viewValue: 'Bimestre 2'},
    {value: 'tacos-2', viewValue: 'Bimestre 3'},
    {value: 'tacos-2', viewValue: 'Bimestre 4'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
