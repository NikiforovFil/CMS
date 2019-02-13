import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Appeal } from '../models/appeal.model';

@Injectable()

export class AppealService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiUrl = 'get_mail.php?';
    private apiUrl1 = 'edit_status_appeal.php?';

    private getApiUrl(url: string = ''): string {
        return this.apiUrl + 'ccid=' + url;
    } 

    getAppeal(ccid: string = ''): Observable<Appeal[]> {
         return this.get(this.getApiUrl(ccid));
    }

    editStatusAppeal(status: string = 'new', appeal: Appeal) {
         return this.get(this.apiUrl1 + 'shid=' + appeal.shid + '&status=' + status);
    }
}