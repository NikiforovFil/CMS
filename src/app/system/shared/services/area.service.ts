import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Area } from '../models/area.model';

@Injectable()

export class AreaService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiGetArea = 'get_area.php?';
    private apiAddArea = 'add_area.php?';
    private apiEditArea = 'edit_countersList.php?';

    getAreaList(ccid: string): Observable<Area[]> {
        return this.get(this.apiGetArea + 'ccid=' + ccid);
    }

    addArea(ccid: string, area) {
        var lit = '';
        if (area.liter) {
            lit = area.liter;
        }
        return this.get(this.apiAddArea + 'ccid=' + ccid + '&city=' + area.city + '&street=' + area.street + '&home=' + area.home + '&liter=' + lit);
    }

    editCountersList(aid, countersList: []) {
        return this.get(this.apiEditArea + 'aid=' + aid + '&gas=' + countersList['gas'] + '&hot_water=' + countersList['hot_water'] + '&cold_water=' + countersList['cold_water'] + '&electricity=' + countersList['electricity'] + '&heating=' + countersList['heating']);
    }
}