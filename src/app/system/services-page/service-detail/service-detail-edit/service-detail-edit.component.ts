import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Services } from 'src/app/system/shared/models/services.model';
import { ServicesService } from 'src/app/system/shared/services/services.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'yh-service-detail-edit',
  templateUrl: './service-detail-edit.component.html',
  styleUrls: ['./service-detail-edit.component.scss']
})
export class ServiceDetailEditComponent implements OnInit {
  @Input() serviceItem: Services;

  @Output() onChangeApply = new EventEmitter<any>();
  @Output() onChangeCancel = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  s1: Subscription;

  form: FormGroup;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.serviceItem.name, Validators.required),
      description: new FormControl(this.serviceItem.description, Validators.required),
      category: new FormControl(this.serviceItem.category, Validators.required),
      email: new FormControl(this.serviceItem.email, Validators.required),
      img: new FormControl(this.serviceItem.img)
    });

  }

  private setServiceData(newServiceItem: Services) {
    this.s1 = this.service.editService(newServiceItem).subscribe();
  }

  applyChange() {
    const formData: Services = this.form.value;
    
    //почему то работает только при назначении вручную(может быть потому что сейчас 1 января 2 часа ночи!?) переделать
    this.serviceItem.name = formData.name;
    this.serviceItem.description = formData.description;
    this.serviceItem.category = formData.category;
    this.serviceItem.email = formData.email;
    this.serviceItem.img = formData.img;

    //изменение данных в бд
    this.setServiceData(this.serviceItem);

    //закрытие + перезагрузка
    this.onChangeApply.emit();
  }
  closeChange() {
    //только закрытие редактирования
    this.onChangeCancel.emit();
  }

  deleteService(){
    this.onDelete.emit();
  }
}
