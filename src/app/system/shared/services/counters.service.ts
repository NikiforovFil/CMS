import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Counter } from '../models/counter.model';

@Injectable()

export class CountersService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiUrl = 'counters_list.php?';

    private getApiUrl(url: string = ''): string {
        return this.apiUrl + 'ccid=' + url;
    } 

    getCountersData(ccid: string = ''): Observable<Counter[]> {
         return this.get(this.getApiUrl(ccid));
    }

}