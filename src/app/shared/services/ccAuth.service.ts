import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../core/base-api';
import { ControlCompany } from '../models/control-company.model';

@Injectable()
export class CcAuthService extends BaseApi {

    constructor(public http: HttpClient) {
        super(http);
    }

    private apiUrl = 'auth.php?';

    //возможно лучше заменить на вход по id
    private getApiUrl(url: string = ''): string {
        return this.apiUrl + 'email=' + url;
    } 

    getUserByEmail(email: string): Observable<ControlCompany> {
        return this.get(this.getApiUrl(email));
    }

}