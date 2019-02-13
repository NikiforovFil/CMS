import { Injectable } from "@angular/core";
import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from '../models/news.model';

@Injectable()

export class NewsService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http)
    }

    private apiUrl = 'cc_news.php?';
    private apiEdit = 'edit_news.php?';
    private apiAdd = 'add_news.php?';
    private apiDel = 'delete_news.php?';

    private getApiUrl(url: string = ''): string {
        return this.apiUrl + 'ccid=' + url;
    }

    getNews(ccid: string = ''): Observable<News> {
        return this.get(this.getApiUrl(ccid));
    }

    editNews(ccid: string, nid, news) {
        return this.get(this.apiEdit + 'ccid=' + ccid + '&nid=' + nid + '&news_title=' + news.title + '&news_description=' + news.description + '&url_news_img=' + news.img);
    }

    addNews(ccid: string, news) {
        return this.get(this.apiAdd + 'ccid=' + ccid + '&news_title=' + news.title + '&news_description=' + news.description + '&url_news_img=' + news.img);
    }

    deleteNews(nid: number) {
        return this.get(this.apiDel + 'nid=' + nid);
    }
}