import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NewsService } from '../shared/services/news.service';
import { News } from '../shared/models/news.model';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;
  s2: Subscription;
  s3: Subscription;
  s4: Subscription;

  ccUser: ControlCompany;
  ccNewsList: News[];
  newsItem: News;

  modalRef: BsModalRef;

  formEdit: FormGroup;
  formAdd: FormGroup;

  constructor(
    private newsService: NewsService,
    private modalService: BsModalService,
    private title: Title
  ) {
    title.setTitle('Новости');
  }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя(можно сделать инпут из хэдера)
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение новостей при иницциализации страницы
    this.newsService.getNews(this.ccUser.id).subscribe((data: News) => {
      this.ccNewsList = data['cc_news'];
      this.ccNewsList.reverse();
      this.isLoaded = true;
    });
  }

  openModal(template: TemplateRef<any>, news?: News) {
    this.newsItem = news;

    if (news) {
      //привязка формы редактирование новости
      this.formEdit = new FormGroup({
        'title': new FormControl(this.newsItem.title),
        'description': new FormControl(this.newsItem.description),
        'img': new FormControl(this.newsItem.img)
      });
    } else {
      //привязка формы добавления  новости
      this.formAdd = new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'img': new FormControl('')
      });
    }
    this.modalRef = this.modalService.show(template);
  }

  onEditNews() {
    // передача данных формы в сервис и в api
    this.isLoaded = false;
    this.s2 = this.newsService.editNews(this.ccUser.id, this.newsItem.nid, this.formEdit.value)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      });
  }

  onAddNews() {
    // передача данных формы в сервис и в api
    this.isLoaded = false;
    this.s3 = this.newsService.addNews(this.ccUser.id, this.formAdd.value)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      });
  }

  onDeleteNews() {
    this.isLoaded = false;
    this.s4 = this.newsService.deleteNews(this.newsItem.nid)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      });
  }
  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
    if (this.s2) this.s2.unsubscribe();
    if (this.s3) this.s3.unsubscribe();
    if (this.s4) this.s4.unsubscribe();
  }
}
