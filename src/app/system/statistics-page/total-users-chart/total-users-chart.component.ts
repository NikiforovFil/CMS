import { Component, Input } from '@angular/core';
import { totalUsersData } from '../../shared/models/data-charts.model'

@Component({
  selector: 'yh-total-users-chart',
  templateUrl: './total-users-chart.component.html',
  styleUrls: ['./total-users-chart.component.scss']
})
export class TotalUsersChartComponent {
  @Input() public chartDatasets: Array<any>;

  public chartType: string = 'doughnut';

  // public chartDatasets: Array<any> = [
  //   { data: [63, 37] }
  // ];

  public chartLabels: Array<any> = ['Количество квартир', 'Количество пользователей'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [ '#46BFBD',  '#959BA8'],
      // hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
