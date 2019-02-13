import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

import { ServicesService } from '../shared/services/services.service';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { Services } from '../shared/models/services.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;
  s2: Subscription;
  s3: Subscription;

  ccUser: ControlCompany;
  allServices: Services[];
  ccServices: Services[];
  serviceItem: Services;

  isDetailVisible = false;

  modalRef: BsModalRef;
  formAdd: FormGroup;

  constructor(private service: ServicesService, 
    private modalService: BsModalService,
    private title: Title
    ) {
      title.setTitle('Услуги');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя(можно сделать инпут из хэдера)
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение новостей при инициализации страницы
    this.s1 = this.service.getServices(this.ccUser.id).subscribe((data: Services[]) => {
      this.allServices = data['services_all'];
      this.ccServices = data['services_cc'];
      this.isLoaded = true;
    });
  }

  private toggleDetailVisibility(data: boolean) {
    this.isDetailVisible = data;
  }

  openDetail(service: Services) {
    if (!this.isDetailVisible) {
      this.serviceItem = service;
      this.toggleDetailVisibility(true);
    } else {
      this.toggleDetailVisibility(false);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.formAdd = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'img': new FormControl('')
    });

    this.modalRef = this.modalService.show(template);
  }

  onAddService() {
    this.isDetailVisible = false;
    this.isLoaded = false;
    this.s2 = this.service.addService(this.formAdd.value, this.ccUser.id)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      });
  }

  onDeleteService() {
    this.isDetailVisible = false;
    this.isLoaded = false;
    this.s3 = this.service.deleteService(this.serviceItem.sid)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      })
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
    if (this.s2) this.s2.unsubscribe();
    if (this.s3) this.s3.unsubscribe();
  }
}
