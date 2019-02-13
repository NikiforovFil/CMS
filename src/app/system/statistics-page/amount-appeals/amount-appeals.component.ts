import { Component, Input } from '@angular/core';

@Component({
  selector: 'yh-amount-appeals',
  templateUrl: './amount-appeals.component.html',
  styleUrls: ['./amount-appeals.component.scss']
})
export class AmountAppealsComponent {
  @Input() amountAppeals;

  getWorking():number {
    return this.amountAppeals['working'] ? this.amountAppeals['working'] : 0;
    
  }

  getDone():number {
    return this.amountAppeals['done'] ? this.amountAppeals['done'] : 0;
  }

  getNew():number {
    return this.amountAppeals['new'] ? this.amountAppeals['new'] : 0;
  }

  sum():number {
    return ((+this.getDone()) + (+this.getNew()) + (+this.getWorking()));
  }
}
