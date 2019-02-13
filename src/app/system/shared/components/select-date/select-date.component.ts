import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'yh-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.scss']
})
export class SelectDateComponent implements OnInit {
  constructor(private localeService: BsLocaleService) { }

  @Output() sendFirstDate = new EventEmitter<Date>();
  @Output() sendSecondDate = new EventEmitter<Date>();

  ngOnInit() {
    this.localeService.use('ru');
  }

  onValueChange(event: Date[] = []) {
    if (event) {
      this.sendFirstDate.emit(event[0]);
      this.sendSecondDate.emit(event[1]);
    } else {
      this.sendFirstDate.emit(null);
      this.sendSecondDate.emit(null);
    }
  }

  
}
