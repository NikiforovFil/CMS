import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { CountersTypes, getRusType, getAccount, getStrAddress } from '../shared/models/countersTypes.model';
import { User } from '../shared/models/user.model';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { Subscription } from 'rxjs';
import { Payment } from '../shared/models/payment.model';
import { PaymentsService } from '../shared/services/payments.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})
export class PaymentsPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;

  ccUser: ControlCompany;
  payments: Payment[];
  allUsers: User[];
  payment: Payment;
  // для уменьшения трафика можно убрать все лишние поля из таблицы users

  isDetailVisible = false;

  //загрузка названий всех типов счетчиков
  countersTypes = CountersTypes();

   //переменные для поиска
   searchValue;
   selectedItems;
   firstDate;
   secondDate;

  constructor(private paymentsService: PaymentsService, 
    private usersSerevice: UsersService,
    private title: Title
    ) {
      title.setTitle('Платежи');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение платежей при инициализации страницы
    this.s1 = this.paymentsService.getPayments(this.ccUser.id)
      .subscribe((data: Payment[]) => {
        if (data['success'] != 415){
          this.payments = data['payments'];
          this.payments.reverse();
        } else {
          this.payments = []
        }

        //получение списка всех юзеров 
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
  selectedFirstDate(value) {
    this.firstDate = value;
  }
  selectedSecondDate(value) {
    this.secondDate = value;
  }

  //получение русских названий счетчиков (напрямую вызов импорт функции из хтмл не работает )
  getType(type: string) {
    return getRusType(type);
  }
//формирование строки адреса
  getAddress(counter) {
    var result = getStrAddress(counter, this.allUsers);
    counter['address'] = result;
    return result;
  }

  //получение лицевого счета
  getAcc(counter) {
    return getAccount(counter, this.allUsers);
  }

  openDetail(payment){
    if (!this.isDetailVisible) {
      this.isDetailVisible = true;
      this.payment = payment;
    } else if (this.payment !== payment) {
      this.isDetailVisible = true;
      this.payment = payment;
    } else {
      this.isDetailVisible = false;
    }
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}
