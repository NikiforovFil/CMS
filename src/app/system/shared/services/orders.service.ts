import { BaseApi } from 'src/app/shared/core/base-api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable()
export class OrdersService extends BaseApi{
    constructor(public http: HttpClient) {
        super(http)
    }
    
    private apiGet = 'get_orders.php?';

    getOrders(ccid: string): Observable<Order[]> {
        return this.get(this.apiGet + 'ccid=' + ccid);
    }
}