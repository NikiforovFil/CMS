import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { AppealService } from '../shared/services/appeal.service';
import { Appeal } from '../shared/models/appeal.model';
import { Subscription } from 'rxjs';
import { getAccount } from '../shared/models/countersTypes.model'
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.scss']
})


export class MailPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;

  ccUser: ControlCompany;
  appeals: Appeal[];
  appealItem: Appeal;
  allUsers: User[];
  acc;

  isDetailVisible = false;

  isStatus = 'now';

  //переменные для поиска
  searchValue;
  selectedItems;
  firstDate;
  secondDate;

  constructor(private service: AppealService, private usersService: UsersService, private title: Title
    ) {
      title.setTitle('Обращения');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение новостей при инициализации страницы
    this.s1 = this.service.getAppeal(this.ccUser.id)
      .subscribe((data: Appeal[]) => {
        this.appeals = data['appeal'];
        this.appeals.reverse();

        this.usersService.getAllUsers(this.ccUser.id).subscribe((data) => {
          this.allUsers = data['users'];
          this.isLoaded = true;
        })
      });
  }

  //получение введенных в поиск значений
  searchValueChange(value) {
    this.searchValue = value;
  }
  selectedTypeChange(value) {
    this.selectedItems = value;
  }
  selectedFirstDate(value) {
    this.firstDate = value;
  }
  selectedSecondDate(value) {
    this.secondDate = value;
  }

  private toggleDetailVisibility(data: boolean) {
    this.isDetailVisible = data;
  }

  openDetail(appeal: Appeal) {
    if(this.allUsers[appeal.uid].account) {
      this.acc = this.allUsers[appeal.uid].account;
    } else {
      this.acc = 'отсутствует';
    }

    if (!this.isDetailVisible) {
      this.appealItem = appeal;
      this.toggleDetailVisibility(true);
    } else if (this.appealItem !== appeal) {
      this.appealItem = appeal;
      this.acc = appeal;
      this.toggleDetailVisibility(true);
    } else {
      this.toggleDetailVisibility(false);
    }
  }

  onDetailApply() {
    this.toggleDetailVisibility(false);
    this.ngOnInit();
  }

  onDetailCancel() {
    this.toggleDetailVisibility(false);
  }

  getAcc(appeal) {
    return getAccount(appeal, this.allUsers);
  }
  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}
