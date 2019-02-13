import { Component, Input } from '@angular/core';

@Component({
  selector: 'yh-amount-users-graph',
  templateUrl: './amount-users-graph.component.html',
  styleUrls: ['./amount-users-graph.component.scss']
})
export class AmountUsersGraphComponent {
  @Input() public chartDatasets: Array<any>;
  @Input() public chartLabels: Array<any>;
  public chartType: string = 'line';


  // public chartDatasets: Array<any> = [
  //   { data: [13, 59, 80, 81, 115, 130, 163], label: 'My First dataset' }
  // ];

  // public chartLabels: Array<any> = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



  // amountUsersData: any[];

  // view: any[] = [500, 400];

  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = false;
  // showXAxisLabel = true;
  // xAxisLabel = 'Месяц';
  // showYAxisLabel = true;
  // yAxisLabel = 'Кол-во пользователей';

  // colorScheme = {
  //   domain: ['#374799', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // constructor() {
  //   Object.assign(this, { amountUsersData })
  // }

  // onSelect(event) {
  //   console.log(event);
  // }
}
