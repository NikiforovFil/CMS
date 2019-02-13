import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Payment } from '../models/payment.model';

@Injectable()

export class PaymentsService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiGet = 'get_payments.php?';

    getPayments(ccid: string): Observable<Payment[]> {
        return this.get(this.apiGet + 'ccid=' + ccid);
    }
}