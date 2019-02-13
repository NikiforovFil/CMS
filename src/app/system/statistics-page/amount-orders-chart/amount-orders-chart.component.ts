import { Component, Input } from '@angular/core';
import { amountOrdersData } from '../../shared/models/data-charts.model';

@Component({
  selector: 'yh-amount-orders-chart',
  templateUrl: './amount-orders-chart.component.html',
  styleUrls: ['./amount-orders-chart.component.scss']
})
export class AmountOrdersChartComponent {
  @Input() public chartDatasets: Array<any>;
  @Input() public chartLabels: Array<any>;

  public chartType: string = 'bar';

  // public chartDatasets: Array<any> = [
  //   { data: [111, 136, 170, 203, 234, 240, 263] }
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

  // amountOrdersData: any[];

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
  //   Object.assign(this, { amountOrdersData })
  // }

  // onSelect(event) {
  //   console.log(event);
  // }
}
