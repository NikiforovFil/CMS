import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'yhFilter'
})

export class FilterPipe implements PipeTransform {

    transform(items, value: string, filterByTypes = [], firstDate: Date = null, secondDate: Date): any {
        let filt = items;
        //проверка выбраных типов счетчика
        if (filterByTypes.length !== 0) {
            filt = filt.filter((f) => {
                let t = Object.assign({}, f);
                return this.filtByType(t, filterByTypes)
            });
        }
        //проверка диапазона дат 
        if (firstDate || secondDate) {
            //прибавление одного дня, чтобы он входил в диапазон поиска
            if (secondDate) {
                secondDate.setDate(secondDate.getDate() + 1)
            }

            filt = filt.filter((f) => {
                let t = Object.assign({}, f);
                return this.filtByDate(t, firstDate, secondDate);
            })

            //отнимаем обратно один день, потому что он каким то хреном отсюда попадает в second-date.component
            if (secondDate) {
                secondDate.setDate(secondDate.getDate() - 1)
            }
        }
        //поиск
        if (value) {
            filt = filt.filter((i) => {
                let t = Object.assign({}, i);
                return this.findMatch(t, value);
            });
        }
        return filt;
    }

    private filtByDate(item, firstDate, secondDate): boolean {
        if (firstDate && secondDate) {
            return ((new Date(item.date) >= new Date(firstDate)) && (new Date(item.date) <= new Date(secondDate)));
        } else if (firstDate) {
            return (new Date(item.date) >= new Date(firstDate));
        } else if (secondDate) {
            return (new Date(item.date) <= new Date(secondDate));
        }
    }

    private filtByType(item, types): boolean {
        for (let z in types) {
            if (types[z].item_id === item.type) {
                return true;
            } else if (item.type.indexOf(types[z].item_id) !== -1) {
                return true;
            }
        }
        return false;
    }

    private findMatch(item, value): boolean {
        for (var key in item) {
            if (item[key]) {
                if (item[key].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    return true;
                }
            } else {
                return false;
            }
        }
        return false;
    }
}
