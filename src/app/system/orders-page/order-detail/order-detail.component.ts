import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Appeal } from '../../shared/models/appeal.model';
import { AppealService } from '../../shared/services/appeal.service';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'yh-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  @Output() onDetailApply = new EventEmitter<any>();

  @Input() orderItem: Order;

  isLoaded = true;

  // индикатор успешности изменения статуса
  code: number;

  constructor(private service: AppealService) { }

  private setStatus(status: string, appeal: Appeal) {
    this.isLoaded = false;
    this.service.editStatusAppeal(status, appeal)
      .subscribe((c: number) => {
        this.code = c;
        this.isLoaded = true;
        this.onDetailApply.emit();
      });
    //добавить индикацию изменения статуса
  }

  applyDetail(status: string) {
    this.setStatus(status, this.orderItem);
  }

  getAcc(order: Order){
    if(order.account) {
      return order.account
    } else {
      return 'отсутствует';
    }
  }
}

