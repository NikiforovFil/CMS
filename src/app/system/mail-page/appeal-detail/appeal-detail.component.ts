import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Appeal } from '../../shared/models/appeal.model';
import { AppealService } from '../../shared/services/appeal.service';

@Component({
  selector: 'yh-appeal-detail',
  templateUrl: './appeal-detail.component.html',
  styleUrls: ['./appeal-detail.component.scss']
})
export class AppealDetailComponent {
  @Output() onDetailApply = new EventEmitter<any>();

  @Input() appealItem: Appeal;
  @Input() acc: string;

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
    this.setStatus(status, this.appealItem);
  }
}

