import { Component, OnInit, OnDestroy } from '@angular/core';

import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { CountersService } from '../shared/services/counters.service';
import { Counter } from '../shared/models/counter.model';
import { Subscription } from 'rxjs';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';
import { getRusType, getStrAddress, getAccount } from '../shared/models/countersTypes.model'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-counters-page',
  templateUrl: './counters-page.component.html',
  styleUrls: ['./counters-page.component.scss']
})

export class CountersPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;

  ccUser: ControlCompany;
  countersData: Counter[];
  counter: Counter;
  allUsers: User[];
  // для уменьшения трафика можно убрать все лишние поля из таблицы users

  isDetailVisible = false;

  //переменные для поиска
  searchValue;
  selectedItems;
  firstDate;
  secondDate;

  constructor(private service: CountersService, private usersSerevice: UsersService, private title: Title
    ) {
      title.setTitle('Показания счетчиков');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение показаний счетчиков при инициализации страницы
    this.s1 = this.service.getCountersData(this.ccUser.id).subscribe((data: Counter[]) => {
      this.countersData = data['counters_data'];
      this.countersData.reverse();

      this.usersSerevice.getAllUsers(this.ccUser.id).subscribe((data) => {
        this.allUsers = data['users'];
        this.isLoaded = true;
      });
    });
  }

  //получение введенных в поиск значений
  searchValueChange(value) {
    this.searchValue = value;
  }
  selectedTypeChange(value) {
    this.selectedItems = value;
  }
  selectedFirstDate(value?) {
    this.firstDate = value;
  }
  selectedSecondDate(value?) {
    this.secondDate = value;
  }

  openDetail(counter) {
    if (!this.isDetailVisible) {
      this.isDetailVisible = true;
      this.counter = counter;
    } else if (this.counter !== counter) {
      this.isDetailVisible = true;
      this.counter = counter;
    } else {
      this.isDetailVisible = false;
    }
  }

  getName(type) {
    return getRusType(type);
  }

  getAddress(counter) {
    var result = getStrAddress(counter, this.allUsers);
    counter['address'] = result;
    return result;
  }

  getAcc(counter) {
    return getAccount(counter, this.allUsers);
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}
