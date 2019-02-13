import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'yhStatus'
})

export class StatusPipe implements PipeTransform {

    transform(status: string): any {
        if (status === 'new') {
            return 'Новое';
        } else if (status === 'done') {
            return 'Выполнено';
        } else if (status === 'working') {
            return 'В работе';
        }
    }
}
