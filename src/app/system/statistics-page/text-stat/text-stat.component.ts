import { Component, Input } from '@angular/core';

@Component({
  selector: 'yh-text-stat',
  templateUrl: './text-stat.component.html',
  styleUrls: ['./text-stat.component.scss']
})
export class TextStatComponent {
  @Input() topServices:[];

//   topServices = [
//     {
//     'number' : '1',
//     'name' : 'Электрик',
//     'value' : 35
//   },
//     {
//     'number' : '2',
//     'name' : 'Сантехник',
//     'value' : 28
//   },
//     {
//     'number' : '3',
//     'name' : 'Слесарь',
//     'value' : 21
//   },
//     {
//     'number' : '4',
//     'name' : 'Плотник',
//     'value' : 9
//   },
//     {
//     'number' : '5',
//     'name' : 'Монтажник',
//     'value' : 3
//   },

// ]
}
