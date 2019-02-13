import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yh-select-status',
  templateUrl: './select-status.component.html',
  styleUrls: ['./select-status.component.scss']
})
export class SelectStatusComponent implements OnInit {
  @Output() sendSelectedItems = new EventEmitter<[]>();

  //загрузка названий всех типов счетчиков
  appealTypes = [
    {type: 'new', name: 'Новое'},
    {type: 'working', name: 'В работе'},
    {type: 'done', name: 'Выполнено'},
  ];

  //переменные для multiselect
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    //мултиселект
    this.dropdownList = [];
    for (let key in this.appealTypes) {
      let item = {
        item_id: this.appealTypes[key].type,
        item_text: this.appealTypes[key].name,
      }
      this.dropdownList.push(item);
    }
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  selectedItemsChange(value: []) {
    this.sendSelectedItems.emit(value);
  }
}
