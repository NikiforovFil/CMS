import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { Payment } from '../../shared/models/payment.model';

@Component({
  selector: 'yh-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit, OnDestroy {
  @Input() payment: Payment;
  isLoaded = false;
  s1: Subscription;

  user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.s1 = this.usersService.getUserByUid(this.payment.uid)
      .subscribe((data: User) => {
        this.user = data;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.s1) { this.s1.unsubscribe() }
  }
}
