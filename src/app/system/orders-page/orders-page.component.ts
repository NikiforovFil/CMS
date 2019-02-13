import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { Subscription } from 'rxjs';
import { getAccount } from '../shared/models/countersTypes.model'
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { OrdersService } from '../shared/services/orders.service';
import { Order } from '../shared/models/order.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})


export class OrdersPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;

  ccUser: ControlCompany;
  orders: Order[];
  orderItem: Order;
  allUsers: User[];

  isDetailVisible = false;

  isStatus = 'now';

  //переменные для поиска
  searchValue;
  selectedItems;
  firstDate;
  secondDate;

  constructor(private ordersService: OrdersService, 
    private usersService: UsersService, 
    private title: Title
    ) {
      title.setTitle('Список заказов');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение новостей при инициализации страницы
    this.s1 = this.ordersService.getOrders(this.ccUser.id)
      .subscribe((data: Order[]) => {
        this.orders = data['orders'];
        this.isLoaded = true;
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

  openDetail(order: Order) {
    if (!this.isDetailVisible) {
      this.orderItem = order;
      this.toggleDetailVisibility(true);
    } else if (this.orderItem !== order) {
      this.orderItem = order;
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

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}
