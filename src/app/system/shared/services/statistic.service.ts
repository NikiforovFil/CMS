import { Injectable } from "@angular/core";
import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class StatisticService extends BaseApi {
    constructor(public http: HttpClient){
        super(http)
    }

    private apiGetPaymentsData = 'get_statistics_data.php?'

    getPaymentsData(ccid) {
        return this.get(this.apiGetPaymentsData + 'ccid=' + ccid);
    }
}