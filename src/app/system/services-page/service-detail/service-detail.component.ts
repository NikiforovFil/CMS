import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Services } from '../../shared/models/services.model';

@Component({
  selector: 'yh-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent {
  @Input() serviceItem: Services;

  @Output() onDeleteService = new EventEmitter<any>();

  isEdit = false;

  onChange() {
    this.isEdit = true;
  }

  onChangeApply() {
    this.isEdit = false;
    //обновление таблицы после изменения
  }
  onChangeCancel() {
    this.isEdit = false;
  }
  onDelete() {
    this.onDeleteService.emit();
  }
}
