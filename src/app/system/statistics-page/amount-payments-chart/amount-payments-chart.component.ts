import { Component, Input } from '@angular/core';
import { amountPaymentsData } from '../../shared/models/data-charts.model'

@Component({
  selector: 'yh-amount-payments-chart',
  templateUrl: './amount-payments-chart.component.html',
  styleUrls: ['./amount-payments-chart.component.scss']
})
export class AmountPaymentsChartComponent {
  @Input() public chartDatasets: Array<any>;
  @Input() public chartLabels: Array<any>;
  
  public chartType: string = 'bar';

  // public chartDatasets: Array<any> = [
  //   { data: [70, 136, 211, 278, 335, 324, 386] }
  // ];

  // public chartLabels: Array<any> = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  // amountPaymentsData: any[];

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
  //   Object.assign(this, { amountPaymentsData })
  // }

  // onSelect(event) {
  //   console.log(event);
  // }

}
