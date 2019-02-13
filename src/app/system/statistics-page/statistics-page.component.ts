import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StatisticService } from '../shared/services/statistic.service';

@Component({
  selector: 'yh-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})

export class StatisticsPageComponent implements OnInit {
  isLoaded = false;
  ccUser;

  //общая сумма платежей
  labels: [];
  dataValuePayments = [{ data: [] }];

  //общий процент пользователей
  dataPersentsUsers = [{ data: [] }];

  //самые популярные услуги
  dataTopServices = [{ data: [] }];

  //количество обращений
  dataAmountAppeals: number[];

  //количество пользователей
  dataAmountUsers = [{ data: [] }];

  //количество поданных платежей
  dataAmountPayments = [{ data: [] }];

  //количество заказанных услуг
  dataAmountOrders = [{ data: [] }];

  constructor(public statisticService: StatisticService, private title: Title) {
    title.setTitle('Статистика');
  }


  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    this.statisticService.getPaymentsData(this.ccUser.id)
      .subscribe((data: []) => {
        //общая сумма плтежей
        this.labels = data['rusMonth'];
        this.labels.reverse();
        this.dataValuePayments[0]['data'] = data['payments_data'];

        //общий процент пользователей
        this.dataPersentsUsers[0]['data'] = data['persents_users'];

        //самые популярные услуги
        this.dataTopServices = data['top_services'];

        //количество обращений
        this.dataAmountAppeals = data['amount_appeal'];

        //количество пользователей
        this.dataAmountUsers[0]['data'] = data['users_data'];

        //количество поданных платежей
        this.dataAmountPayments[0]['data'] = data['payments_amount'];

        //количество заказанных услуг
        this.dataAmountOrders[0]['data'] = data['orders_amount'];


        this.isLoaded = true;
      })
  }
}
