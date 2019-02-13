import { Component, Output, EventEmitter } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'yh-second-date',
  templateUrl: './second-date.component.html',
  styleUrls: ['./second-date.component.scss']
})
export class SecondDateComponent  {
  secondDate: Date;
  model;

  @Output() sendSecondDate = new EventEmitter<Date>();

  //переменная для отображения заглушки на дате
  isDateSecond = false;

  // //настройки datepicker
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
  // // Initialized to specific date (09.10.2018)
  // // model: any = { date: { year: 2018, month: 10, day: 9 } };
  
  unsetSecond() {
    this.isDateSecond = false;
    this.secondDate = null;
    this.sendSecondDate.emit(this.secondDate);
  }

  onSecondDateChanged(event: IMyDateModel): void {
    this.secondDate = event.jsdate;
    this.isDateSecond = true;
    this.sendSecondDate.emit(this.secondDate);
  }
}