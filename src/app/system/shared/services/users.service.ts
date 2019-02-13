import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { User } from '../models/user.model';

@Injectable()

export class UsersService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiGetUid = 'get_user_uid.php?';
    private apiGetAll = 'get_users.php?';
    private apiGetByAddress = 'get_usersByAddress.php?';

    getUserByUid(uid): Observable<User> {
        return this.get(this.apiGetUid + 'uid=' + uid);
    }

    getAllUsers(ccid): Observable<User[]> {
        return this.get(this.apiGetAll + 'ccid=' + ccid);
    }

    getUsersByAddress(city, street, home, liter): Observable<User[]> {
        return this.get(this.apiGetByAddress + 'city=' + city + '&street=' + street + '&home=' + home + '&liter=' + liter);
    }
}