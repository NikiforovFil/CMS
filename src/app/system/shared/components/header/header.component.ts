import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'yh-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  //переменые для вывода информации
  date: Date = new Date();
  ccUser: ControlCompany;

  form: FormGroup;
  modalRef: BsModalRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    //при инициализации происходит выгрузка переменных из браузера(со страницы авторизации)
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));
  }

  //функция для кнопки выхода
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openModal(template: TemplateRef<any>) {
    //привязка формы 
    this.form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });

    this.modalRef = this.modalService.show(template);
  }

  onContact(){
    console.log(this.form.get('title').value);
    console.log(this.form.get('description').value);
  }
}
