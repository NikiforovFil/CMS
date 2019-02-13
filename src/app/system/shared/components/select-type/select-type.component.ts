import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountersTypes } from '../../models/countersTypes.model';

@Component({
  selector: 'yh-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss']
})
export class SelectTypeComponent implements OnInit {
  @Output() sendSelectedItems = new EventEmitter<[]>();

  //загрузка названий всех типов счетчиков
  countersTypes = CountersTypes();

  //переменные для multiselect
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    //мултиселект
    this.dropdownList = [];
    for (let key in this.countersTypes) {
      let item = {
        item_id: this.countersTypes[key].type,
        item_text: this.countersTypes[key].name,
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
