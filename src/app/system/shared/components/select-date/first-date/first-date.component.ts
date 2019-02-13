import { Component, Output, EventEmitter } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'yh-first-date',
  templateUrl: './first-date.component.html',
  styleUrls: ['./first-date.component.scss']
})
export class FirstDateComponent {
  firstDate: Date;
  @Output() sendFirstDate = new EventEmitter<Date>();
  model;

  //переменная для отображения заглушки на дате
  isDateFirst = false;

  //настройки datepicker
  myOptions: INgxMyDpOptions = {
    // other options...
    dayLabels: {
      su: 'Вс',
      mo: 'Пн',
      tu: 'Вт',
      we: 'Ср',
      th: 'Чт',
      fr: 'Пт',
      sa: 'Сб'
    },
    monthLabels: {
      1: 'Янв',
      2: 'Фев',
      3: 'Март',
      4: 'Апр',
      5: 'Май',
      6: 'Июнь',
      7: 'Июль',
      8: 'Авг',
      9: 'Сен',
      10: 'Окт',
      11: 'Ноя',
      12: 'Дек'
    },
    todayBtnTxt: 'Сегодня',
    dateFormat: 'dd.mm.yyyy',
  };
  // Initialized to specific date (09.10.2018)
  // model: any = { date: { year: 2018, month: 10, day: 9 } };


  unsetFirst() {
    this.isDateFirst = false;
    this.firstDate = null;
    this.sendFirstDate.emit(this.firstDate);
  }


  //datepicker
  onFirstDateChanged(event: IMyDateModel): void {
    // date selected
    this.firstDate = event.jsdate;
    this.isDateFirst = true;
    this.sendFirstDate.emit(this.firstDate);
  }
}
