import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Services } from '../models/services.model';

@Injectable()

export class ServicesService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiUrl = 'services.php?';
    private apiEdit = 'edit_service.php?';
    private apiAdd = 'add_service.php?';
    private apiDel = 'delete_service.php?';

    private getApiUrl(url: string = ''): string {
        return this.apiUrl + 'ccid=' + url;
    }

    getServices(ccid: string = ''): Observable<Services[]> {
        return this.get(this.getApiUrl(ccid));
    }

    editService(serviceItem: Services) {
        return this.get(this.apiEdit + 'sid=' + serviceItem.sid + '&service_name=' + serviceItem.name + '&service_description=' + serviceItem.description + '&service_email=' + serviceItem.email + '&service_category=' + serviceItem.category + '&service_img=' + serviceItem.img)
    }

    addService(form, ccid) {
        return this.get(this.apiAdd + 'ccid=' + ccid + '&service_name=' + form.title + '&service_description=' + form.description + '&service_email=' + form.email + '&service_category=' + form.category + '&service_img=' + form.img)
    }

    deleteService(sid) {
        return this.get(this.apiDel + 'sid=' + sid);
    }
}