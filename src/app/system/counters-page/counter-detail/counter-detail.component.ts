import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Counter } from '../../shared/models/counter.model';
import { UsersService } from '../../shared/services/users.service';
import { Subscription } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'yh-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.scss']
})
export class CounterDetailComponent implements OnInit, OnDestroy {
  @Input() counter: Counter;

  isLoaded = false;
  s1: Subscription;

  user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.s1 = this.usersService.getUserByUid(this.counter.uid)
      .subscribe((data: User) => {
        this.user = data;
        this.isLoaded = true;
      });
  }
  ngOnDestroy() {
    if (this.s1) { this.s1.unsubscribe() }
  }
}
