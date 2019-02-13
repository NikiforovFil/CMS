import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yh-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  searchValue;

  @Output() sendSearchValue = new EventEmitter<string>();

  searchValueChange(value: string) {
    this.sendSearchValue.emit(value);
  }
}
