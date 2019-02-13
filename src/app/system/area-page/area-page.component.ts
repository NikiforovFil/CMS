import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlCompany } from 'src/app/shared/models/control-company.model';
import { User } from '../shared/models/user.model';
import { CountersTypes } from '../shared/models/countersTypes.model';
import { AreaService } from '../shared/services/area.service';
import { Area } from '../shared/models/area.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yh-area-page',
  templateUrl: './area-page.component.html',
  styleUrls: ['./area-page.component.scss']
})
export class AreaPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  isDetailVisible = false;
  s1: Subscription;

  ccUser: ControlCompany;

  areaList: Area[];
  allUsers: User[];
  areaItem: Area;
  // для уменьшения трафика можно убрать все лишние поля из таблицы users

  countersTypes = CountersTypes();

  //переменные для поиска
  searchValue;
  selectedItems;

  formAdd: FormGroup;
  modalRef: BsModalRef;

  constructor(private areaService: AreaService, 
    private modalService: BsModalService, 
    private title: Title
    ) {
      title.setTitle('Список адресов');
    }

  ngOnInit() {
    //вытаскивание из локальной переменной браузера данные пользователя
    this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));

    //получение показаний счетчиков при инициализации страницы
    this.s1 = this.areaService.getAreaList(this.ccUser.id)
      .subscribe((data: Area[]) => {
        this.areaList = data['areaList'];
        this.areaList.reverse();

        this.isLoaded = true;
      });
  }

  openModal(template: TemplateRef<any>) {
    this.formAdd = new FormGroup({
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'home': new FormControl(null),
      'liter': new FormControl(null)
    });

    this.modalRef = this.modalService.show(template);
  }

  //получение введенных в поиск значений
  searchValueChange(value) {
    this.searchValue = value;
  }
  selectedTypeChange(value) {
    this.selectedItems = value;
  }

  //обращение к списку счетчиков для получения русского названия
  private getRusName(list) {
    let rusName = [];

    //перебор входящего массива со списком счетчиков
    for (let key in list) {
      //внутри перебор массива с названиями типов счетчиков
      for (let i in this.countersTypes) {
        //сравнение с нужным типом счетчика и запушивание его названия на русском
        if (this.countersTypes[i].type === list[key]) {
          rusName.push(this.countersTypes[i].name)
        }
      }
    }
    return rusName;
  }

  formCounterList(item) {
    //добавление в массив всех значений равных 1 (действующие счетчики + случайный мусор типо id и тд)
    let counterList = [];
    item['type'] = [];
    for (let key in item) {
      if (item[key] == 1) {
        counterList.push(key);
        item['type'] += (key) + ', ';
      }
    }
    //филтрация по уникальным значениям
    counterList.filter((f) => {
      counterList.indexOf(f) === -1;
    })
    //передача в метод, преобразующий в русский список
    return this.getRusName(counterList);
  }

  openDetail(item: Area) {
    if (!this.isDetailVisible) {
      this.isDetailVisible = true;
      this.areaItem = item;
    } else if (this.areaItem !== item) {
      this.isDetailVisible = true;
      this.areaItem = item;
    } else {
      this.isDetailVisible = false;
    }
  }

  onAddArea() {
    this.isLoaded = false;
    return this.areaService.addArea(this.ccUser.id, this.formAdd.value)
      .subscribe(() => {
        this.ngOnInit();
        this.isLoaded = true;
      });
  }
  getLiter(area: Area){
    if(area.liter) {
      return area.liter;
    } else {
      return '-'
    }
  }
  onApply(){
    this.ngOnInit();
  }
  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }
}
