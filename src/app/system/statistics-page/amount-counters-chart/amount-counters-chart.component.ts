import { Component } from '@angular/core';
import { amountCountersData } from '../../shared/models/data-charts.model'

@Component({
  selector: 'yh-amount-counters-chart',
  templateUrl: './amount-counters-chart.component.html',
  styleUrls: ['./amount-counters-chart.component.scss']
})
export class AmountCountersChartComponent {
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [130, 304, 296, 363, 331, 373, 386] }
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
  
  // amountCountersData: any[];

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
  //   Object.assign(this, { amountCountersData })
  // }

  // onSelect(event) {
  //   console.log(event);
  // }
}
