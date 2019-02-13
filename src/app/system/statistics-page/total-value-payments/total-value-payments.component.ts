import { Component, Input } from '@angular/core';

@Component({
  selector: 'yh-total-value-payments',
  templateUrl: './total-value-payments.component.html',
  styleUrls: ['./total-value-payments.component.scss']
})
export class TotalValuePaymentsComponent {
  @Input() public chartDatasets: Array<any>
  @Input() public chartLabels: Array<any>
  
  public chartType: string = 'bar';

  // public chartDatasets: Array<any> = [
  //   { data: [273321, 362156, 301245, 354245, 452786, 436457, 512452] }
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
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
