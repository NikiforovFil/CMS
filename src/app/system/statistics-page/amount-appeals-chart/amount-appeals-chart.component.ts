import { Component, Input } from '@angular/core';
import { amountAppealsData } from '../../shared/models/data-charts.model';

@Component({
  selector: 'yh-amount-appeals-chart',
  templateUrl: './amount-appeals-chart.component.html',
  styleUrls: ['./amount-appeals-chart.component.scss']
})
export class AmountAppealsChartComponent {
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [4, 11, 7, 21, 25, 34, 27] }
  ];

  public chartLabels: Array<any> = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}


  // amountAppealsData: any[];

  // view: any[] = [500, 400];

  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = false;
  // showXAxisLabel = true;
  // xAxisLabel = 'Месяц';
  // showYAxisLabel = true;
  // yAxisLabel = 'Количество';

  // colorScheme = 'cool';

  // constructor() {
  //   Object.assign(this, { amountAppealsData })
  // }

  // onSelect(event) {
  //   console.log(event);
  // }
}
